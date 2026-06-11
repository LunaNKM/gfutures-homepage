"use client";

import { useState } from "react";
import { japanFilmstrip, japanInfluencerSlides } from "@/lib/images";

const SHADOW = "0 18px 44px rgba(0,0,0,0.45)";

// 인플루언서 캐러셀 — 한 장의 필름스트립을 3개 슬라이드로 크롭.
// 좌/우 슬라이드나 하단 점을 누르면 회전문처럼 돌아 해당 슬라이드가 가운데로 온다.
export default function InfluencerCarousel() {
  const [active, setActive] = useState(1);
  const n = japanInfluencerSlides.length;

  return (
    <div className="absolute left-[799px] top-[114px] h-[502px] w-[623px]">
      <div className="relative h-[456px] w-full">
        {japanInfluencerSlides.map((pos, i) => {
          // 활성 슬라이드 기준 상대 위치(-1 좌 / 0 중앙 / 1 우), 순환 처리
          let rel = i - active;
          if (rel > n / 2) rel -= n;
          if (rel < -n / 2) rel += n;
          const isCenter = rel === 0;
          const offset = rel * 190;
          const scale = isCenter ? 1 : 0.82;

          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`slide ${i + 1}`}
              className="absolute left-1/2 top-1/2 h-[426px] w-[243px] overflow-hidden rounded-[22px] bg-gray-soft transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${offset}px) scale(${scale})`,
                zIndex: isCenter ? 30 : 20 - Math.abs(rel),
                opacity: isCenter ? 1 : 0.7,
                boxShadow: SHADOW,
                cursor: isCenter ? "default" : "pointer",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={japanFilmstrip}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: `${pos}% 50%` }}
                draggable={false}
              />
              {!isCenter && <div className="absolute inset-0 bg-black/30" />}
            </button>
          );
        })}
      </div>

      {/* 하단 점 네비게이션 */}
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-[20px]">
        {japanInfluencerSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`go to slide ${i + 1}`}
            className={`h-[14px] w-[14px] rounded-full transition-colors duration-300 ${
              i === active ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
