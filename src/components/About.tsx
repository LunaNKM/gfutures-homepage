import { aboutBg } from "@/lib/images";

export default function About() {
  return (
    <section
      id="about"
      className="relative h-[1024px] w-[1440px] overflow-hidden bg-black"
    >
      <img
        src={aboutBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <h2 className="display absolute left-[117px] top-[129px] text-[100px] leading-none text-white">
        About Us
      </h2>
      <div className="absolute bottom-[100px] right-[80px] text-right text-white">
        <p className="display text-[65px] leading-none">Since 2020</p>
        <p className="display mt-2 text-[165px] leading-none">D+2339</p>
      </div>
    </section>
  );
}
