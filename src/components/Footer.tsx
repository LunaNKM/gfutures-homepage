import Link from "next/link";
import { company } from "@/lib/site";

const footerNav = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Service", href: "/service" },
  { label: "Blog", href: "/#blog" },
  { label: "News", href: "/#pr" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]">
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
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]">
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

export default function Footer() {
  return (
    <footer className="w-full bg-footer px-6 py-12 text-white md:h-[465px] md:px-0 md:py-0">
      <div className="grid gap-12 md:grid-cols-[350px_minmax(0,1fr)_330px]">
        <div className="border-white/35 md:h-[465px] md:border-r md:pl-5 md:pt-[52px]">
          <p className="font-logo text-[24px] font-bold uppercase leading-none tracking-[-0.03em]">
            GFUTURES
          </p>
          <nav className="mt-24 flex flex-col items-start md:mt-[132px]">
            {footerNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="display text-[36px] leading-[1.06] tracking-[-0.04em] transition-opacity hover:opacity-60 md:text-[40px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-end md:h-[465px] md:px-[25px] md:pb-[34px]">
          <Link
            href="/about"
            className="flex w-fit items-start gap-3 text-[19px] font-bold leading-none tracking-[-0.03em] transition-opacity hover:opacity-70"
          >
            <span>회사소개서</span>
            <span className="relative inline-flex h-6 w-5 items-start justify-center">
              <span aria-hidden="true" className="text-[20px] leading-none">
                ↓
              </span>
              <span className="absolute bottom-0 h-[2px] w-[14px] bg-white" />
            </span>
          </Link>
          <p className="mt-5 max-w-[660px] text-[18px] font-semibold leading-[1.22] tracking-[-0.03em] md:text-[20px]">
            {company.footerCopy}
          </p>
        </div>

        <div className="md:h-[465px] md:pt-[52px]">
          <div>
            <p className="text-[16px] font-semibold leading-none tracking-[-0.02em] text-white/55">
              Our Office
            </p>
            <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em]">
              {company.address}
              <br />
              {company.bizNo}
            </p>
          </div>

          <div className="mt-11">
            <p className="text-[16px] font-semibold leading-none tracking-[-0.02em] text-white/55">
              Contact
            </p>
            <p className="mt-4 text-[16px] leading-none tracking-[-0.02em]">
              {company.email}
            </p>
          </div>

          <div className="mt-12">
            <p className="text-[16px] font-semibold leading-none tracking-[-0.02em] text-white/55">
              Follow
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-black"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://blog.naver.com/"
                aria-label="Naver Blog"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-black"
              >
                <NaverBlogIcon />
              </Link>
            </div>
          </div>

          <p className="mt-16 text-[14px] leading-none text-white/85 md:mt-[74px]">
            {company.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
