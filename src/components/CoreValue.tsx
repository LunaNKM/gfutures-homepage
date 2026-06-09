"use client";

import Image from "next/image";
import { useState } from "react";
import { goats } from "@/lib/images";

const values = [
  {
    letter: "G",
    title: "Grow Together",
    desc: "나 혼자가 아닌 동료, 고객, 파트너와 함께 성장하고 도전합니다.",
  },
  {
    letter: "O",
    title: "Own the Result",
    desc: "결과를 책임지는 자세, 선택이 아닌 필수입니다.",
  },
  {
    letter: "A",
    title: "Act Proactively",
    desc: "주도적인 생각은 기회를 만들고, 적극적인 실천은 결과를 만듭니다.",
  },
  {
    letter: "T",
    title: "Think Like A Partner",
    desc: "내 브랜드, 내 회사라면 어떻게 할지 고민하고 접근합니다.",
  },
  {
    letter: "S",
    title: "Stay Creative, Stay Curious",
    desc: "세상의 모든 성공은 왜(why?)라는 작은 질문에서 시작됩니다.",
  },
];

export default function CoreValue() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-screen bg-black px-6 py-16 text-white md:h-[1095px] md:w-[1440px] md:px-0 md:py-0">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="display text-center text-[40px] leading-none md:pt-[175px] md:text-[47px]">
          Core Value
        </h2>

        <div
          className="mt-12 flex h-[430px] gap-2 md:mt-[104px] md:h-[515px] md:gap-[10px]"
          onMouseLeave={() => setActive(null)}
        >
          {values.map((value, index) => {
            const img = goats[index];
            const isActive = active === index;
            const restTitle = value.title.slice(1);

            return (
              <button
                key={value.letter}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive((current) => (current === index ? null : index))}
                className="relative overflow-hidden text-left transition-[flex-grow] duration-500 ease-out"
                style={{
                  flexGrow: isActive ? 6 : 1,
                  flexBasis: 0,
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={img.img}
                    alt={value.letter}
                    fill
                    sizes="(max-width: 768px) 20vw, 552px"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-black/18" />
                </div>

                {isActive ? (
                  <div className="relative h-full">
                    <div className="absolute left-0 right-0 top-0 bg-white px-4 py-4 text-black md:min-h-[183px] md:px-[18px] md:py-[17px]">
                      <div className="flex min-h-[120px] flex-col justify-between md:min-h-[149px]">
                        <div className="flex max-w-[420px] items-start gap-1 leading-[0.95] md:gap-0">
                          <span className="display shrink-0 text-[40px] font-medium text-[#111111] md:text-[56px]">
                            {value.letter}
                          </span>
                          <span className="display text-[40px] font-medium text-[#7f7f7f] md:text-[56px]">
                            {restTitle}
                          </span>
                        </div>
                        <p className="max-w-[320px] text-[13px] leading-[1.45] text-[#4c4c4c] md:max-w-[288px] md:text-[23px]">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-full items-end justify-center pb-4 md:pb-[14px]">
                    <span className="display text-[32px] leading-none text-white md:text-[56px]">
                      {value.letter}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
