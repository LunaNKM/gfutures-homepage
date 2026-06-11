"use client";

import { useState } from "react";
import { howWeDoSteps } from "@/lib/site";

export default function HowWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white px-6 py-[92px] text-black md:h-[649px] md:px-0 md:py-0">
      <div className="mx-auto max-w-[1048px]">
        <h2 className="display text-[48px] leading-none md:pt-[125px] md:text-[50px]">
          How We Do
        </h2>
        <div className="mt-12 flex h-[360px] w-full gap-[1px] md:mt-[55px] md:h-[234px]">
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
                  <p className="text-[22px] font-medium leading-none md:text-[24px]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 max-w-[340px] text-[16px] font-medium leading-[1.5] tracking-[-0.01em] md:text-[16px]">
                    {step}
                  </p>
                </div>
              ) : (
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 text-[22px] font-medium md:text-[24px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
