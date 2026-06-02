import Link from "next/link";
import { NAV, company } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="w-[1440px] bg-footer px-[20px] py-[50px] text-white">
      <div className="relative flex gap-[200px] px-[1px]">
        {/* 좌측 메뉴 */}
        <nav className="flex flex-col gap-1">
          {NAV.map((m) => (
            <Link
              key={m.label}
              href={m.href}
              className="display text-[40px] leading-none normal-case transition-opacity hover:opacity-60"
            >
              {m.label}
            </Link>
          ))}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xl font-bold">회사소개서</span>
            <span className="inline-block h-5 w-5 rounded-full bg-white" />
          </div>
        </nav>

        {/* 우측 회사 정보 */}
        <div className="ml-auto grid grid-cols-2 gap-x-[60px] gap-y-8 text-base">
          <div>
            <p className="mb-1 font-medium text-white/60">Our Office</p>
            <p>{company.address}</p>
            <p>{company.bizNo}</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-white/60">Contact</p>
            <p>{company.email}</p>
            <p className="mt-6 font-medium text-white/60">Follow</p>
            <div className="mt-2 flex gap-3">
              <span className="h-9 w-9 rounded-full border border-white/20" />
              <span className="h-9 w-9 rounded-full border border-white/20" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 max-w-[690px] text-[18px] leading-[1.3] tracking-[-0.03em]">
        {company.footerCopy}
      </p>
      <p className="mt-6 text-right text-sm text-white/50">
        {company.copyright}
      </p>
    </footer>
  );
}
