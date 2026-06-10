"use client";

import { useEffect, useLayoutEffect, useState } from "react";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// 1440px 고정 디자인을 화면 폭에 맞춰 비율 그대로 스케일(유동 리사이즈).
// 창이 작아지면 축소, 커지면 확대되어 항상 화면 폭을 가득 채운다.
// CSS `zoom`은 transform과 달리 레이아웃 자체를 스케일하므로 스크롤 높이·앵커·
// IntersectionObserver(FadeUp)가 모두 정상 동작한다.
export default function FitWidth({
  children,
  design = 1440,
}: {
  children: React.ReactNode;
  design?: number;
}) {
  const [zoom, setZoom] = useState(1);

  useIso(() => {
    const update = () =>
      setZoom(document.documentElement.clientWidth / design);
    update();
    window.addEventListener("resize", update);
    // ResizeObserver 로도 뷰포트 폭 변화를 감지(resize 이벤트 누락 환경 대비).
    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [design]);

  return (
    <div style={{ zoom, width: design, margin: "0 auto" }}>{children}</div>
  );
}
