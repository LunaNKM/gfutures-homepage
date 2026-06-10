import FitWidth from "@/components/FitWidth";
import SiteHeader from "@/components/SiteHeader";
import Japan from "@/components/Japan";
import JapanService from "@/components/JapanService";
import Footer from "@/components/Footer";

export default function JapanPage() {
  return (
    <FitWidth>
      <SiteHeader />
      <Japan />
      <JapanService />
      <Footer />
    </FitWidth>
  );
}
