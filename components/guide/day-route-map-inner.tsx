"use client";

import "leaflet/dist/leaflet.css";
import { getRouteCoordinates } from "@/data/day-content";
import type { DayGuide } from "@/types/guide";
import L from "leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";

const dot = L.divIcon({
  className: "",
  html: `<div style="background:#082B5A;width:8px;height:8px;border-radius:50%;border:2px solid white"></div>`,
  iconSize: [8, 8],
  iconAnchor: [4, 4],
});

export function DayRouteMapInner({ day }: { day: DayGuide }) {
  const route = getRouteCoordinates(day);
  const stops = day.stops.filter((s) => s.coordinates);
  const center = route[0] ?? [37.0889, -8.2503];

  return (
    <div className="overflow-hidden">
      <MapContainer
        center={center as [number, number]}
        zoom={11}
        className="h-[280px] w-full md:h-[320px]"
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {route.length > 1 && (
          <Polyline
            positions={route}
            pathOptions={{ color: "#082B5A", weight: 2, opacity: 0.6 }}
          />
        )}
        {stops.map((stop) => (
          <Marker
            key={stop.id}
            position={[stop.coordinates!.lat, stop.coordinates!.lng]}
            icon={dot}
          >
            <Popup>
              <p className="text-sm font-semibold">{stop.title}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
