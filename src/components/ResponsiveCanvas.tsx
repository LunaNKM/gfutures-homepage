// 1440px 고정 디자인 캔버스 (가운데 정렬). 더 좁은 화면에서는 가로 스크롤.
export default function ResponsiveCanvas({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="canvas">{children}</div>;
}
