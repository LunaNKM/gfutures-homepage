import { japanBg } from "@/lib/images";
import { japanStats } from "@/lib/site";
import { CountUp } from "./Reveal";
import ScrollReveal from "./ScrollReveal";

// Figma node 304:949 — 1440px 캔버스 픽셀 좌표 그대로.
export default function Japan() {
  return (
    <section className="relative w-[1440px] bg-white">
      {/* Hero — Japan Integrated Solutions (h=808→614) */}
      <ScrollReveal className="relative h-[614px] w-full overflow-hidden">
        <div className="absolute left-[-107px] top-[78px] h-[551px] w-[820px] overflow-hidden bg-gray-soft">
          <img src={japanBg} alt="" className="h-full w-full object-cover" />
        </div>
        <h1 className="display absolute left-[714px] top-[242px] text-[51px] leading-[56px] text-black">
          Japan
          <br />
          Integrated
          <br />
          Solutions
        </h1>
        <p className="absolute left-[729px] top-[429px] w-[299px] text-[15px] font-medium leading-[21px] tracking-[-0.01em] text-black">
          일본 현지 강력한 네트워킹을 바탕으로 고객의 목표 달성에 필요한 전
          과정을 함께 하겠습니다.
        </p>
        <button className="absolute left-[725px] top-[490px] flex h-[30px] items-center rounded-full border-2 border-black px-5 text-[15px] font-medium uppercase text-black transition-colors hover:bg-black hover:text-white">
          see more
        </button>
      </ScrollReveal>

      {/* Why Japan — 다크 밴드 (h=696→529) */}
      <ScrollReveal className="relative h-[529px] w-full overflow-hidden bg-[#111]">
        <img
          src={japanBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/[0.67]" />
        <h2 className="display absolute left-[144px] top-[139px] text-[57px] leading-none text-white">
          Why Japan
        </h2>
        <p className="absolute left-[153px] top-[234px] w-[301px] text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-white">
          일본 시장은 한국 문화에 대한 높은 관심과 충성된 고객 로열티를 가진
          매력적인 시장입니다. 동시에 ‘진정성’과 ‘신뢰도’가 중요한 시장인 만큼,
          전략적인 구조와 현지 네트워킹이 중요합니다.
        </p>

        {/* 우측 주요 수치 — value 위, label 아래 */}
        {japanStats.map((s, i) => {
          const valTop = [106, 228, 344][i];
          const labelTop = [160, 283, 398][i];
          const valLeft = [1049, 1017, 1072][i];
          const labelLeft = [1043, 1035, 1012][i];
          return (
            <div key={s.label} className="text-white">
              <p
                className="display absolute text-[36px] leading-none"
                style={{ left: valLeft, top: valTop }}
              >
                <CountUp value={s.value} />
              </p>
              <p
                className="absolute text-[20px] font-medium"
                style={{ left: labelLeft, top: labelTop }}
              >
                {s.label}
              </p>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
