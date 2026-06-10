import Nav from "./Nav";
import { heroBg } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative h-[620px] w-full overflow-hidden bg-black md:h-[767px]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <Nav />
      <h1 className="display absolute left-6 top-[250px] w-[min(848px,calc(100%-48px))] text-[54px] leading-none text-[#F4F4F4] md:left-[clamp(60px,5.8vw,84px)] md:top-[245px] md:text-[clamp(78px,6.95vw,100px)]">
        Go Global,
        <br />
        Grow Together
      </h1>
    </section>
  );
}
