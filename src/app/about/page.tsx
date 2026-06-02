import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import SiteHeader from "@/components/SiteHeader";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import CoreValue from "@/components/CoreValue";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <ResponsiveCanvas>
      <SiteHeader />
      <About />
      <MissionVision />
      <CoreValue />
      <Services />
      <Footer />
    </ResponsiveCanvas>
  );
}
