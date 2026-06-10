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
    top: 100,
    height: 136,
    titleTop: 10,
    subTop: 81,
    arrowTop: 51,
  },
  {
    title: "Influencer Marketing",
    sub: "인플루언서 전략 제안",
    href: "#jp-influencer",
    top: 236,
    height: 173,
    titleTop: 46,
    subTop: 112,
    arrowTop: 22,
  },
  {
    title: "Performance Marketing",
    sub: "퍼포먼스 마케팅",
    href: "#jp-performance",
    top: 409,
    height: 168,
    titleTop: 39,
    subTop: 109,
    arrowTop: 74,
  },
  {
    title: "& More",
    sub: "일본 현지 네트워킹 바탕 일본 전략 수립",
    top: 577,
    height: 173,
    titleTop: 38,
    subTop: 112,
    arrowTop: 74,
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
  { x: 103, w: 452 },
  { x: 586, w: 452 },
  { x: 1074, w: 366 },
];

export default function JapanServiceMenu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ── 하단 서비스 메뉴 (black, h=890) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[750px] w-full overflow-hidden bg-black"
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
                className={`absolute left-[111px] text-[23px] font-medium leading-[34px] transition-all duration-300 group-hover:text-black ${
                  expanded ? "text-black opacity-0" : "text-white"
                }`}
                style={{ top: row.subTop }}
              >
                {row.sub}
              </span>
              <span
                className={`display absolute left-[111px] text-[49px] leading-none transition-colors duration-300 group-hover:text-black ${
                  expanded ? "text-black" : "text-white"
                }`}
                style={{ top: row.titleTop }}
              >
                {row.title}
              </span>
              <span
                className={`absolute left-[1316px] text-[30px] leading-none transition-[transform,color] duration-300 group-hover:text-black ${
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
                className="absolute left-[111px] text-[23px] font-medium leading-[34px] text-white transition-colors duration-300 group-hover:text-black"
                style={{ top: row.subTop }}
              >
                {row.sub}
              </span>
              <span
                className="display absolute left-[111px] text-[49px] leading-none text-white transition-colors duration-300 group-hover:text-black"
                style={{ top: row.titleTop }}
              >
                {row.title}
              </span>
              <span
                className="absolute left-[1316px] text-[30px] leading-none text-white transition-colors duration-300 group-hover:text-black"
                style={{ top: row.arrowTop }}
              >
                ↗
              </span>
            </a>
          )
        )}
        {/* 구분선 */}
        {[236, 409, 577, 750].map((t) => (
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
          <div className="relative w-full pb-[160px]">
            {/* & More 제목은 위의 메뉴 행이 그대로 펼쳐진 것이므로 여기서는 설명만. */}
            <div className="relative h-[140px]">
              <p className="absolute left-[110px] top-[56px] text-[23px] font-medium leading-[34px] text-black">
                일본 현지 강력한 네트워킹을 바탕으로 고객의 목표 달성에 필요한 전
                과정을 함께 하겠습니다.
              </p>
            </div>

            {moreCategories.map((cat) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
