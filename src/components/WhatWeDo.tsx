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
      className="mx-auto h-[220px] w-[min(540px,52vw)] overflow-visible md:h-[244px] md:w-[440px]"
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
      className="w-full bg-black px-6 pb-[96px] pt-[86px] text-white md:px-0 md:pb-[230px] md:pt-[294px]"
    >
      <div className="mx-auto max-w-[1065px]">
        <h2 className="display text-center text-[52px] leading-none md:text-[74px]">
          What We Do
        </h2>
        <p className="mx-auto mt-7 max-w-[655px] text-center text-[18px] font-medium leading-[1.45] tracking-[-0.01em] md:mt-[25px] md:max-w-[720px] md:text-[21px] md:leading-[31px]">
          단발성 대행이 아닌 브랜딩, 마케팅, 커머스가 종합된 LOOP 전략을 제안 드립니다.
        </p>

        <div className="relative mx-auto mt-[48px] flex min-h-[306px] w-full max-w-[835px] items-center justify-center rounded-[2px] border-[3px] border-white md:mt-[86px] md:h-[306px]">
          <span className="display absolute left-[26px] top-[24px] text-[20px] leading-none md:text-[23px]">
            Branding
          </span>
          <span className="display absolute right-[36px] top-[24px] text-[20px] leading-none md:text-[23px]">
            Branding
          </span>
          <span className="display absolute bottom-[36px] left-[26px] text-[20px] leading-none md:text-[23px]">
            Branding
          </span>
          <span className="display absolute bottom-[36px] right-[36px] text-[20px] leading-none md:text-[23px]">
            Branding
          </span>
          <InfinityLoop />
        </div>

        <div className="mt-[66px] md:mt-[221px]">
          <Link
            href="/service"
            className="mb-7 inline-flex h-[40px] items-center rounded-full border-2 border-white px-6 text-[22px] font-medium uppercase leading-none tracking-tight transition-colors hover:bg-white hover:text-black md:mb-[47px] md:h-[33px] md:text-[24px]"
          >
            see more
          </Link>
          {whatWeDo.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.title} className="border-b-2 border-white">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between py-[26px] text-left md:py-[36px]"
                >
                  <span className="display text-[36px] leading-none md:text-[41px]">
                    {item.title}
                  </span>
                  <span className="text-[42px] font-light leading-none md:text-[52px]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 120 : 0 }}
                >
                  <p className="pb-6 text-[17px] font-medium leading-[1.45] tracking-[-0.01em] md:text-[19px]">
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
