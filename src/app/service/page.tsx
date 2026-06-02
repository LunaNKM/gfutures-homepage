import Link from "next/link";
import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import InfluencerCarousel from "@/components/InfluencerCarousel";
import { FadeUp } from "@/components/Reveal";
import { services } from "@/lib/site";
import { influencerCards } from "@/lib/images";

const svc = Object.fromEntries(services.map((s) => [s.slug, s]));

export default function ServicePage() {
  return (
    <ResponsiveCanvas>
      <SiteHeader />

      {/* 헤더 */}
      <FadeUp>
        <section className="w-[1440px] bg-black px-[78px] pb-[80px] pt-[90px] text-white">
          <h1 className="display text-[100px] leading-none">Service</h1>
          <p className="display mt-4 text-[40px] leading-none normal-case text-white/80">
            Tailored Solutions Built on Your Voice
          </p>
        </section>
      </FadeUp>

      {/* 01 — Account Management */}
      <FadeUp>
        <section
          id="account-management"
          className="w-[1440px] scroll-mt-[64px] bg-black px-[78px] pb-[120px] text-white"
        >
          <p className="mb-2 text-[22px] font-medium opacity-70">01 / 계정 운영 대행</p>
          <h2 className="display text-[60px] leading-none">Account Management</h2>
          <p className="mt-6 max-w-[760px] text-[22px] font-medium leading-[1.5] tracking-[-0.01em]">
            {svc["account-management"].desc}
          </p>
          <div className="mt-12 grid grid-cols-4 gap-[14px]">
            {influencerCards.slice(0, 4).map((src) => (
              <div
                key={src}
                className="h-[300px] w-full overflow-hidden rounded-[4px] bg-gray-soft"
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* 02 — Influencer Marketing (회전문 카드) */}
      <FadeUp>
        <section
          id="influencer-marketing"
          className="w-[1440px] scroll-mt-[64px] overflow-hidden bg-black px-[78px] pb-[140px] pt-[40px] text-white"
        >
          <p className="mb-2 text-[22px] font-medium opacity-70">02 / 인플루언서 전략 제안</p>
          <h2 className="display text-[60px] leading-none">Influencer Marketing</h2>
          <p className="mt-6 max-w-[760px] text-[22px] font-medium leading-[1.5] tracking-[-0.01em]">
            {svc["influencer-marketing"].desc}
          </p>
          <div className="mt-10">
            <InfluencerCarousel />
          </div>
        </section>
      </FadeUp>

      {/* 03 — Performance Marketing */}
      <FadeUp>
        <section
          id="performance-marketing"
          className="w-[1440px] scroll-mt-[64px] bg-white px-[78px] py-[120px] text-black"
        >
          <p className="mb-2 text-[22px] font-medium opacity-60">03 / 퍼포먼스 마케팅</p>
          <h2 className="display text-[60px] leading-none">Performance Marketing</h2>
          <p className="mt-6 max-w-[760px] text-[22px] font-medium leading-[1.5] tracking-[-0.01em]">
            {svc["performance-marketing"].desc}
          </p>
          <div className="mt-12 flex h-[420px] w-full items-center justify-center rounded-[6px] bg-gray-soft">
            <span className="display text-[64px] leading-none text-black/70">
              GFU DASH
            </span>
          </div>
        </section>
      </FadeUp>

      {/* 04 — & More (Japan) */}
      <FadeUp>
        <section
          id="more"
          className="w-[1440px] scroll-mt-[64px] bg-black px-[78px] py-[140px] text-white"
        >
          <p className="mb-2 text-[22px] font-medium opacity-70">04 / 일본 현지 네트워킹 기반 전략 수립</p>
          <h2 className="display text-[60px] leading-none">&amp; More</h2>
          <p className="mt-6 max-w-[760px] text-[22px] font-medium leading-[1.5] tracking-[-0.01em]">
            {svc["more"].desc}
          </p>
          <Link
            href="/japan"
            className="mt-10 inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-3 text-[26px] font-medium uppercase transition-colors hover:bg-white hover:text-black"
          >
            Japan ↗
          </Link>
        </section>
      </FadeUp>

      <Footer />
    </ResponsiveCanvas>
  );
}
