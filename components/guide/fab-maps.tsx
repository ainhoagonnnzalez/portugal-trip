"use client";

import { getPrimaryMapsUrl } from "@/data/map-locations";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FabMaps() {
  const pathname = usePathname();
  const mapsUrl = getPrimaryMapsUrl();

  if (pathname === "/") return null;

  if (pathname === "/mapa") {
    return (
      <Link
        href="/plan"
        className="fixed bottom-6 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-navy px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 md:bottom-8 md:right-8"
        style={{ marginBottom: "var(--safe-bottom)" }}
      >
        Plan
      </Link>
    );
  }

  return (
    <Link
      href={mapsUrl ?? "/mapa"}
      target={mapsUrl ? "_blank" : undefined}
      rel={mapsUrl ? "noopener noreferrer" : undefined}
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white transition-opacity hover:opacity-90 md:bottom-8 md:right-8"
      style={{ marginBottom: "var(--safe-bottom)" }}
      aria-label="Abrir mapa"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M1 5L7 2.5L13 5L19 2.5V15L13 17.5L7 15L1 17.5V5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M7 2.5V15M13 5V17.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </Link>
  );
}
