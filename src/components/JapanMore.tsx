import ScrollReveal from "./ScrollReveal";

// Figma node 308:1413 — Service(JAPAN) & More 상세.
// 상단: 다른 서비스(Account / Influencer / Performance) 접힌 메뉴(검정).
// 하단: & More 펼침(흰색) — POP UP / Offline / IP·Media / OOH 카테고리별 카드 3장.

const collapsedRows = [
  { title: "Account Management", sub: "계정 운영 대행", href: "/japan#jp-account", top: 208, subTop: 273, arrowTop: 238 },
  { title: "Influencer Marketing", sub: "인플루언서 전략 제안", href: "/japan#jp-influencer", top: 376, subTop: 449, arrowTop: 406 },
  { title: "Performance Marketing", sub: "퍼포먼스 마케팅", href: "/japan#jp-performance", top: 571, subTop: 641, arrowTop: 601 },
];

// 카테고리: 라벨 + 카드 3장(x 좌표/너비는 Figma 원본).
const categories = [
  { label: "POP UP", items: "앳코스메 · JKCS", y: 965 },
  { label: "Offline", items: "돈키호테 · 마츠모토 키요시 · LOFT", y: 1562 },
  { label: "IP·Media", items: "캐릭터 IP · 미디어(잡지)사", y: 2169 },
  { label: "OOH", items: "사이버트럭 · 오모테산도 옥외광고", y: 2766 },
];

const cardCols = [
  { x: 103, w: 452 },
  { x: 586, w: 452 },
  { x: 1074, w: 366 },
];

export default function JapanMore() {
  return (
    <section className="relative w-[1440px] bg-white">
      {/* 상단 검정 헤더 — 접힌 서비스 메뉴 */}
      <div className="relative h-[720px] w-full overflow-hidden bg-black">
        <span className="display absolute left-[110px] top-[129px] flex h-[40px] items-center rounded-full border-2 border-white px-5 text-[20px] font-medium uppercase text-white">
          see more
        </span>
        {collapsedRows.map((row) => (
          <a
            key={row.title}
            href={row.href}
            className="group absolute left-0 block w-full"
          >
            <span
              className="display absolute left-[111px] text-[49px] leading-none text-white transition-opacity group-hover:opacity-60"
              style={{ top: row.top }}
            >
              {row.title}
            </span>
            <span
              className="absolute left-[111px] text-[23px] font-medium leading-[34px] text-white transition-opacity group-hover:opacity-60"
              style={{ top: row.subTop }}
            >
              {row.sub}
            </span>
            <span
              className="absolute left-[1316px] text-[30px] leading-none text-white transition-opacity group-hover:opacity-60"
              style={{ top: row.arrowTop }}
            >
              ↗
            </span>
          </a>
        ))}
        {[331, 513].map((t) => (
          <span
            key={t}
            className="absolute left-[78px] h-px w-[1285px] bg-white/30"
            style={{ top: t }}
          />
        ))}
      </div>

      {/* & More 펼침 — 흰색 */}
      <div className="relative w-full bg-white pb-[160px]">
        <ScrollReveal as="div" className="relative h-[200px]">
          <h2 className="display absolute left-[110px] top-[73px] text-[49px] leading-none text-black">
            &amp; More
          </h2>
          <span className="absolute left-[1296px] top-[49px] text-[30px] leading-none text-black">
            ↗
          </span>
          <p className="absolute left-[110px] top-[146px] text-[23px] font-medium leading-[34px] text-black">
            일본 현지 강력한 네트워킹을 바탕으로 고객의 목표 달성에 필요한 전
            과정을 함께 하겠습니다.
          </p>
        </ScrollReveal>

        {categories.map((cat) => (
          <ScrollReveal
            as="div"
            key={cat.label}
            className="relative w-full"
            style={{ height: 521 }}
          >
            <span className="display absolute left-[103px] top-0 inline-flex h-[36px] items-center rounded-full border border-black px-5 text-[24px] font-medium text-black">
              {cat.label}
            </span>
            <span className="absolute left-[103px] top-[44px] text-[16px] font-medium text-black/55">
              {cat.items}
            </span>
            {cardCols.map((col) => (
              <div
                key={col.x}
                className="absolute top-[85px] h-[431px] rounded-[12px] bg-gray-soft"
                style={{ left: col.x, width: col.w }}
              />
            ))}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
