import ResponsiveCanvas from "@/components/ResponsiveCanvas";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeDo from "@/components/HowWeDo";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
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
        <Clients />
      </FadeUp>
      <FadeUp>
        <Partners />
      </FadeUp>
      <FadeUp>
        <HowWeDo />
      </FadeUp>
      <Footer />
    </ResponsiveCanvas>
  );
}
