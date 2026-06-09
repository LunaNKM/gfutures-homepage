import Link from "next/link";
import { NAV, company } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="w-screen bg-footer px-6 py-12 text-white md:h-[465px] md:w-[1440px] md:px-0 md:py-0">
      <div className="grid gap-10 md:grid-cols-[584px_424px_1fr]">
        <div className="md:pl-[78px] md:pt-[70px]">
          <p className="font-logo text-[42px] font-bold leading-none tracking-[-0.03em] md:text-[55px]">
            GFUTURES
          </p>
          <p className="display mt-7 max-w-[231px] text-[28px] leading-none md:mt-[26px] md:text-[36px]">
            {company.footerCopy}
          </p>
        </div>

        <div className="border-white/50 md:h-[465px] md:border-x md:px-[50px] md:pt-[62px]">
          <div>
            <p className="font-display text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-white/60">
              Our Office
            </p>
            <p className="mt-3 text-[15px] leading-[1.45] tracking-[-0.02em] md:text-[16px]">
              {company.address}
            </p>
            <p className="mt-1 text-[15px] leading-[1.45] tracking-[-0.02em] md:text-[16px]">
              {company.bizNo}
            </p>
          </div>

          <div className="mt-8 md:mt-[45px]">
            <p className="font-display text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-white/60">
              Contact
            </p>
            <p className="mt-3 text-[15px] leading-[1.45] tracking-[-0.02em] md:text-[16px]">
              {company.email}
            </p>
          </div>

          <div className="mt-8 md:mt-[42px]">
            <p className="font-display text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-white/60">
              Follow
            </p>
            <div className="mt-3 flex gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[13px]">
                ig
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[13px]">
                yt
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between md:h-[465px] md:pl-[50px] md:pr-[42px] md:pt-[70px] md:pb-[38px]">
          <Link
            href="/about"
            className="flex w-fit items-center gap-[11px] text-[20px] font-bold leading-[1.08] tracking-[-0.03em] transition-opacity hover:opacity-70"
          >
            <span>{"\ud68c\uc0ac\uc18c\uac1c\uc11c"}</span>
            <span aria-hidden="true" className="text-[20px] leading-none">
              {"\u2193"}
            </span>
          </Link>

          <nav className="mt-10 flex flex-wrap gap-x-5 gap-y-3 md:hidden">
            {NAV.map((m) => (
              <Link
                key={m.label}
                href={m.href}
                className="font-display text-[16px] transition-opacity hover:opacity-60"
              >
                {m.label}
              </Link>
            ))}
          </nav>

          <p className="mt-10 text-[13px] leading-[1.2] text-white/70 md:mt-0 md:text-right md:text-[14px]">
            {company.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
