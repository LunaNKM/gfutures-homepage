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
}: {
  kicker: string;
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[600px_553px] md:gap-[112px]">
      <div>
        <h3 className="display text-[34px] leading-none md:text-[46px]">
          {kicker}
        </h3>
        <p className="mt-7 text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] md:mt-[27px] md:text-[24px]">
          {title}
        </p>
        <p className="mt-4 max-w-[601px] text-[14px] leading-[1.5] tracking-[-0.01em] text-white/90 md:mt-[18px] md:text-[15px] md:leading-[23px]">
          {desc}
        </p>
      </div>

      <div className="relative h-[220px] overflow-hidden bg-gray-soft md:h-[325px]">
        <Image
          src={img}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 553px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="w-full bg-black px-6 py-16 text-white md:h-[1324px] md:px-0 md:py-0">
      <div className="mx-auto max-w-[1400px] md:pt-[296px]">
        <div className="md:pl-[88px] md:pr-[44px]">
          <Block
            kicker="Mission"
            title="A Collective Built for Endless Expansion"
            desc={missionDesc}
            img={missionImg}
          />
        </div>

        <div className="mt-14 h-px w-full bg-white/45 md:mt-[37px]" />

        <div className="mt-14 md:mt-[157px] md:pl-[99px] md:pr-[44px]">
          <Block
            kicker="Vision"
            title="Global No.1 Strategic Partner"
            desc={visionDesc}
            img={visionImg}
          />
        </div>

        <div className="mt-14 h-px w-full bg-white/45 md:mt-[40px]" />
      </div>
    </section>
  );
}
