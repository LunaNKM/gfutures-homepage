import Nav from "./Nav";

// 내부 페이지(About / Service / Japan)용 상단 바 — 흰 배경 + 검정 내비
export default function SiteHeader() {
  return (
    <div className="relative h-[64px] w-full bg-white">
      <Nav dark />
    </div>
  );
}
