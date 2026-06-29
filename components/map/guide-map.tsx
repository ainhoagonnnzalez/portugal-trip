"use client";

import { mapCenter } from "@/data/map-locations";
import type { MapLocation } from "@/types/guide";
import dynamic from "next/dynamic";

const MapInner = dynamic(() => import("./map-inner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[55vh] min-h-[360px] items-center justify-center rounded-2xl border border-border bg-card">
      <p className="text-sm text-text-muted">Cargando mapa…</p>
    </div>
  ),
});

export function GuideMap({ locations }: { locations: MapLocation[] }) {
  return <MapInner locations={locations} center={mapCenter} />;
}
