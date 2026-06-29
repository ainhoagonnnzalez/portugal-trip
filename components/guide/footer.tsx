import { site } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-navy">
          {site.dates}
        </p>
        <div className="flex gap-6">
          <Link
            href="/plan"
            className="text-xs uppercase tracking-wider text-text-muted hover:text-navy"
          >
            Plan
          </Link>
          <Link
            href="/mapa"
            className="text-xs uppercase tracking-wider text-text-muted hover:text-navy"
          >
            Mapa
          </Link>
        </div>
      </div>
    </footer>
  );
}
