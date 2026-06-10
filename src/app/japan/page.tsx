import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import SiteHeader from "@/components/SiteHeader";
import Japan from "@/components/Japan";
import JapanService from "@/components/JapanService";
import Footer from "@/components/Footer";

export default function JapanPage() {
  return (
    <ResponsiveCanvas>
      <SiteHeader />
      <Japan />
      <JapanService />
      <Footer />
    </ResponsiveCanvas>
  );
}
