"use client";

import { useState } from "react";
import Link from "next/link";
import { whatWeDo } from "@/lib/site";

// 타원 기하 (흰 라인과 100% 동일한 파라미터)
const CX = 270;
const CY = 150;
const RX = 255;
const RY = 72;
const ROT = 13; // 타원 A: +13°, 타원 B: -13°

// 회전 타원 위의 점 (t = 각도°)
function ptOnEllipse(tDeg: number, rotDeg: number): [number, number] {
  const t = (tDeg * Math.PI) / 180;
  const r = (rotDeg * Math.PI) / 180;
  const lx = RX * Math.cos(t);
  const ly = RY * Math.sin(t);
  return [
    CX + lx * Math.cos(r) - ly * Math.sin(r),
    CY + lx * Math.sin(r) + ly * Math.cos(r),
  ];
}

// 한 타원을 t0부터 360° 샘플링해 폴리라인 좌표 생성
function sampleEllipse(rotDeg: number, t0: number, step = 3): string {
  let s = "";
  for (let a = 0; a <= 360; a += step) {
    const [x, y] = ptOnEllipse(t0 + a, rotDeg);
    s += `${x.toFixed(2)},${y.toFixed(2)} `;
  }
  return s.trim();
}

// 두 타원의 우측 교차점(R)에서 시작 → 타원 A 한 바퀴 → 타원 B 한 바퀴.
// 두 타원 모두 R을 지나므로 경로가 끊기지 않고, 점은 항상 흰 라인 위에 위치.
function buildMotionPath(): string {
  // R(우측 교차점)에서의 각 타원 파라미터
  const tR_A = -39.29;
  const tR_B = 39.29;
  const a = sampleEllipse(ROT, tR_A).split(" ");
  const b = sampleEllipse(-ROT, tR_B).split(" ");
  return `M${a[0]} L${[...a.slice(1), ...b].join(" L")} Z`;
}

const MOTION_PATH = buildMotionPath();

function InfinityLoop() {
  return (
    <svg
      viewBox="0 0 540 300"
      className="mx-auto h-[300px] w-[540px] overflow-visible"
    >
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX}
        ry={RY}
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        transform={`rotate(${ROT} ${CX} ${CY})`}
      />
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX}
        ry={RY}
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        transform={`rotate(${-ROT} ${CX} ${CY})`}
      />
      <circle r="8.5" fill="#0094FF">
        <animateMotion
          dur="9s"
          repeatCount="indefinite"
          path={MOTION_PATH}
          rotate="auto"
        />
      </circle>
    </svg>
  );
}

export default function WhatWeDo() {
  const [open, setOpen] = useState(1);
  return (
    <section
      id="service"
      className="w-[1440px] bg-black px-[78px] pb-[160px] pt-[115px] text-white"
    >
      <h2 className="display text-center text-[85px] leading-none">
        What We Do
      </h2>
      <p className="mt-7 text-center text-2xl font-medium capitalize">
        단발성 대행이 아닌 브랜딩, 마케팅, 커머스가 종합된 LOOP 전략을 제안
        드립니다.
      </p>

      <div className="mt-12 flex items-center justify-between rounded-[2px] border-[3px] border-white px-[60px] py-[40px]">
        <div className="flex flex-col justify-between gap-[110px] py-4">
          <span className="display text-[36px] leading-none">Branding</span>
          <span className="display text-[36px] leading-none">Branding</span>
        </div>
        <InfinityLoop />
        <div className="flex flex-col justify-between gap-[110px] py-4 text-right">
          <span className="display text-[36px] leading-none">Branding</span>
          <span className="display text-[36px] leading-none">Branding</span>
        </div>
      </div>

      <div className="mt-16">
        <Link
          href="/service"
          className="mb-6 inline-block rounded-full border-[3px] border-white px-6 py-1.5 text-[28px] font-medium uppercase tracking-tight transition-colors hover:bg-white hover:text-black"
        >
          see more
        </Link>
        {whatWeDo.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.title} className="border-b-[3px] border-white">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="display text-[49px] leading-none">
                  {item.title}
                </span>
                <span className="text-[42px] font-light leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: isOpen ? 120 : 0 }}
              >
                <p className="pb-6 text-[22px] font-medium tracking-[-0.01em]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
