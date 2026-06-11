import { japanAccountCards, japanAccountIcons } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";
import InfluencerCarousel from "./InfluencerCarousel";
import JapanServiceMenu from "./JapanServiceMenu";

// Figma node 320:669 — Service(JAPAN) 본문. 1440px 캔버스 기준이며
// FitWidth(zoom)로 화면 폭에 맞춰 유동적으로 축소된다.
// Account → Influencer → Performance → 하단 서비스 메뉴 순서.

const CARD_SHADOW = "0 14px 30px rgba(0,0,0,0.18)";

// 각 섹션 전경 콘텐츠를 중심 기준 scale(0.8)로 축소해 사방 여백을 늘린다.
// (요소·글자 -20%, 여백 +20%)
const CONTENT: React.CSSProperties = {
  transform: "scale(0.8)",
  transformOrigin: "center",
};

// 카드를 평행사변형으로 만든다. 윗변·밑변은 수평을 유지하고 좌/우 세로변만
// 비스듬해진다. 부모를 skewX로 기울이고 내부 이미지를 반대로 skewX 상쇄해서
// 사진(내용물)은 똑바로 서고, 둥근 모서리·그림자도 그대로 살린다.
// slant(px): 윗변이 밑변 대비 가로로 이동하는 양. 양수 = 오른쪽, 음수 = 왼쪽.
function AccordionRow({
  cards,
  height,
  defaultIndex = -1,
  slants = [],
}: {
  cards: { src: string }[];
  height: number;
  defaultIndex?: number;
  slants?: number[];
}) {
  return (
    <div className="group/row flex gap-[14px]" style={{ height }}>
      {cards.map((c, i) => {
        const s = slants[i] ?? 0;
        // 윗변을 오른쪽으로 옮기려면 skewX 음수각. 각도는 높이에만 의존하므로
        // hover로 폭이 변해도 기울기는 일정하게 유지된다.
        const theta = (Math.atan2(-s, height) * 180) / Math.PI;
        const over = Math.abs(s); // 기운 모서리까지 이미지로 덮기 위한 여유 폭
        return (
          <div
            key={c.src}
            className={`relative basis-0 grow overflow-hidden rounded-[18px] bg-gray-soft transition-[flex-grow] duration-500 ease-out hover:!grow-[2.6] ${
              i === defaultIndex ? "grow-[2.4] group-hover/row:grow-[1]" : ""
            }`}
            style={{ boxShadow: CARD_SHADOW, transform: `skewX(${theta}deg)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.src}
              alt=""
              className="h-full max-w-none object-cover"
              style={{
                transform: `skewX(${-theta}deg)`,
                width: `calc(100% + ${2 * over}px)`,
                marginLeft: `-${over}px`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function JapanService() {
  return (
    <section className="relative w-[1440px] bg-white">
      {/* ── Account Management (white, h=979→744) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[744px] w-full overflow-hidden bg-white"
      >
        <div id="jp-account" className="absolute top-[-88px]" />
        <div className="absolute inset-0" style={CONTENT}>
          <p className="absolute left-[118px] top-[147px] text-[18px] font-medium leading-[26px] text-black">
            계정 운영 대행
          </p>
          <h2 className="display absolute left-[118px] top-[178px] text-[37px] leading-[53px] text-black">
            Account
            <br />
            Management
          </h2>
          <p className="absolute left-[118px] top-[312px] w-[357px] text-[18px] font-medium leading-[26px] text-black">
            공식 계정은 단순히 브랜드의 톤앤매너를 보여주는 공간이 아닌, 현지
            소비자에게 안심과 신뢰를 전달하는 매개체입니다.
          </p>
          {/* 운영 가능한 매체 아이콘 */}
          <div className="absolute left-[118px] top-[389px] flex h-[30px] items-center gap-[15px]">
            {japanAccountIcons.map((ic) => (
              <div
                key={ic.src}
                className="flex h-full items-center"
                style={{ width: (ic.w / ic.h) * 27 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ic.src}
                  alt=""
                  className="max-h-[27px] w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* 우측 리뷰 콜라주 — 2행 아코디언 (hover 시 확대 + 밀어내기) */}
          <div className="absolute left-[636px] top-[97px] flex w-[661px] flex-col gap-[11px]">
            <AccordionRow
              cards={japanAccountCards.slice(0, 3)}
              height={292}
              slants={[18, 8, 18]}
            />
            <AccordionRow
              cards={japanAccountCards.slice(3, 5)}
              height={283}
              defaultIndex={0}
              slants={[16, 18]}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* ── Influencer Marketing (black, h=1070→813) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[813px] w-full overflow-hidden bg-black"
      >
        <div id="jp-influencer" className="absolute top-[-88px]" />
        <div className="absolute inset-0" style={CONTENT}>
          <p className="absolute left-[131px] top-[70px] text-[18px] font-medium leading-[26px] text-white">
            인플루언서 전략 제안
          </p>
          <h2 className="display absolute left-[131px] top-[100px] text-[37px] leading-[53px] text-white">
            Influencer
            <br />
            Marketing
          </h2>
          <p className="absolute left-[131px] top-[231px] w-[334px] text-[18px] font-medium leading-[26px] text-white">
            브랜드 이미지, 프로모션 목적, 활용 계획 등에 따라 매체·티어 구분 없는
            최적화 된 인플루언서 전략을 제안 드립니다. 또한 일본 셀럽 PR, 앰버서더
            계약, 전용 광고 상품까지 지원하고 있습니다.
          </p>
          <p className="absolute left-[131px] top-[416px] text-[18px] font-medium leading-[26px] text-white">
            ❶ 마이크로~메가 인플루언서 PR
          </p>
          <p className="absolute left-[131px] top-[462px] text-[18px] font-medium leading-[26px] text-white">
            ❷ 셀럽 섭외 및 앰버서더 제안
          </p>
          <p className="absolute left-[131px] top-[514px] text-[18px] font-medium leading-[26px] text-white">
            ❸ 세일즈 콜라보
          </p>

          {/* 우측 인터랙티브 캐러셀 (클릭 시 회전) */}
          <InfluencerCarousel />
        </div>
      </ScrollReveal>

      {/* ── Performance Marketing (white, h=964→733) ── */}
      <ScrollReveal
        as="div"
        className="relative h-[733px] w-full overflow-hidden bg-white"
      >
        <div id="jp-performance" className="absolute top-[-88px]" />
        <div className="absolute inset-0" style={CONTENT}>
          <p className="absolute left-[134px] top-[62px] text-[18px] font-medium leading-[26px] text-black">
            퍼포먼스 마케팅
          </p>
          <h2 className="display absolute left-[133px] top-[113px] text-[37px] leading-none text-black">
            Performance Marketing
          </h2>
          <p className="absolute left-[126px] top-[176px] w-[547px] text-[18px] font-medium leading-[26px] text-black">
            크리에이티브 제작부터 광고 운영, 데이터 분석까지 운영의 전 과정을
            설계하고 메타, X, LINE, Google 등 일본 내 주 사용 채널 중심의 광고
            집행을 도와 드립니다.
          </p>
          <div className="absolute left-[134px] top-[280px] flex h-[366px] w-[1180px] items-center justify-center rounded-[12px] bg-gray-soft">
            <span className="display text-[37px] leading-none text-black">
              GFU DASH
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* ── 하단 서비스 메뉴 + & More 펼침 ── */}
      <JapanServiceMenu />
    </section>
  );
}
