import Nav from "./Nav";
import { heroBg } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative h-[767px] w-[1440px] overflow-hidden bg-black">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <Nav />
      <h1 className="display absolute left-[84px] top-[245px] w-[848px] text-[100px] leading-none text-[#F4F4F4]">
        Go Global,
        <br />
        Grow Together
      </h1>
    </section>
  );
}
