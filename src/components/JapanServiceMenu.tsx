"use client";

import { useState } from "react";
import { japanServiceMenu } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";

// 하단 서비스 메뉴 — POPUP / OFFLINE / IP MEDIA / OOH 4행 아코디언.
// 각 행을 클릭하면 흰색 패널이 펼쳐지며 내용(설명 + 사진)이 드러난다.
// 내용이 확정된 건 offline·ip media 뿐이라, popup·ooh 는 펼침 내용을 두지 않는다.
// (Figma node 320:669 하단 프레임 + 497:567)
export default function JapanServiceMenu() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ScrollReveal as="div" className="relative w-full overflow-hidden bg-black pb-[40px]">
      <div id="jp-more" className="absolute top-[-88px]" />
      {japanServiceMenu.map((row, i) => {
        const expandable = row.images.length > 0 || row.desc !== "";
        const isOpen = open === row.key;
        return (
          <div key={row.key}>
            {i > 0 && <div className="mx-[78px] h-px bg-white/40" />}
            <button
              type="button"
              onClick={() => expandable && setOpen(isOpen ? null : row.key)}
              className={`flex w-full items-center justify-between py-[34px] pl-[118px] pr-[96px] text-left ${
                expandable ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div>
                <p className="display text-[39px] uppercase leading-none text-white">
                  {row.title}
                </p>
                {row.sub && (
                  <p className="mt-[14px] text-[18px] font-medium leading-none text-white/75">
                    {row.sub}
                  </p>
                )}
              </div>
              <span
                className="text-[28px] leading-none text-white transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
              >
                {"↗"}
              </span>
            </button>

            {/* 펼침 패널 — 클릭 시 부드럽게 열린다 */}
            <div
              className={`grid bg-white transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-[111px] pb-[64px] pt-[44px]">
                  {row.desc && (
                    <p className="mb-[34px] text-[18px] font-medium leading-[26px] text-black">
                      {row.desc}
                    </p>
                  )}
                  {row.images.length > 0 && (
                    <div className="flex gap-[15px]">
                      {row.images.map((src) => (
                        <div
                          key={src}
                          className="relative aspect-[401/300] flex-1 overflow-hidden bg-gray-soft"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mx-[78px] h-px bg-white/40" />
    </ScrollReveal>
  );
}
