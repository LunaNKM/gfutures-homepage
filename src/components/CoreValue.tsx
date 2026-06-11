"use client";

import Image from "next/image";
import { useState } from "react";
import { goats } from "@/lib/images";

const values = [
  {
    letter: "G",
    title: "Grow Together",
    lines: ["Grow", "Together"],
    desc: "나 혼자가 아닌 동료, 고객, 파트너와 함께 성장하고 도전합니다.",
  },
  {
    letter: "O",
    title: "Own the Result",
    lines: ["Own the", "Result"],
    desc: "결과를 책임지는 자세, 선택이 아닌 필수입니다.",
  },
  {
    letter: "A",
    title: "Act Proactively",
    lines: ["Act", "Proactively"],
    desc: "주도적인 생각은 기회를 만들고, 적극적인 실천은 결과를 만듭니다.",
  },
  {
    letter: "T",
    title: "Think Like A Partner",
    lines: ["Think Like", "A Partner"],
    desc: "내 브랜드, 내 회사라면 어떻게 할지 고민하고 접근합니다.",
  },
  {
    letter: "S",
    title: "Stay Creative, Stay Curious",
    lines: ["Stay Creative,", "Stay Curious"],
    desc: "세상의 모든 성공은 왜(why?)라는 작은 질문에서 시작됩니다.",
  },
];

export default function CoreValue() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full bg-black px-6 py-16 text-white md:h-[832px] md:px-0 md:py-0">
      <h2 className="display text-center text-[40px] leading-none md:pt-[133px] md:text-[36px]">
        Core Value
      </h2>

      <div
        className="mx-auto mt-12 flex h-[430px] w-full max-w-[955px] gap-[14px] md:mt-[79px] md:h-[391px] md:max-w-[726px]"
        onMouseLeave={() => setActive(null)}
      >
        {values.map((value, index) => {
          const img = goats[index];
          const isActive = active === index;

          return (
            <button
              key={value.letter}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() =>
                setActive((current) => (current === index ? null : index))
              }
              className="relative flex-none overflow-hidden text-left transition-[width] duration-500 ease-out"
              style={{
                // gap-[14px] × 4 = 56px; 활성 카드는 6/10, 나머지는 1/10 비율
                width:
                  active === null
                    ? "calc((100% - 56px) / 5)"
                    : isActive
                      ? "calc((100% - 56px) * 0.6)"
                      : "calc((100% - 56px) * 0.1)",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src={img.img}
                  alt={value.letter}
                  fill
                  sizes="(max-width: 768px) 30vw, 552px"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/18" />
              </div>

              {isActive ? (
                <div className="absolute left-0 right-0 top-0 bg-white px-4 py-4 text-black md:px-[14px] md:py-[17px]">
                  <h3 className="display whitespace-nowrap text-[34px] font-medium leading-[0.98] md:text-[36px]">
                    {value.lines.map((line, lineIndex) => (
                      <span key={line} className="block">
                        {lineIndex === 0 ? (
                          <>
                            <span className="text-[#111111]">
                              {line.charAt(0)}
                            </span>
                            <span className="text-[#7f7f7f]">
                              {line.slice(1)}
                            </span>
                          </>
                        ) : (
                          <span className="text-[#7f7f7f]">{line}</span>
                        )}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.45] text-[#4c4c4c] md:mt-[14px] md:text-[13px]">
                    {value.desc}
                  </p>
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 flex items-end pb-[18px] pl-4 md:pb-[18px] md:pl-[18px]">
                  <span className="display text-[32px] font-bold leading-none text-white md:text-[42px]">
                    {value.letter}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
