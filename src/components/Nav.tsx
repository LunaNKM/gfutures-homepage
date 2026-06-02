import Link from "next/link";
import { NAV } from "@/lib/site";

export default function Nav({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-black" : "text-white";
  const border = dark ? "border-black" : "border-white";
  return (
    <div
      className={`absolute left-1/2 top-3 z-30 flex h-[38px] w-[1400px] -translate-x-1/2 items-center justify-between ${color}`}
    >
      <Link
        href="/"
        className="font-[family-name:var(--font-logo)] text-2xl font-bold uppercase"
      >
        Gfutures
      </Link>
      <nav className="flex items-center gap-1">
        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="px-3 py-2 text-xl font-bold tracking-[-0.03em] transition-opacity hover:opacity-60"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        className={`flex h-[38px] items-center justify-center rounded-full border px-5 text-xl font-bold tracking-[-0.03em] capitalize ${border} transition-colors hover:bg-white hover:text-black`}
      >
        contact
      </button>
    </div>
  );
}
