import Nav from "./Nav";
import { heroBg } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative h-[620px] w-full overflow-hidden bg-black md:h-[582px]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <Nav />
      <h1 className="display absolute left-6 top-[250px] w-[min(848px,calc(100%-48px))] text-[54px] leading-none text-[#F4F4F4] md:left-[clamp(46px,4.4vw,64px)] md:top-[186px] md:text-[clamp(60px,5.3vw,76px)]">
        Go Global,
        <br />
        Grow Together
      </h1>
    </section>
  );
}
