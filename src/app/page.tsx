import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeDo from "@/components/HowWeDo";
import Partners from "@/components/Partners";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/Reveal";

export default function Home() {
  return (
    <ResponsiveCanvas>
      <Hero />
      <WhoWeAre />
      <FadeUp>
        <WhatWeDo />
      </FadeUp>
      <FadeUp>
        <HowWeDo />
      </FadeUp>
      <FadeUp>
        <Partners />
      </FadeUp>
      <FadeUp>
        <Work />
      </FadeUp>
      <Footer />
    </ResponsiveCanvas>
  );
}
