import { japanAccountCards, japanAccountIcons } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";
import InfluencerCarousel from "./InfluencerCarousel";
import JapanServiceMenu from "./JapanServiceMenu";

// Figma node 320:669 — Service(JAPAN) 본문. 1440px 캔버스 기준이며
// FitWidth(zoom)로 화면 폭에 맞춰 유동적으로 축소된다.
// Account → Influencer → Performance → 하단 서비스 메뉴 순서.

const CARD_SHADOW = "0 14px 36px rgba(0,0,0,0.18)";

// 한 행 안에서 hover 시 해당 카드가 커지고 나머지를 밀어내는 아코디언.
function AccordionRow({
  cards,
  height,
  defaultIndex = -1,
}: {
  cards: { src: string }[];
  height: number;
  defaultIndex?: number;
}) {
  return (
    <div className="group/row flex gap-[14px]" style={{ height }}>
      {cards.map((c, i) => (
        <div
          key={c.src}
          className={`relative basis-0 grow overflow-hidden rounded-[18px] bg-gray-soft transition-[flex-grow] duration-500 ease-out hover:!grow-[2.6] ${
            i === defaultIndex ? "grow-[2.4] group-hover/row:grow-[1]" : ""
          }`}
          style={{ boxShadow: CARD_SHADOW }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.src} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}

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
        <p className="absolute left-[118px] top-[411px] w-[470px] text-[23px] font-medium leading-[34px] text-black">
          공식 계정은 단순히 브랜드의 톤앤매너를 보여주는 공간이 아닌, 현지
          소비자에게 안심과 신뢰를 전달하는 매개체입니다.
        </p>
        {/* 운영 가능한 매체 아이콘 */}
        <div className="absolute left-[118px] top-[512px] flex h-[40px] items-center gap-[20px]">
          {japanAccountIcons.map((ic) => (
            <div
              key={ic.src}
              className="flex h-full items-center"
              style={{ width: (ic.w / ic.h) * 36 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ic.src}
                alt=""
                className="max-h-[36px] w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* 우측 리뷰 콜라주 — 2행 아코디언 (hover 시 확대 + 밀어내기) */}
        <div className="absolute left-[636px] top-[128px] flex w-[772px] flex-col gap-[14px]">
          <AccordionRow cards={japanAccountCards.slice(0, 3)} height={384} />
          <AccordionRow
            cards={japanAccountCards.slice(3, 5)}
            height={372}
            defaultIndex={0}
          />
        </div>
      </ScrollReveal>

      {/* ── Influencer Marketing (black, h=1070) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[1070px] w-full overflow-hidden bg-black"
      >
        <div id="jp-influencer" className="absolute top-[-88px]" />
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

        {/* 우측 인터랙티브 캐러셀 (클릭 시 회전) */}
        <InfluencerCarousel />
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
        <div className="absolute left-[134px] top-[368px] flex h-[481px] w-[1172px] items-center justify-center rounded-[12px] bg-gray-soft">
          <span className="display text-[49px] leading-none text-black">
            GFU DASH
          </span>
        </div>
      </ScrollReveal>

      {/* ── 하단 서비스 메뉴 + & More 펼침 ── */}
      <JapanServiceMenu />
    </section>
  );
}
