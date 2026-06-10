import Link from "next/link";
import { company } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function NaverBlogIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M5 6.5h14v9.2H9.4L6.3 19v-3.3H5V6.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9 9.1h3.1c1.3 0 2.1.7 2.1 1.7 0 .6-.3 1.1-.8 1.3.7.2 1.1.8 1.1 1.5 0 1.1-.8 1.8-2.3 1.8H9V9.1Zm2.8 2.3c.5 0 .8-.2.8-.6s-.3-.6-.8-.6h-1.2v1.2h1.2Zm.2 2.9c.6 0 .9-.3.9-.7s-.3-.7-.9-.7h-1.4v1.4H12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
      <path
        d="M10 3v10m0 0 4-4m-4 4-4-4M4 16.5h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-footer text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-[584px_424px_minmax(0,1fr)] md:gap-0 md:px-0 md:py-0">
        {/* Col 1 — 로고 + 태그라인 */}
        <div className="md:h-[652px] md:pl-[83px] md:pt-[132px]">
          <p className="font-logo text-[40px] font-bold uppercase leading-none tracking-[-0.03em] md:text-[76px]">
            GFUTURES
          </p>
          <p className="display mt-8 text-[28px] leading-none tracking-[-0.03em] md:mt-[36px] md:text-[36px] md:leading-[36px]">
            Global No.1
            <br />
            Strategic
            <br />
            Partner,
          </p>
        </div>

        {/* Col 2 — Office / Contact / Follow */}
        <div className="md:h-[652px] md:border-x md:border-white/15 md:pl-[58px] md:pt-[132px]">
          <div>
            <p className="text-[16px] font-medium leading-none tracking-[-0.02em] text-white/55">
              Our Office
            </p>
            <p className="mt-[10px] text-[16px] leading-[1.55] tracking-[-0.02em]">
              {company.address}
              <br />
              {company.bizNo}
            </p>
          </div>

          <div className="mt-[42px]">
            <p className="text-[16px] font-medium leading-none tracking-[-0.02em] text-white/55">
              Contact
            </p>
            <p className="mt-[10px] text-[16px] leading-none tracking-[-0.02em]">
              {company.email}
            </p>
          </div>

          <div className="mt-[44px]">
            <p className="text-[16px] font-medium leading-none tracking-[-0.02em] text-white/55">
              Follow
            </p>
            <div className="mt-[11px] flex gap-2">
              <Link
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-black"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://blog.naver.com/"
                aria-label="Naver Blog"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-black"
              >
                <NaverBlogIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Col 3 — 회사소개서 / 카피라이트 */}
        <div className="flex flex-col md:relative md:h-[652px] md:block">
          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-[11px] text-[20px] font-bold leading-none tracking-[-0.03em] transition-opacity hover:opacity-70 md:absolute md:right-[68px] md:top-[148px]"
          >
            <span>회사소개서</span>
            <DownloadIcon />
          </Link>
          <p className="mt-12 text-[14px] leading-none text-white/85 md:absolute md:bottom-[76px] md:right-[42px] md:mt-0">
            {company.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
