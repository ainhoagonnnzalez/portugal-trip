"use client";

import type { DayGuide } from "@/types/guide";
import dynamic from "next/dynamic";

const DayRouteMapInner = dynamic(
  () => import("./day-route-map-inner").then((m) => m.DayRouteMapInner),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[320px] items-center justify-center">
        <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
          Cargando mapa…
        </span>
      </div>
    ),
  },
);

interface DayRouteMapProps {
  day: DayGuide;
}

export function DayRouteMap({ day }: DayRouteMapProps) {
  if (!day.showDayMap || day.stops.filter((s) => s.coordinates).length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border/60 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-16">
        <p className="text-display-date text-text-muted">Mapa</p>
        <div className="mt-6">
          <DayRouteMapInner day={day} />
        </div>
      </div>
    </section>
  );
}
