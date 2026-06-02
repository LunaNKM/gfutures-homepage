"use client";

import { useState } from "react";
import { goats } from "@/lib/images";

// G.O.A.T.S — 확인된 값(Grow Together / Own the Result) 외는 디자인 맥락으로 추론
const VALUES: Record<string, string> = {
  G: "Grow Together",
  O: "Own the Result",
  A: "Act with Ambition",
  T: "Trust & Transparency",
  S: "Scrum Spirit",
};

export default function CoreValue() {
  const [active, setActive] = useState(0);
  return (
    <section className="w-[1440px] bg-black px-[42px] pb-[100px] pt-[101px] text-white">
      <h2 className="display mb-10 text-center text-[60px] leading-none">
        Core Value
      </h2>
      <div className="flex h-[726px] gap-[33px]">
        {goats.map((g, i) => (
          <div
            key={g.letter}
            onMouseEnter={() => setActive(i)}
            className="relative cursor-pointer overflow-hidden rounded-[8px] transition-all duration-500 ease-out"
            style={{ flexGrow: active === i ? 4 : 1, flexBasis: 0 }}
          >
            <img
              src={g.img}
              alt={g.letter}
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30" />
            <span className="display absolute bottom-6 left-6 text-[78px] font-bold leading-none">
              {g.letter}
            </span>
            <span
              className="absolute bottom-12 left-6 whitespace-nowrap text-2xl font-medium tracking-tight transition-opacity duration-300"
              style={{ opacity: active === i ? 1 : 0 }}
            >
              {VALUES[g.letter]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
