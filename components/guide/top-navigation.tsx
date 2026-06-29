"use client";

import { nav, site } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TopNavigationProps {
  overlay?: boolean;
}

export function TopNavigation({ overlay = false }: TopNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex h-nav w-full max-w-[1600px] items-center justify-between gap-2 px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] md:gap-4 md:px-6 lg:px-8">
      <Link
        href="/"
        className={cn(
          "shrink-0 font-display text-[10px] font-bold uppercase tracking-[0.16em] transition-colors sm:text-xs sm:tracking-[0.2em]",
          overlay ? "text-white/90" : "text-navy",
        )}
      >
        {site.title}
      </Link>

      <nav aria-label="Principal" className="min-w-0">
        <ul className="flex items-center justify-end gap-0.5 sm:gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const shortLabel = "shortLabel" in item ? item.shortLabel : undefined;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-all sm:px-3.5 sm:py-2 sm:text-xs md:px-4 md:text-sm",
                    active
                      ? overlay
                        ? "bg-white text-navy"
                        : "bg-navy text-white"
                      : overlay
                        ? "text-white/70 hover:text-white"
                        : "text-text-muted hover:text-navy",
                  )}
                >
                  <span className="sm:hidden">{shortLabel ?? item.label}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
