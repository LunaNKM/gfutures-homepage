"use client";

import { useState } from "react";
import { workBrands } from "@/lib/images";

const FILTERS = [
  { key: "all", label: "All", count: 48 },
  { key: "inbound", label: "inbound", count: 8 },
  { key: "usa", label: "usa", count: 22 },
  { key: "japan", label: "japan", count: 18 },
];

export default function Work() {
  const [filter, setFilter] = useState("all");
  const shown =
    filter === "all"
      ? workBrands
      : workBrands.filter((b) => b.tag === filter);

  return (
    <section id="work" className="w-[1440px] bg-white px-[20px] py-[110px] text-black">
      <h2 className="display text-[100px] leading-none">Work</h2>
      <p className="display mt-4 text-[58px] leading-none normal-case">
        Seeking for New Challenge and New Success with You
      </p>

      <div className="mt-12 flex items-center gap-[50px]">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className="flex items-center gap-[15px]"
          >
            <span
              className={`h-5 w-5 rounded-full border border-black ${
                filter === f.key ? "bg-black" : "bg-transparent"
              }`}
            />
            <span className="display text-[32px] leading-none normal-case">
              {f.label}({f.count})
            </span>
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-3 gap-[14px]">
        {shown.map((b, i) => (
          <div key={b.label + i} className="flex flex-col gap-2">
            <div className="h-[270px] w-full overflow-hidden bg-gray-soft">
              <img src={b.img} alt={b.label} className="h-full w-full object-cover" />
            </div>
            <p className="text-[32px] font-medium tracking-[-0.02em]">
              {b.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="rounded-full border border-black px-6 py-2 text-sm font-medium uppercase">
          view more
        </button>
      </div>
    </section>
  );
}
