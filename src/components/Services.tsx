"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/site";

export default function Services() {
  const [active, setActive] = useState(0);
  return (
    <section className="w-[1440px] bg-black px-[78px] py-[110px] text-white">
      <div className="border-t-[4px] border-white">
        {services.map((s, i) => {
          const open = active === i;
          return (
            <Link
              key={s.en}
              href={`/service#${s.slug}`}
              onMouseEnter={() => setActive(i)}
              className="block border-b-[4px] border-white transition-colors duration-300"
              style={{
                background: open ? "#fff" : "transparent",
                color: open ? "#000" : "#fff",
              }}
            >
              <div className="flex items-center justify-between px-2 py-7">
                <div>
                  <p className="mb-2 text-[22px] font-medium capitalize opacity-80">
                    {s.ko}
                  </p>
                  <p className="display text-[49px] leading-none">{s.en}</p>
                </div>
                <span className="text-4xl">↗</span>
              </div>
              <div
                className="overflow-hidden px-2 transition-all duration-300"
                style={{ maxHeight: open ? 160 : 0 }}
              >
                <p className="max-w-[760px] pb-7 text-[22px] font-medium leading-[1.5] tracking-[-0.01em]">
                  {s.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
