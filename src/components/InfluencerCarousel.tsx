"use client";

import { useState } from "react";
import { influencerCards } from "@/lib/images";

// 휴대폰 여러 대가 평면으로 가로로 지나가는 효과 (회전/원근 없음).
export default function InfluencerCarousel() {
  const [paused, setPaused] = useState(false);
  // 끊김 없는 루프를 위해 카드 목록을 두 번 이어붙임
  const cards = [...influencerCards, ...influencerCards];

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-max gap-6"
        style={{
          animation: "marquee 40s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {cards.map((src, i) => (
          <div
            key={i}
            className="h-[535px] w-[300px] flex-none overflow-hidden rounded-[24px] bg-gray-soft shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
