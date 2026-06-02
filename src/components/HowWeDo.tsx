"use client";

import { useState } from "react";
import { howWeDoSteps } from "@/lib/site";

export default function HowWeDo() {
  const [active, setActive] = useState(0);
  return (
    <section className="w-[1440px] bg-white px-[39px] pb-[160px] pt-[81px] text-black">
      <h2 className="display mb-12 text-[85px] leading-none">How We Do</h2>
      <div className="flex h-[400px] gap-[1px]">
        {howWeDoSteps.map((step, i) => {
          const open = active === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              className="relative cursor-pointer overflow-hidden transition-all duration-500 ease-out"
              style={{
                flexGrow: open ? 10 : 1,
                flexBasis: 0,
                background: open ? "#d9d9d9" : i % 2 ? "#a6a6a6" : "#d9d9d9",
              }}
            >
              {open ? (
                <div className="p-8">
                  <p className="text-[40px] font-medium leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-[24px] font-medium tracking-[-0.01em]">
                    {step}
                  </p>
                </div>
              ) : (
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 text-[40px] font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-10 text-2xl font-medium capitalize text-black/70">
        그저 에이전시가 아닌, 글로벌 진출 전략의 맞춤형 파트너가 되겠습니다.
      </p>
    </section>
  );
}
