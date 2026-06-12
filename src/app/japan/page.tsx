import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import FitWidth from "@/components/FitWidth";
import SiteHeader from "@/components/SiteHeader";
import Japan from "@/components/Japan";
import JapanService from "@/components/JapanService";
import Footer from "@/components/Footer";

// 헤더/푸터는 다른 페이지와 동일하게 네이티브 크기로 렌더하고,
// 1440 고정 Figma 캔버스인 본문(Japan/JapanService)만 FitWidth로 줌한다.
export default function JapanPage() {
  return (
    <ResponsiveCanvas>
      <SiteHeader />
      <FitWidth>
        <Japan />
        <JapanService />
      </FitWidth>
      <Footer />
    </ResponsiveCanvas>
  );
}
