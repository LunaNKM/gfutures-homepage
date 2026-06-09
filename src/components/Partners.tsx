import Image from "next/image";
import { partnerSectionLogos } from "@/lib/images";

const partnersCopy =
  "\ucd5c\uace0\uc758 \uace0\uac1d\uc0ac\uc640 \ucd5c\uace0\uc758 \ud30c\ud2b8\ub108\uac00 \ub9cc\ub098 \ucd5c\uace0\uc758 \uc131\uacfc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.";

export default function Partners() {
  return (
    <section className="w-screen bg-white px-6 py-[96px] text-black md:h-[606px] md:w-[1440px] md:px-0 md:py-0">
      <h2 className="display text-center text-[48px] leading-none md:pt-[129px] md:text-[85px]">
        Our Partners
      </h2>
      <p className="mx-auto mt-7 max-w-[585px] text-center text-[17px] font-medium leading-[1.5] tracking-[-0.01em] md:mt-[42px] md:text-[24px]">
        {partnersCopy}
      </p>
      <div className="mx-auto mt-16 flex max-w-[1220px] flex-wrap items-center justify-center gap-x-[34px] gap-y-8 md:mt-[78px] md:flex-nowrap md:gap-x-[34px]">
        {partnerSectionLogos.map((logo) => (
          <div
            key={logo.label}
            className="relative flex h-[72px] flex-none items-center justify-center md:h-[124px]"
            style={{
              width: `clamp(${Math.round(logo.width * 0.5)}px, ${
                logo.width * 0.13
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
    </section>
  );
}
