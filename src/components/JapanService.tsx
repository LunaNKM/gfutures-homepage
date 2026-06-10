"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { japanServices } from "@/lib/site";
import { influencerCards } from "@/lib/images";

type ServiceKey = (typeof japanServices)[number]["key"];

const FADE_MS = 300;

// 탭별 본문. active가 바뀌면 먼저 페이드아웃 → 콘텐츠 교체 → 페이드인 (크로스 디졸브).
export default function JapanService() {
  const [active, setActive] = useState<ServiceKey>("account");
  // 화면에 실제로 그려지는 탭. 페이드아웃이 끝난 뒤 active 값으로 갱신된다.
  const [shown, setShown] = useState<ServiceKey>("account");
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function select(key: ServiceKey) {
    if (key === active) return;
    setActive(key);
    setVisible(false); // 페이드아웃 시작
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setShown(key); // 콘텐츠 교체 후 페이드인
      setVisible(true);
    }, FADE_MS);
  }

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const current = japanServices.find((s) => s.key === shown)!;
  const activeIndex = japanServices.findIndex((s) => s.key === active);

  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[clamp(48px,7vw,96px)] sm:px-8 lg:px-[80px]">
        <header className="mb-[clamp(28px,4vw,56px)]">
          <p className="text-[clamp(15px,1.4vw,20px)] font-medium tracking-[-0.02em] text-black/55">
            Service
          </p>
          <h2 className="display mt-2 text-[clamp(40px,6vw,86px)] leading-[0.95]">
            Japan
          </h2>
        </header>

        <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[minmax(280px,360px)_1fr]">
          {/* 좌측 메뉴 — PC에서는 스크롤을 따라오도록 sticky */}
          <nav className="lg:sticky lg:top-[88px] lg:self-start">
            <ul className="flex flex-col border-t border-black/15">
              {japanServices.map((s, i) => {
                const isActive = s.key === active;
                return (
                  <li key={s.key} className="border-b border-black/15">
                    <button
                      type="button"
                      onClick={() => select(s.key)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex w-full items-center justify-between gap-4 px-3 py-[clamp(16px,1.6vw,22px)] text-left transition-colors duration-300 ${
                        isActive
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-black/5"
                      }`}
                    >
                      <span className="min-w-0">
                        <span
                          className={`block text-[clamp(12px,1vw,15px)] font-medium tracking-[-0.02em] ${
                            isActive ? "text-white/70" : "text-black/55"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")} · {s.ko}
                        </span>
                        <span className="display mt-1 block truncate text-[clamp(20px,2.2vw,32px)] leading-tight">
                          {s.en}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 text-[clamp(22px,2vw,30px)] leading-none transition-transform duration-300 ${
                          isActive ? "translate-x-0" : "-translate-x-1 opacity-40"
                        }`}
                      >
                        {"↗"}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 우측 콘텐츠 — active 변경 시 크로스 페이드 */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
            }}
            className="min-h-[420px]"
          >
            <p className="text-[clamp(13px,1.1vw,16px)] font-medium tracking-[-0.02em] text-black/45">
              {String(activeIndex + 1).padStart(2, "0")} / 04
            </p>
            <h3 className="display mt-2 text-[clamp(30px,4.2vw,58px)] leading-[0.98]">
              {current.en}
            </h3>
            <p className="mt-5 max-w-[680px] text-[clamp(15px,1.4vw,21px)] font-medium leading-[1.6] tracking-[-0.01em] text-black/80">
              {current.desc}
            </p>

            <div className="mt-[clamp(28px,3vw,48px)]">
              <ServiceBody serviceKey={current.key} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBody({ serviceKey }: { serviceKey: ServiceKey }) {
  const data = japanServices.find((s) => s.key === serviceKey)!;

  if (data.key === "account") {
    return (
      <>
        <div className="flex flex-wrap gap-2.5">
          {data.badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-[clamp(13px,1.1vw,16px)] font-semibold tracking-[-0.02em]"
            >
              {b}
            </span>
          ))}
        </div>
        <CardGrid images={influencerCards.slice(0, 5)} cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" ratio="aspect-[0.86]" />
      </>
    );
  }

  if (data.key === "influencer") {
    return (
      <div className="space-y-[clamp(24px,3vw,40px)]">
        {data.groups.map((label, gi) => (
          <div key={label}>
            <span className="inline-flex rounded-full bg-black px-4 py-2 text-[clamp(13px,1.1vw,16px)] font-semibold tracking-[-0.02em] text-white">
              {label}
            </span>
            <CardGrid
              images={influencerCards.slice(gi * 2, gi * 2 + 4)}
              cols="grid-cols-2 sm:grid-cols-4"
              ratio="aspect-[0.72]"
            />
          </div>
        ))}
      </div>
    );
  }

  if (data.key === "performance") {
    return (
      <div className="flex aspect-[1180/481] w-full items-center justify-center bg-gray-soft">
        <span className="display text-[clamp(32px,4vw,58px)] leading-none text-black/80">
          {data.dash}
        </span>
      </div>
    );
  }

  // & More
  return (
    <div className="space-y-[clamp(24px,3vw,44px)]">
      {data.categories.map((c, ci) => (
        <div key={c.label}>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="inline-flex rounded-full bg-black px-4 py-1.5 text-[clamp(14px,1.2vw,18px)] font-semibold text-white">
              {c.label}
            </span>
            <span className="text-[clamp(13px,1.1vw,16px)] font-medium text-black/55">
              {c.items}
            </span>
          </div>
          <CardGrid
            images={influencerCards.slice(ci * 2, ci * 2 + 3)}
            cols="grid-cols-3"
            ratio="aspect-[452/431]"
          />
        </div>
      ))}
    </div>
  );
}

function CardGrid({
  images,
  cols,
  ratio,
}: {
  images: string[];
  cols: string;
  ratio: string;
}) {
  return (
    <div className={`mt-5 grid gap-[clamp(8px,1vw,18px)] ${cols}`}>
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`relative ${ratio} overflow-hidden bg-gray-soft`}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
