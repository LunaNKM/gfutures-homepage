"use client";

import Image from "next/image";
import { clientLogoRows } from "@/lib/images";

const clientsCopy =
  "\ucd5c\uace0\uc758 \uace0\uac1d\uc0ac\uc640 \ucd5c\uace0\uc758 \ud30c\ud2b8\ub108\uac00 \ub9cc\ub098 \ucd5c\uace0\uc758 \uc131\uacfc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.";

function ClientMarqueeRow({
  logos,
  reverse = false,
  duration,
}: {
  logos: (typeof clientLogoRows)[number];
  reverse?: boolean;
  duration: number;
}) {
  const repeated = [...logos, ...logos];

  return (
    <div className="h-[170px] overflow-hidden bg-black md:h-[305px]">
      <div
        className="flex h-full w-max items-center gap-[42px] md:gap-[52px]"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {repeated.map((logo, index) => (
          <div
            key={`${logo.label}-${index}`}
            className="relative flex h-[72px] flex-none items-center justify-center md:h-[112px]"
            style={{
              width: `clamp(${Math.round(logo.width * 0.46)}px, ${
                logo.width * 0.12
              }vw, ${logo.width}px)`,
            }}
          >
            <Image
              src={logo.src}
              alt={logo.label}
              fill
              sizes={`${logo.width}px`}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="w-screen bg-black text-white md:w-[1440px]">
      <div className="flex min-h-[430px] flex-col items-center justify-start px-6 pt-[108px] text-center md:h-[820px] md:pt-[172px]">
        <h2 className="display text-[48px] leading-none md:text-[85px]">
          Our Clients
        </h2>
        <p className="mt-7 text-[17px] font-medium leading-[1.5] tracking-[-0.01em] md:mt-[45px] md:text-[24px]">
          {clientsCopy}
        </p>
      </div>
      <ClientMarqueeRow logos={clientLogoRows[0]} duration={112} />
      <ClientMarqueeRow logos={clientLogoRows[1]} reverse duration={128} />
    </section>
  );
}
