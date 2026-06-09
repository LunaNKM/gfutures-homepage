"use client";

import { useState } from "react";
import { howWeDoSteps } from "@/lib/site";

const howWeDoCopy =
  "\uae00\ub85c\ubc8c \uc9c4\ucd9c\uc5d0 \ud544\uc694\ud55c \uc804\ub7b5\ubd80\ud130 \uc2e4\ud589, \uc131\uacfc \ubd84\uc11d\uae4c\uc9c0 \ud558\ub098\uc758 \ud750\ub984\uc73c\ub85c \uc124\uacc4\ud569\ub2c8\ub2e4.";

export default function HowWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-screen bg-white px-6 py-[92px] text-black md:h-[854px] md:w-[1440px] md:px-0 md:py-0">
      <h2 className="display text-[48px] leading-none md:ml-[176px] md:pt-[164px] md:text-[65.5px]">
        How We Do
      </h2>
      <div className="mt-12 flex h-[360px] w-full gap-[1px] md:ml-[176px] md:mt-[73px] md:h-[308px] md:w-[1048px]">
        {howWeDoSteps.map((step, i) => {
          const open = active === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="relative cursor-pointer overflow-hidden transition-all duration-500 ease-out"
              style={{
                flexGrow: open ? 9 : 1,
                flexBasis: 0,
                background: open ? "#d9d9d9" : i % 2 ? "#a6a6a6" : "#d9d9d9",
              }}
            >
              {open ? (
                <div className="p-5 md:p-8">
                  <p className="text-[22px] font-medium leading-none md:text-[31px]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 max-w-[340px] text-[16px] font-medium leading-[1.5] tracking-[-0.01em] md:text-[20px]">
                    {step}
                  </p>
                </div>
              ) : (
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 text-[22px] font-medium md:text-[31px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-8 max-w-[720px] text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-black/70 md:ml-[176px] md:mt-10 md:text-[20px]">
        {howWeDoCopy}
      </p>
    </section>
  );
}
