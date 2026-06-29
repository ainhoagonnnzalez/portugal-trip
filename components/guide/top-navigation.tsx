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
    <div className="mx-auto flex h-nav w-full max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-8">
      <Link
        href="/"
        className={cn(
          "font-display text-xs font-bold uppercase tracking-[0.2em] transition-colors",
          overlay ? "text-white/90" : "text-navy",
        )}
      >
        {site.title}
      </Link>

      <nav aria-label="Principal">
        <ul className="flex items-center gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-full px-3.5 py-2 text-xs font-medium transition-all sm:px-4 sm:text-sm",
                    active
                      ? overlay
                        ? "bg-white text-navy"
                        : "bg-navy text-white"
                      : overlay
                        ? "text-white/70 hover:text-white"
                        : "text-text-muted hover:text-navy",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
