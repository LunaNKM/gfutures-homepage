import { missionImg, visionImg } from "@/lib/images";

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
    <div className="grid grid-cols-[786px_726px] gap-[26px]">
      <div>
        <h3 className="display text-[60px] leading-none">{kicker}</h3>
        <p className="mt-8 text-[32px] font-semibold leading-[1.4] tracking-[-0.01em] capitalize">
          {title}
        </p>
        <p className="mt-4 text-[20px] leading-[1.5] tracking-[-0.01em]">
          {desc}
        </p>
      </div>
      <div className="h-[325px] w-[726px] overflow-hidden bg-gray-soft">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="w-[1440px] bg-black px-[108px] py-[100px] text-white">
      <div className="flex flex-col gap-[120px]">
        <Block
          kicker="Mission"
          title="A Collective Built for Endless Expansion"
          desc="세상에 혼자 할 수 있는 일은 없습니다. SCRUM으로 함께 모여 조직, 산업, 구조를 뒤흔드는 Multi Wave Team이 되겠습니다."
          img={missionImg}
        />
        <div className="h-px w-full bg-white/40" />
        <Block
          kicker="Vision"
          title="Global No.1 Strategic Partner"
          desc="글로벌 무대에서도 함께 당당히 선도하는 최고 전략 파트너가 되겠습니다."
          img={visionImg}
        />
      </div>
    </section>
  );
}
