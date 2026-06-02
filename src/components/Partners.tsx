import { partnerLogos } from "@/lib/images";

function Row({ reverse = false }: { reverse?: boolean }) {
  const logos = [...partnerLogos, ...partnerLogos];
  return (
    <div className="flex w-max gap-[74px]" style={{ willChange: "transform" }}>
      <div
        className="flex gap-[74px]"
        style={{
          animation: `marquee ${reverse ? "32s" : "28s"} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {logos.map((src, i) => (
          <div
            key={i}
            className="flex h-[69px] w-[208px] flex-none items-center justify-center"
          >
            <img
              src={src}
              alt=""
              className="max-h-[50px] max-w-[180px] object-contain opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="w-[1440px] overflow-hidden bg-black py-[120px] text-white">
      <h2 className="display text-center text-[85px] leading-none">
        Partners &amp; Clients
      </h2>
      <p className="mt-8 text-center text-2xl font-medium capitalize">
        최고의 고객사와 최고의 파트너가 만나 최고의 성과를 만듭니다.
      </p>
      <div className="mt-16 flex flex-col gap-10">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
