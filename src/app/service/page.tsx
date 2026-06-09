import Image from "next/image";
import Link from "next/link";
import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/Reveal";
import { influencerCards } from "@/lib/images";

const introCopy =
  "미국 시장은 높은 소비력과 K-콘텐츠에 대한 관심을 바탕으로 한국 브랜드에게 빠른 확장 기회를 주는 시장입니다. 채널별 메시지 최적화와 현지화된 운영 구조를 함께 설계합니다.";

const accountCopy =
  "공식 채널은 단순한 노출 공간이 아니라 현지 소비자에게 브랜드 신뢰를 전달하는 핵심 접점입니다.";

const influencerCopyLeft =
  "브랜드 이미지, 프로모션 목적, 활용 계획 등에 따라 매체와 티어 구분 없는 최적화된 인플루언서 전략을 제안합니다.";
const influencerCopyRight =
  "또한 셀럽 PR, 앰버서더 계약, 전용 광고 상품까지 연계하며 확장형 캠페인을 설계합니다.";

const performanceCopy =
  "크리에이티브 제작부터 광고 운영, 데이터 분석까지 운영의 전 과정을 설계하고 Meta, X, LINE, Google 등 채널 집행을 연결합니다.";

const platformBadges = [
  { label: "Instagram", bg: "#ff2fb3", fg: "#ffffff" },
  { label: "X", bg: "#111111", fg: "#ffffff" },
  { label: "LINE", bg: "#22c55e", fg: "#ffffff" },
  { label: "@cosme", bg: "transparent", fg: "#24b8c7", border: "#24b8c7" },
  { label: "LIPS", bg: "transparent", fg: "#111111", border: "#111111" },
];

const accountVisuals = influencerCards.slice(0, 5);

const influencerGroups = [
  {
    label: "마이크로·메가 인플루언서 PR",
    images: influencerCards.slice(0, 4),
  },
  {
    label: "셀럽 섭외 및 앰버서더 제안",
    images: influencerCards.slice(2, 6),
  },
  {
    label: "세일즈 콜라보",
    images: influencerCards.slice(4, 8),
  },
];

const serviceNav = [
  { title: "POPUP", subtitle: "계정 운영 대행", href: "#account-management" },
  {
    title: "INFLUENCER MARKETING",
    subtitle: "인플루언서 전략 제안",
    href: "#influencer-marketing",
    active: true,
  },
  {
    title: "PERFORMANCE MARKETING",
    subtitle: "퍼포먼스 마케팅",
    href: "#performance-marketing",
  },
  { title: "& MORE", subtitle: "일본 현지 네트워킹 바탕 일본 전략 수립", href: "/japan" },
];

function SectionKicker({
  index,
  label,
  dark,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className={`text-[14px] font-medium tracking-[-0.02em] ${dark ? "text-white/70" : "text-black/65"} md:text-[16px]`}>
      <span>{index}</span>
      <span className="ml-2">{label}</span>
    </div>
  );
}

export default function ServicePage() {
  return (
    <ResponsiveCanvas>
      <SiteHeader />

      <FadeUp>
        <section className="w-screen bg-white px-6 pb-14 pt-16 text-black md:w-[1440px] md:px-[70px] md:pb-[86px] md:pt-[90px]">
          <div className="grid gap-10 md:grid-cols-[420px_1fr] md:gap-[88px]">
            <div>
              <p className="display text-[26px] leading-none text-black/60 md:text-[34px]">
                USA
              </p>
              <h1 className="display mt-3 text-[56px] leading-[0.92] md:text-[100px]">
                Service
              </h1>
            </div>
            <div className="space-y-8">
              <p className="max-w-[760px] text-[18px] font-medium leading-[1.6] tracking-[-0.01em] md:pt-2 md:text-[23px]">
                {introCopy}
              </p>
              <div className="grid gap-4 sm:grid-cols-3 md:gap-5">
                <div className="border border-black/10 bg-black px-5 py-5 text-white">
                  <p className="text-sm uppercase text-white/55">Export</p>
                  <p className="display mt-3 text-[34px] leading-none md:text-[48px]">
                    $143B
                  </p>
                  <p className="mt-2 text-[14px] text-white/72">2025 대미 수출액 규모</p>
                </div>
                <div className="border border-black/10 bg-black px-5 py-5 text-white">
                  <p className="text-sm uppercase text-white/55">Retail</p>
                  <p className="display mt-3 text-[34px] leading-none md:text-[48px]">
                    $5.42T
                  </p>
                  <p className="mt-2 text-[14px] text-white/72">미국 리테일 시장 규모</p>
                </div>
                <div className="border border-black/10 bg-black px-5 py-5 text-white">
                  <p className="text-sm uppercase text-white/55">TikTok Shop</p>
                  <p className="display mt-3 text-[34px] leading-none md:text-[48px]">
                    $15.1B
                  </p>
                  <p className="mt-2 text-[14px] text-white/72">거래액, 전년 대비 +68%</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section
          id="account-management"
          className="w-screen bg-white px-6 py-16 text-black md:w-[1440px] md:px-[70px] md:py-[88px]"
        >
          <div className="grid gap-10 md:grid-cols-[360px_1fr] md:gap-[64px]">
            <div>
              <SectionKicker index="01" label="계정 운영 대행" />
              <h2 className="display mt-4 text-[44px] leading-[0.92] md:text-[62px]">
                Account Management
              </h2>
            </div>
            <div>
              <p className="max-w-[760px] text-[18px] font-medium leading-[1.6] tracking-[-0.01em] md:text-[22px]">
                {accountCopy}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
                {platformBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-[15px] font-semibold tracking-[-0.02em]"
                    style={{
                      backgroundColor: badge.bg,
                      color: badge.fg,
                      borderColor: badge.border ?? badge.bg,
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:mt-[58px] md:grid-cols-5 md:gap-[20px]">
            {accountVisuals.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[0.88] overflow-hidden bg-[#ededed]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section
          id="influencer-marketing"
          className="w-screen bg-black px-6 py-16 text-white md:w-[1440px] md:px-[70px] md:py-[88px]"
        >
          <div className="grid gap-10 md:grid-cols-[360px_1fr] md:gap-[64px]">
            <div>
              <SectionKicker index="02" label="인플루언서 전략 제안" dark />
              <h2 className="display mt-4 text-[44px] leading-[0.92] md:text-[62px]">
                Influencer Marketing
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.01em] text-white/92 md:text-[22px]">
                {influencerCopyLeft}
              </p>
              <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.01em] text-white/92 md:text-[22px]">
                {influencerCopyRight}
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-9 md:mt-[54px] md:space-y-[38px]">
            {influencerGroups.map((group) => (
              <div key={group.label}>
                <span className="inline-flex rounded-full border border-white/35 px-4 py-2 text-[14px] font-semibold tracking-[-0.02em] text-white md:text-[16px]">
                  {group.label}
                </span>
                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-[18px]">
                  {group.images.map((src, index) => (
                    <div
                      key={`${group.label}-${index}`}
                      className="relative aspect-[0.72] overflow-hidden bg-white/10"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 50vw, 300px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section
          id="performance-marketing"
          className="w-screen bg-white px-6 py-16 text-black md:w-[1440px] md:px-[70px] md:py-[88px]"
        >
          <SectionKicker index="03" label="퍼포먼스 마케팅" />
          <h2 className="display mt-4 text-[44px] leading-[0.92] md:text-[62px]">
            Performance Marketing
          </h2>
          <p className="mt-7 max-w-[930px] text-[18px] font-medium leading-[1.6] tracking-[-0.01em] md:text-[22px]">
            {performanceCopy}
          </p>

          <div className="mt-12 flex h-[260px] items-center justify-center bg-[#dedede] md:mt-[54px] md:h-[380px]">
            <span className="display text-[42px] leading-none text-black md:text-[58px]">
              GFU DASH
            </span>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section className="w-screen bg-black px-6 pb-16 pt-6 text-white md:w-[1440px] md:px-[78px] md:pb-[100px]">
          <div className="border-t border-white/85">
            {serviceNav.map((item) => {
              const content = (
                <div
                  className={`flex items-center justify-between px-0 py-8 transition-colors md:px-[34px] md:py-[34px] ${
                    item.active ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-[15px] font-medium tracking-[-0.02em] ${
                        item.active ? "text-black/72" : "text-white/82"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                    <p className="display mt-3 text-[34px] leading-none md:text-[56px]">
                      {item.title}
                    </p>
                  </div>
                  <span className="text-[46px] font-semibold leading-none md:text-[58px]">
                    {"\u2197"}
                  </span>
                </div>
              );

              return item.href.startsWith("/") ? (
                <Link key={item.title} href={item.href} className="block border-b border-white/85">
                  {content}
                </Link>
              ) : (
                <a key={item.title} href={item.href} className="block border-b border-white/85">
                  {content}
                </a>
              );
            })}
          </div>
        </section>
      </FadeUp>

      <Footer />
    </ResponsiveCanvas>
  );
}
