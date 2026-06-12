"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

// Figma node 320:669 하단 서비스 메뉴 + 320:1413 & More 펼침.
// & More 는 다른 페이지로 이동하지 않고, 클릭 시 아래로 상세(카테고리별 카드)가 펼쳐진다.

const menuRows = [
  {
    title: "popup",
    sub: "계정 운영 대행",
    href: "#jp-account",
    top: 76,
    height: 103,
    titleTop: 8,
    subTop: 62,
    arrowTop: 39,
  },
  {
    title: "Influencer Marketing",
    sub: "인플루언서 전략 제안",
    href: "#jp-influencer",
    top: 179,
    height: 131,
    titleTop: 35,
    subTop: 85,
    arrowTop: 17,
  },
  {
    title: "Performance Marketing",
    sub: "퍼포먼스 마케팅",
    href: "#jp-performance",
    top: 311,
    height: 128,
    titleTop: 30,
    subTop: 83,
    arrowTop: 56,
  },
  {
    title: "& More",
    sub: "일본 현지 네트워킹 바탕 일본 전략 수립",
    top: 439,
    height: 131,
    titleTop: 29,
    subTop: 85,
    arrowTop: 56,
  },
];

// & More 펼침 — 카테고리별 라벨 + 카드 3장.
const moreCategories = [
  { label: "POP UP", items: "앳코스메 · JKCS" },
  { label: "Offline", items: "돈키호테 · 마츠모토 키요시 · LOFT" },
  { label: "IP·Media", items: "캐릭터 IP · 미디어(잡지)사" },
  { label: "OOH", items: "사이버트럭 · 오모테산도 옥외광고" },
];

const cardCols = [
  { x: 103, w: 344 },
  { x: 586, w: 344 },
  { x: 1074, w: 278 },
];

export default function JapanServiceMenu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ── 하단 서비스 메뉴 (black, h=890) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[570px] w-full overflow-hidden bg-black"
      >
        <div id="jp-more" className="absolute top-[-88px]" />
        {menuRows.map((row) =>
          row.title === "& More" ? (
            // & More — 클릭 시 아래로 상세가 펼쳐진다. hover 시 흰색으로 반전.
            <button
              key={row.title}
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className={`group absolute left-0 block w-full text-left transition-colors duration-300 hover:bg-white ${
                expanded ? "bg-white" : ""
              }`}
              style={{ top: row.top, height: row.height }}
            >
              <span
                className={`absolute left-[111px] text-[14px] font-medium leading-[26px] transition-all duration-300 group-hover:text-black ${
                  expanded ? "text-black opacity-0" : "text-white"
                }`}
                style={{ top: row.subTop }}
              >
                {row.sub}
              </span>
              <span
                className={`display absolute left-[111px] text-[30px] leading-none transition-colors duration-300 group-hover:text-black ${
                  expanded ? "text-black" : "text-white"
                }`}
                style={{ top: row.titleTop }}
              >
                {row.title}
              </span>
              <span
                className={`absolute left-[1316px] text-[18px] leading-none transition-[transform,color] duration-300 group-hover:text-black ${
                  expanded ? "text-black" : "text-white"
                }`}
                style={{
                  top: row.arrowTop,
                  transform: expanded ? "rotate(90deg)" : "none",
                }}
              >
                ↗
              </span>
            </button>
          ) : (
            <a
              key={row.title}
              href={row.href}
              className="group absolute left-0 block w-full transition-colors duration-300 hover:bg-white"
              style={{ top: row.top, height: row.height }}
            >
              <span
                className="absolute left-[111px] text-[14px] font-medium leading-[26px] text-white transition-colors duration-300 group-hover:text-black"
                style={{ top: row.subTop }}
              >
                {row.sub}
              </span>
              <span
                className="display absolute left-[111px] text-[30px] leading-none text-white transition-colors duration-300 group-hover:text-black"
                style={{ top: row.titleTop }}
              >
                {row.title}
              </span>
              <span
                className="absolute left-[1316px] text-[18px] leading-none text-white transition-colors duration-300 group-hover:text-black"
                style={{ top: row.arrowTop }}
              >
                ↗
              </span>
            </a>
          )
        )}
        {/* 구분선 */}
        {[179, 311, 439, 570].map((t) => (
          <span
            key={t}
            className="absolute left-[78px] h-px w-[1285px] bg-white/30"
            style={{ top: t }}
          />
        ))}
      </ScrollReveal>

      {/* ── & More 펼침 (white) — 클릭 시 아래로 부드럽게 펼쳐진다 ── */}
      <div
        className={`grid w-full bg-white transition-[grid-template-rows] duration-500 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative w-full pb-[122px]">
            {/* & More 제목은 위의 메뉴 행이 그대로 펼쳐진 것이므로 여기서는 설명만. */}
            <div className="relative h-[106px]">
              <p className="absolute left-[110px] top-[43px] text-[14px] font-medium leading-[26px] text-black">
                일본 현지 강력한 네트워킹을 바탕으로 고객의 목표 달성에 필요한 전
                과정을 함께 하겠습니다.
              </p>
            </div>

            {moreCategories.map((cat) => (
              <div
                key={cat.label}
                className="relative w-full"
                style={{ height: 396 }}
              >
                <span className="display absolute left-[103px] top-0 inline-flex h-[27px] items-center rounded-full border border-black px-5 text-[14px] font-medium text-black">
                  {cat.label}
                </span>
                <span className="absolute left-[103px] top-[33px] text-[10px] font-medium text-black/55">
                  {cat.items}
                </span>
                {cardCols.map((col) => (
                  <div
                    key={col.x}
                    className="absolute top-[65px] h-[328px] rounded-[12px] bg-gray-soft"
                    style={{ left: col.x, width: col.w }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
