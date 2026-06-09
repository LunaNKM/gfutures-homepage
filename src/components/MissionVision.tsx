import Image from "next/image";
import { missionImg, visionImg } from "@/lib/images";

const missionDesc =
  "세상에 혼자 할 수 있는 일은 없습니다. SCRUM으로 함께 모여 조직, 산업, 구조를 뒤흔드는 Multi Wave Team이 되겠습니다.";
const visionDesc =
  "글로벌 무대에서도 함께 당당히 선도하는 최고 전략 파트너가 되겠습니다.";

function Block({
  kicker,
  title,
  desc,
  img,
  reverse = false,
}: {
  kicker: string;
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid gap-8 md:grid-cols-[601px_726px] md:gap-[59px] ${
        reverse ? "md:grid-cols-[601px_726px]" : ""
      }`}
    >
      <div className={`${reverse ? "md:order-1" : ""}`}>
        <h3 className="display text-[34px] leading-none md:text-[46px]">
          {kicker}
        </h3>
        <p className="mt-7 text-[26px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[34px]">
          {title}
        </p>
        <p className="mt-4 max-w-[601px] text-[16px] leading-[1.55] tracking-[-0.01em] text-white/90 md:text-[23px] md:leading-[1.45]">
          {desc}
        </p>
      </div>

      <div
        className={`relative h-[220px] overflow-hidden bg-gray-soft md:h-[325px] ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <Image src={img} alt="" fill sizes="(max-width: 768px) 100vw, 726px" className="object-cover" />
      </div>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="w-screen bg-black px-6 py-16 text-white md:h-[1324px] md:w-[1440px] md:px-0 md:py-0">
      <div className="mx-auto max-w-[1400px] md:pt-[144px]">
        <div className="flex flex-col gap-14 md:gap-[98px]">
          <Block
            kicker="Mission"
            title="A Collective Built for Endless Expansion"
            desc={missionDesc}
            img={missionImg}
          />

          <div className="h-px w-full bg-white/45" />

          <Block
            kicker="Vision"
            title="Global No.1 Strategic Partner"
            desc={visionDesc}
            img={visionImg}
          />
        </div>
      </div>
    </section>
  );
}
