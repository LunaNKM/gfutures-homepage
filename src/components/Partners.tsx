import Image from "next/image";
import { partnerSectionLogos } from "@/lib/images";

const partnersCopy =
  "최고의 고객사와 최고의 파트너가 만나 최고의 성과를 만듭니다.";

export default function Partners() {
  return (
    <section className="w-full bg-white text-black">
      {/* 모바일: 제목·문구 위, 로고는 아래 그리드 */}
      <div className="flex flex-col items-start gap-12 px-6 py-[80px] md:hidden">
        <div>
          <h2 className="display text-[56px] leading-[0.98]">
            Our
            <br />
            Partners
          </h2>
          <p className="mt-6 max-w-[360px] text-[17px] font-medium leading-[1.5] tracking-[-0.01em]">
            {partnersCopy}
          </p>
        </div>
        <div className="grid w-full grid-cols-3 items-center justify-items-center gap-x-6 gap-y-10">
          {partnerSectionLogos.map((logo) => (
            <div
              key={logo.label}
              className="relative flex items-center justify-center"
              style={{
                width: `clamp(${Math.round(logo.width * 0.5)}px, ${
                  logo.width * 0.18
                }vw, ${logo.width}px)`,
                aspectRatio: `${logo.width} / ${logo.height}`,
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

      {/* 데스크탑: Figma 1440 캔버스 좌표 그대로 절대배치 */}
      <div className="relative mx-auto hidden h-[727px] w-[1440px] md:block">
        <h2 className="display absolute left-[138px] top-[164px] text-[74px] leading-none">
          Our
          <br />
          Partners
        </h2>
        <p className="absolute left-[143px] top-[346px] max-w-[360px] text-[24px] font-medium leading-[36px] tracking-[-0.01em]">
          {partnersCopy}
        </p>
        {partnerSectionLogos.map((logo) => (
          <div
            key={logo.label}
            className="absolute"
            style={{
              left: logo.x,
              top: logo.y,
              width: logo.width,
              height: logo.height,
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
