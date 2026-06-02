"use client";

import { useEffect, useRef, useState } from "react";

// 뷰포트 진입을 매번 감지한다(스크롤을 내릴 때/다시 올릴 때 모두 재생).
// from: 요소가 화면 아래쪽에서 들어오면 "below", 위쪽에서 들어오면 "above".
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [from, setFrom] = useState<"below" | "above">("below");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setFrom(e.boundingClientRect.top >= 0 ? "below" : "above");
        setInView(e.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView, from };
}

// 스크롤 진입 시 페이드 + 위로 올라오는 효과
export function FadeUp({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const { ref, inView, from } = useInView<HTMLDivElement>();
  // 아래에서 올라올 땐 +40 → 페이드업, 위에서 내려올 땐 -40 → 페이드다운
  const hidden = from === "above" ? "translateY(-40px)" : "translateY(40px)";
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : hidden,
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

// 0에서 목표 숫자로 빠르게 카운트업 (문자열의 마지막 숫자를 애니메이션)
export function CountUp({
  value,
  duration = 1200,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const m = value.match(/(\d+(?:\.\d+)?)(?!.*\d)/); // 마지막 숫자
    if (!m) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(m[1]);
    const decimals = (m[1].split(".")[1] || "").length;
    const start = m.index ?? 0;
    const before = value.slice(0, start);
    const after = value.slice(start + m[1].length);
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const cur = (target * eased).toFixed(decimals);
      setDisplay(`${before}${cur}${after}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
