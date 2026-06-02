import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import SiteHeader from "@/components/SiteHeader";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import CoreValue from "@/components/CoreValue";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/Reveal";

export default function AboutPage() {
  return (
    <ResponsiveCanvas>
      <SiteHeader />
      <FadeUp>
        <About />
      </FadeUp>
      <FadeUp>
        <MissionVision />
      </FadeUp>
      <FadeUp>
        <CoreValue />
      </FadeUp>
      <FadeUp>
        <Services />
      </FadeUp>
      <Footer />
    </ResponsiveCanvas>
  );
}
