import { stats } from "@/lib/site";
import { FadeUp, CountUp } from "./Reveal";

export default function WhoWeAre() {
  return (
    <section className="relative w-full bg-white px-6 py-20 text-black md:h-[748px] md:px-[44px] md:py-0">
      <FadeUp className="mx-auto flex max-w-[1352px] flex-col items-center md:h-full md:justify-center">
        <div className="flex h-[26px] items-center justify-center rounded-full border border-black px-5">
          <span className="display text-[18px] leading-none md:text-[15px]">About us</span>
        </div>

        <h2 className="display mt-11 text-center text-[48px] leading-none md:mt-[44px] md:text-[56px]">
          Who We Are
        </h2>

        <p className="mt-8 max-w-[620px] text-center text-[18px] font-medium leading-[1.55] tracking-[-0.01em] md:mt-[38px] md:text-[18px] md:leading-[27px]">
          GFS는 Global No.1 Partner가 되는 것을 위해 나아갑니다.
          <br />
          성공적인 글로벌 진출의 시작, 지퓨처스와 함께 하세요.
        </p>

        <div className="mt-16 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:mt-[60px] md:max-w-[720px] md:grid-cols-4 md:gap-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative h-[178px] border-t border-black/80 md:h-[164px] md:border-r md:last:border-r-0"
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative px-4 pt-8 transition-transform duration-300 group-hover:translate-x-[25px] md:px-[10px] md:pt-[20px]">
                <p className="display text-[39px] leading-none transition-colors duration-300 group-hover:text-white md:text-[39px]">
                  <CountUp value={s.value} />
                </p>
                <p className="display mt-3 text-[23px] leading-none transition-colors duration-300 group-hover:text-white md:text-[21px]">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
