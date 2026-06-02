import { japanBg } from "@/lib/images";
import { japanStats } from "@/lib/site";
import { CountUp } from "./Reveal";

export default function Japan() {
  return (
    <section className="w-[1440px] bg-white">
      {/* Japan Integrated Solutions */}
      <div className="relative grid h-[700px] grid-cols-2 items-center">
        <div className="h-full w-full overflow-hidden bg-gray-soft">
          <img src={japanBg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="px-[80px] text-black">
          <h2 className="display text-[67px] leading-[1.1]">
            Japan
            <br />
            Integrated
            <br />
            Solutions
          </h2>
          <p className="mt-6 max-w-[394px] text-[19px] font-medium leading-[1.5] tracking-[-0.01em] capitalize">
            일본 현지 강력한 네트워킹을 바탕으로 고객의 목표 달성에 필요한 전
            과정을 함께 하겠습니다.
          </p>
          <button className="mt-8 rounded-full border-2 border-black px-6 py-2 text-[22px] font-medium uppercase">
            see more
          </button>
        </div>
      </div>

      {/* Why Japan — 다크 밴드 */}
      <div className="relative h-[703px] w-full overflow-hidden bg-[#111]">
        <img
          src={japanBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/67" />
        <div className="relative grid h-full grid-cols-2 items-center px-[120px] text-white">
          <div>
            <h2 className="display text-[75px] leading-none">Why Japan</h2>
            <p className="mt-8 max-w-[396px] text-[21px] font-medium leading-[1.5] tracking-[-0.01em] capitalize">
              일본 시장은 한국 문화에 대한 높은 관심과 충성도 높은 고객 로열티를
              가진 매력적인 시장입니다. 동시에 ‘진정성’과 ‘신뢰도’가 중요한
              시장인 만큼, 전략적인 구조와 현지 네트워킹이 중요합니다.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {japanStats.map((s) => (
              <div key={s.label}>
                <p className="text-[26px] font-medium capitalize">{s.label}</p>
                <p className="display mt-1 text-[48px] leading-none">
                  <CountUp value={s.value} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
