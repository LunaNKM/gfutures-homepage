"use client";

import { useState } from "react";
import Link from "next/link";
import { whatWeDo } from "@/lib/site";

const CX = 270;
const CY = 150;
const RX = 255;
const RY = 72;
const ROT = 13;

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

function sampleEllipse(rotDeg: number, t0: number, step = 3): string {
  let points = "";
  for (let a = 0; a <= 360; a += step) {
    const [x, y] = ptOnEllipse(t0 + a, rotDeg);
    points += `${x.toFixed(2)},${y.toFixed(2)} `;
  }
  return points.trim();
}

function buildMotionPath(): string {
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
      className="mx-auto h-[220px] w-[min(540px,52vw)] overflow-visible md:h-[250px] md:w-[540px]"
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
      className="w-full bg-black px-6 pb-[96px] pt-[86px] text-white md:px-[78px] md:pb-[116px] md:pt-[115px]"
    >
      <div className="mx-auto max-w-[1284px]">
        <h2 className="display text-center text-[52px] leading-none md:text-[85px]">
          What We Do
        </h2>
        <p className="mx-auto mt-7 max-w-[900px] text-center text-[18px] font-medium leading-[1.45] tracking-[-0.01em] md:text-2xl">
          단발성 대행이 아닌 브랜딩, 마케팅, 커머스가 종합된 LOOP 전략을 제안 드립니다.
        </p>

        <div className="mt-[82px] flex min-h-[342px] items-center justify-between rounded-[2px] border-[3px] border-white px-8 py-10 md:px-[38px] md:py-0">
          <div className="flex flex-col justify-between gap-[110px] py-4">
            <span className="display text-[26px] leading-none md:text-[36px]">
              Branding
            </span>
            <span className="display text-[26px] leading-none md:text-[36px]">
              Branding
            </span>
          </div>
          <InfinityLoop />
          <div className="flex flex-col justify-between gap-[110px] py-4 text-right">
            <span className="display text-[26px] leading-none md:text-[36px]">
              Branding
            </span>
            <span className="display text-[26px] leading-none md:text-[36px]">
              Branding
            </span>
          </div>
        </div>

        <div className="mt-[66px]">
          <Link
            href="/service"
            className="mb-7 inline-flex h-[45px] items-center rounded-full border-[3px] border-white px-8 text-[28px] font-medium uppercase leading-none tracking-tight transition-colors hover:bg-white hover:text-black"
          >
            see more
          </Link>
          {whatWeDo.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.title} className="border-b-[3px] border-white">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between py-[26px] text-left"
                >
                  <span className="display text-[36px] leading-none md:text-[49px]">
                    {item.title}
                  </span>
                  <span className="text-[42px] font-light leading-none md:text-[62px]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 120 : 0 }}
                >
                  <p className="pb-6 text-[17px] font-medium leading-[1.45] tracking-[-0.01em] md:text-[22px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
