import { stats } from "@/lib/site";
import { FadeUp, CountUp } from "./Reveal";

export default function WhoWeAre() {
  return (
    <section className="w-[1440px] bg-white px-[44px] py-[110px] text-black">
      <FadeUp className="text-center">
        <span className="inline-block rounded-full border border-black px-7 py-1.5 text-[28px] font-medium uppercase">
          About Us
        </span>
        <h2 className="display mt-8 text-[85px] leading-none">Who We Are</h2>
        <p className="mt-8 text-2xl font-medium leading-[1.5] tracking-[-0.01em] capitalize">
          GFS는 글로벌 미래를 준비하는 기업으로 지금 이 순간에도 다양하고
          창의적인 시도를 실천하고 있습니다.
          <br />
          GFS는 Global No.1 Partner가 되는 것을 위해 나아갑니다.
        </p>
      </FadeUp>

      <div className="mt-16 grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.12}>
            <div className="group cursor-default rounded-[12px] border-l border-black/30 px-6 py-6 transition-colors duration-300 hover:border-transparent hover:bg-black">
              <p className="display text-[72px] leading-none transition-colors duration-300 group-hover:text-white">
                <CountUp value={s.value} />
              </p>
              <p className="display mt-2 text-[26px] leading-none transition-colors duration-300 group-hover:text-white">
                {s.label}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
