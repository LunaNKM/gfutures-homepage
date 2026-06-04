import { stats } from "@/lib/site";
import { FadeUp, CountUp } from "./Reveal";

// Figma node 367:585 기준 좌표 (frame 1440x748)
const STAT_X = [262, 504, 742, 971];
const LINE_X = [258, 498, 731, 967];
const DIV_X = [484, 722, 957];

export default function WhoWeAre() {
  return (
    <section className="relative h-[748px] w-[1440px] bg-white text-black">
      <FadeUp className="absolute inset-0">
        {/* About us 알약 */}
        <div className="absolute left-1/2 top-[144px] flex h-[26px] -translate-x-1/2 items-center justify-center rounded-full border border-black px-5">
          <span className="display text-[18px] leading-none">About us</span>
        </div>

        {/* 타이틀 */}
        <h2 className="display absolute left-1/2 top-[197px] -translate-x-1/2 whitespace-nowrap text-[55px] leading-none">
          Who We Are
        </h2>

        {/* 본문 */}
        <p className="absolute left-1/2 top-[280px] w-[360px] -translate-x-1/2 text-center text-[15px] font-medium leading-[23px] tracking-[-0.01em] capitalize">
          GFS는 글로벌 미래를 준비하는 기업으로 지금 이 순간에도 다양하고 창의적인
          시도를 실천하고 있습니다. GFS는 Global No.1 Partner가 되는 것을 위해
          나아갑니다.
        </p>

        {/* 통계 가로선 */}
        {LINE_X.map((x, i) => (
          <span
            key={`l${i}`}
            className="absolute top-[433px] h-px bg-black"
            style={{ left: x, width: 217 }}
          />
        ))}
        {/* 통계 세로 구분선 */}
        {DIV_X.map((x, i) => (
          <span
            key={`d${i}`}
            className="absolute top-[441px] w-px bg-black/60"
            style={{ left: x, height: 136 }}
          />
        ))}

        {/* 통계 값/라벨 — 호버 시 기준선(가로선)에 딱 맞는 검정 박스가 깔리고 텍스트 흰색 반전.
            박스 = 가로선과 동일한 left/width, 위는 가로선(433)·아래는 세로 구분선 끝(577)에 정렬 */}
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="group absolute"
            style={{ left: LINE_X[i], top: 433, width: 217, height: 144 }}
          >
            {/* 호버 검정 박스 (기준선에 스냅) */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* 텍스트: 숫자 위치(STAT_X)에 맞춰 배치, 호버 시 우측 25px 이동 + 흰색 */}
            <div
              className="absolute top-[10px] whitespace-nowrap transition-transform duration-300 group-hover:translate-x-[25px]"
              style={{ left: STAT_X[i] - LINE_X[i] }}
            >
              <p className="display text-[50px] leading-none transition-colors duration-300 group-hover:text-white">
                <CountUp value={s.value} />
              </p>
              <p className="display mt-[10px] text-[18px] leading-none transition-colors duration-300 group-hover:text-white">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}
