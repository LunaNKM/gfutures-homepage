// Figma REST API 추출 스크립트
//
// 사용법:
//   node --env-file=.env.local scripts/figma-fetch.mjs            # 파일 JSON + 구조 요약
//   node --env-file=.env.local scripts/figma-fetch.mjs --images   # + 최상위 프레임 PNG export
//
// .env.local 에 필요한 값:
//   FIGMA_TOKEN=figd_...
//   FIGMA_FILE_KEY=...

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const OUT_DIR = "figma-data";

if (!TOKEN || !FILE_KEY) {
  console.error(
    "❌ FIGMA_TOKEN / FIGMA_FILE_KEY 가 없습니다. .env.local 을 확인하세요."
  );
  process.exit(1);
}

const headers = { "X-Figma-Token": TOKEN };

async function api(path) {
  const res = await fetch(`https://api.figma.com/v1${path}`, { headers });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API ${res.status} ${res.statusText}\n${body}`);
  }
  return res.json();
}

// 트리를 돌며 페이지별 최상위 프레임/컴포넌트 목록을 뽑는다
function summarize(document) {
  const pages = (document.children ?? []).map((page) => ({
    name: page.name,
    id: page.id,
    topLevel: (page.children ?? []).map((node) => ({
      name: node.name,
      id: node.id,
      type: node.type,
      size: node.absoluteBoundingBox
        ? `${Math.round(node.absoluteBoundingBox.width)}x${Math.round(
            node.absoluteBoundingBox.height
          )}`
        : null,
    })),
  }));
  return pages;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log("⏳ 파일 데이터 가져오는 중...");
  const file = await api(`/files/${FILE_KEY}`);
  await writeFile(
    join(OUT_DIR, "file.json"),
    JSON.stringify(file, null, 2),
    "utf8"
  );
  console.log(`✅ figma-data/file.json 저장 (파일명: ${file.name})`);

  const summary = summarize(file.document);
  await writeFile(
    join(OUT_DIR, "summary.json"),
    JSON.stringify(summary, null, 2),
    "utf8"
  );

  console.log("\n📄 페이지 / 최상위 프레임 구조:");
  for (const page of summary) {
    console.log(`\n  [페이지] ${page.name}`);
    for (const n of page.topLevel) {
      console.log(`    - ${n.name}  (${n.type}, ${n.size ?? "?"})  id=${n.id}`);
    }
  }

  if (process.argv.includes("--images")) {
    // 모든 페이지의 최상위 프레임을 PNG로 export
    const frameIds = summary
      .flatMap((p) => p.topLevel)
      .filter((n) => ["FRAME", "COMPONENT", "INSTANCE"].includes(n.type))
      .map((n) => n.id);

    if (frameIds.length) {
      console.log(`\n⏳ ${frameIds.length}개 프레임 PNG export 중...`);
      const { images } = await api(
        `/images/${FILE_KEY}?ids=${frameIds.join(",")}&format=png&scale=2`
      );
      await mkdir(join(OUT_DIR, "images"), { recursive: true });
      for (const [id, url] of Object.entries(images)) {
        if (!url) continue;
        const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
        const safe = id.replace(/[:]/g, "-");
        await writeFile(join(OUT_DIR, "images", `${safe}.png`), buf);
        console.log(`   ✅ ${safe}.png`);
      }
    }
  }

  console.log("\n완료 ✨");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
