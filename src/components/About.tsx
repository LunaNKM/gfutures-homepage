import Image from "next/image";
import { aboutBg } from "@/lib/images";
import { CountUp } from "./Reveal";

const DAY_ZERO = new Date("2020-01-13T00:00:00+09:00");

function getDayCount() {
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0,
    0
  );
  const diff = Math.max(
    0,
    Math.floor((today.getTime() - DAY_ZERO.getTime()) / 86400000)
  );

  return `D+${diff}`;
}

export default function About() {
  return (
    <section
      id="about"
      className="relative h-[520px] w-screen overflow-hidden bg-black text-white md:h-[718px] md:w-[1440px]"
    >
      <Image
        src={aboutBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/28" />

      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-24 md:px-[117px] md:pb-[79px] md:pt-[110px]">
        <h2 className="display text-[54px] leading-none md:text-[100px]">
          About Us
        </h2>

        <div className="self-end text-right">
          <p className="display text-[26px] leading-none md:mr-[116px] md:text-[35px]">
            Since 2020
          </p>
          <p className="display mt-3 text-[52px] leading-none md:text-[88px]">
            <CountUp value={getDayCount()} />
          </p>
        </div>
      </div>
    </section>
  );
}
