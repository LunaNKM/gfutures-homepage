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
      className="relative h-[520px] w-full overflow-hidden bg-black text-white md:h-[718px]"
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

      <div className="relative z-10 mx-auto h-full max-w-[1440px]">
        <h2 className="display absolute bottom-[120px] left-6 text-[54px] leading-none md:bottom-auto md:left-[84px] md:top-[482px] md:text-[100px]">
          About Us
        </h2>

        <div className="absolute bottom-10 right-6 text-right md:bottom-auto md:right-[96px] md:top-[515px]">
          <p className="display text-[26px] leading-none md:text-[35px]">
            Since 2020
          </p>
          <p className="display mt-3 text-[52px] leading-none md:mt-[10px] md:text-[88px]">
            <CountUp value={getDayCount()} />
          </p>
        </div>
      </div>
    </section>
  );
}
