import { japanBg } from "@/lib/images";
import { japanStats } from "@/lib/site";
import { CountUp } from "./Reveal";

export default function Japan() {
  return (
    <section className="w-full bg-white">
      {/* Japan Integrated Solutions — 화면 폭에 맞춰 유동적으로 조절 */}
      <div className="relative grid items-stretch md:grid-cols-2">
        <div className="h-[280px] w-full overflow-hidden bg-gray-soft md:h-auto md:min-h-[560px]">
          <img src={japanBg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-5 py-12 text-black sm:px-8 md:px-[80px] md:py-0">
          <h2 className="display text-[clamp(40px,5.5vw,67px)] leading-[1.1]">
            Japan
            <br />
            Integrated
            <br />
            Solutions
          </h2>
          <p className="mt-6 max-w-[394px] text-[clamp(15px,1.4vw,19px)] font-medium leading-[1.5] tracking-[-0.01em] capitalize">
            일본 현지 강력한 네트워킹을 바탕으로 고객의 목표 달성에 필요한 전
            과정을 함께 하겠습니다.
          </p>
          <button className="mt-8 w-fit rounded-full border-2 border-black px-6 py-2 text-[clamp(16px,1.6vw,22px)] font-medium uppercase transition-colors hover:bg-black hover:text-white">
            see more
          </button>
        </div>
      </div>

      {/* Why Japan — 다크 밴드 */}
      <div className="relative w-full overflow-hidden bg-[#111]">
        <img
          src={japanBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/67" />
        <div className="relative grid items-center gap-12 px-5 py-16 text-white sm:px-8 md:grid-cols-2 md:px-[120px] md:py-[120px]">
          <div>
            <h2 className="display text-[clamp(48px,7vw,75px)] leading-none">
              Why Japan
            </h2>
            <p className="mt-8 max-w-[396px] text-[clamp(16px,1.5vw,21px)] font-medium leading-[1.5] tracking-[-0.01em] capitalize">
              일본 시장은 한국 문화에 대한 높은 관심과 충성도 높은 고객 로열티를
              가진 매력적인 시장입니다. 동시에 ‘진정성’과 ‘신뢰도’가 중요한
              시장인 만큼, 전략적인 구조와 현지 네트워킹이 중요합니다.
            </p>
          </div>
          <div className="flex flex-col gap-10 md:gap-12">
            {japanStats.map((s) => (
              <div key={s.label}>
                <p className="display text-[clamp(34px,4vw,48px)] leading-none">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-2 text-[clamp(18px,1.8vw,26px)] font-medium capitalize text-white/85">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
