import Link from "next/link";
import { NAV } from "@/lib/site";

export default function Nav({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-black" : "text-white";
  const border = dark ? "border-black" : "border-white";
  return (
    <div
      className={`absolute left-1/2 top-3 z-30 flex h-[38px] w-[calc(100%-40px)] max-w-[1400px] -translate-x-1/2 items-center justify-between ${color}`}
    >
      <Link
        href="/"
        className="font-[family-name:var(--font-logo)] text-2xl font-bold uppercase"
      >
        Gfutures
      </Link>
      <nav className="hidden items-center gap-1 md:flex">
        {NAV.map((item) =>
          item.children ? (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="block px-3 py-2 text-xl font-bold tracking-[-0.03em]"
              >
                <span className="border-b-2 border-transparent pb-1 transition-colors group-hover:border-current">
                  {item.label}
                </span>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-40 flex -translate-x-1/2 gap-5 whitespace-nowrap pt-1 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="text-base font-bold tracking-[-0.03em] transition-opacity hover:opacity-60"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-xl font-bold tracking-[-0.03em] transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
      <button
        className={`flex h-[38px] items-center justify-center rounded-full border px-5 text-xl font-bold tracking-[-0.03em] capitalize ${border} transition-colors hover:bg-white hover:text-black`}
      >
        contact
      </button>
    </div>
  );
}
