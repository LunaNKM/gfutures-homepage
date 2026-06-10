"use client";

import { useEffect, useRef, useState } from "react";

// CSS zoom 환경에서는 IntersectionObserver가 동작하지 않으므로
// getBoundingClientRect(시각 좌표는 정상) 기반 스크롤 감지로 페이드업/다운을 구현한다.
// 진입 방향(아래→위 / 위→아래)에 따라 슬라이드 방향이 반대가 된다.
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [from, setFrom] = useState<"below" | "above">("below");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const next = r.top < vh * 0.85 && r.bottom > vh * 0.1;
      setInView((prev) => (prev === next ? prev : next));
      if (!next) setFrom(r.top >= 0 ? "below" : "above");
    };

    check();
    // capture:true 로 어떤 스크롤 컨테이너에서 발생한 scroll 이든 감지한다.
    window.addEventListener("scroll", check, { passive: true, capture: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check, { capture: true });
      window.removeEventListener("resize", check);
    };
  }, []);

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
