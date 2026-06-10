import {
  japanAccountCards,
  japanAccountIcons,
  japanInfluencerCards,
} from "@/lib/images";
import ScrollReveal from "./ScrollReveal";

// Figma node 320:669 — 1440px 캔버스 픽셀 좌표 그대로 옮긴 Service(JAPAN) 본문.
// Account → Influencer → Performance → 하단 서비스 메뉴 순서로 세로 스크롤.

type Pos = { src: string; x: number; y: number; w: number; h: number };

function CoverImg({ src, x, y, w, h }: Pos) {
  return (
    <div
      className="absolute overflow-hidden bg-gray-soft"
      style={{ left: x, top: y, width: w, height: h }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

const menuRows = [
  {
    title: "popup",
    sub: "계정 운영 대행",
    href: "#jp-account",
    top: 100,
    height: 136,
    titleTop: 10,
    subTop: 81,
    arrowTop: 51,
  },
  {
    title: "Influencer Marketing",
    sub: "인플루언서 전략 제안",
    href: "#jp-influencer",
    top: 236,
    height: 173,
    titleTop: 46,
    subTop: 112,
    arrowTop: 22,
  },
  {
    title: "Performance Marketing",
    sub: "퍼포먼스 마케팅",
    href: "#jp-performance",
    top: 409,
    height: 168,
    titleTop: 39,
    subTop: 109,
    arrowTop: 74,
  },
  {
    title: "& More",
    sub: "일본 현지 네트워킹 바탕 일본 전략 수립",
    href: "#jp-more",
    top: 577,
    height: 173,
    titleTop: 38,
    subTop: 112,
    arrowTop: 74,
  },
];

export default function JapanService() {
  return (
    <section className="relative w-[1440px] bg-white">
      {/* ── Account Management (white, h=979) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[979px] w-full overflow-hidden bg-white"
      >
        <div id="jp-account" className="absolute top-[-88px]" />
        <p className="absolute left-[118px] top-[194px] text-[23px] font-medium leading-[34px] text-black">
          계정 운영 대행
        </p>
        <h2 className="display absolute left-[118px] top-[234px] text-[49px] leading-[70px] text-black">
          Account
          <br />
          Management
        </h2>
        <span className="absolute left-[1333px] top-[277px] text-[30px] leading-none text-black">
          ↗
        </span>
        <p className="absolute left-[118px] top-[411px] w-[560px] text-[23px] font-medium leading-[34px] text-black">
          공식 계정은 단순히 브랜드의 톤앤매너를 보여주는 공간이 아닌, 현지
          소비자에게 안심과 신뢰를 전달하는 매개체입니다.
        </p>
        {japanAccountIcons.map((ic) => (
          <div
            key={ic.src}
            className="absolute"
            style={{ left: ic.x, top: ic.y, width: ic.w, height: ic.h }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ic.src}
              alt=""
              className="h-full w-full object-contain object-left"
            />
          </div>
        ))}
        {japanAccountCards.map((c) => (
          <CoverImg key={c.src} {...c} />
        ))}
      </ScrollReveal>

      {/* ── Influencer Marketing (black, h=1070) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[1070px] w-full overflow-hidden bg-black"
      >
        <div id="jp-influencer" className="absolute top-[-88px]" />
        {japanInfluencerCards.map((c) => (
          <CoverImg key={c.src} {...c} />
        ))}
        <p className="absolute left-[131px] top-[92px] text-[23px] font-medium leading-[34px] text-white">
          인플루언서 전략 제안
        </p>
        <h2 className="display absolute left-[131px] top-[132px] text-[49px] leading-[70px] text-white">
          Influencer
          <br />
          Marketing
        </h2>
        <p className="absolute left-[131px] top-[304px] w-[440px] text-[23px] font-medium leading-[34px] text-white">
          브랜드 이미지, 프로모션 목적, 활용 계획 등에 따라 매체·티어 구분 없는
          최적화 된 인플루언서 전략을 제안 드립니다. 또한 일본 셀럽 PR, 앰버서더
          계약, 전용 광고 상품까지 지원하고 있습니다.
        </p>
        <p className="absolute left-[131px] top-[547px] text-[23px] font-medium leading-[34px] text-white">
          ❶ 마이크로~메가 인플루언서 PR
        </p>
        <p className="absolute left-[131px] top-[608px] text-[23px] font-medium leading-[34px] text-white">
          ❷ 셀럽 섭외 및 앰버서더 제안
        </p>
        <p className="absolute left-[131px] top-[677px] text-[23px] font-medium leading-[34px] text-white">
          ❸ 세일즈 콜라보
        </p>
        {/* carousel dots */}
        <span className="absolute left-[980px] top-[972px] h-[23px] w-[24px] rounded-full bg-white" />
        <span className="absolute left-[1060px] top-[972px] h-[23px] w-[24px] rounded-full bg-white/40" />
        <span className="absolute left-[1140px] top-[972px] h-[23px] w-[24px] rounded-full bg-white/40" />
      </ScrollReveal>

      {/* ── Performance Marketing (white, h=964) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[964px] w-full overflow-hidden bg-white"
      >
        <div id="jp-performance" className="absolute top-[-88px]" />
        <p className="absolute left-[134px] top-[82px] text-[23px] font-medium leading-[34px] text-black">
          퍼포먼스 마케팅
        </p>
        <h2 className="display absolute left-[133px] top-[149px] text-[49px] leading-none text-black">
          Performance Marketing
        </h2>
        <p className="absolute left-[126px] top-[231px] w-[720px] text-[23px] font-medium leading-[34px] text-black">
          크리에이티브 제작부터 광고 운영, 데이터 분석까지 운영의 전 과정을
          설계하고 메타, X, LINE, Google 등 일본 내 주 사용 채널 중심의 광고
          집행을 도와 드립니다.
        </p>
        <div className="absolute left-[134px] top-[368px] flex h-[481px] w-[1180px] items-center justify-center bg-gray-soft">
          <span className="display text-[49px] leading-none text-black">
            GFU DASH
          </span>
        </div>
      </ScrollReveal>

      {/* ── 하단 서비스 메뉴 (black, h=890) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[890px] w-full overflow-hidden bg-black"
      >
        <div id="jp-more" className="absolute top-[-88px]" />
        {menuRows.map((row) => (
          <a
            key={row.title}
            href={row.href}
            className="group absolute left-0 block w-full transition-colors duration-300 hover:bg-white"
            style={{ top: row.top, height: row.height }}
          >
            <span
              className="absolute left-[111px] text-[23px] font-medium leading-[34px] text-white transition-colors duration-300 group-hover:text-black"
              style={{ top: row.subTop }}
            >
              {row.sub}
            </span>
            <span
              className="display absolute left-[111px] text-[49px] leading-none text-white transition-colors duration-300 group-hover:text-black"
              style={{ top: row.titleTop }}
            >
              {row.title}
            </span>
            <span
              className="absolute left-[1316px] text-[30px] leading-none text-white transition-colors duration-300 group-hover:text-black"
              style={{ top: row.arrowTop }}
            >
              ↗
            </span>
          </a>
        ))}
        {/* 구분선 */}
        {[236, 409, 577, 750].map((t) => (
          <span
            key={t}
            className="absolute left-[78px] h-px w-[1285px] bg-white/30"
            style={{ top: t }}
          />
        ))}
      </ScrollReveal>
    </section>
  );
}
