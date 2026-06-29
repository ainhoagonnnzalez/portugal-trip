"use client";

import "leaflet/dist/leaflet.css";
import { mapCategoryLabels } from "@/lib/constants";
import type { MapLocation } from "@/types/guide";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const icon = L.divIcon({
  className: "",
  html: `<div style="background:#082B5A;width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.2)"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

interface MapInnerProps {
  locations: MapLocation[];
  center: { lat: number; lng: number };
}

export default function MapInner({ locations, center }: MapInnerProps) {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={locations.length > 0 ? 11 : 12}
      className="h-[55vh] min-h-[360px] w-full rounded-2xl border border-border shadow-card md:h-[60vh]"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={icon}>
          <Popup>
            <p className="text-xs text-text-subtle">
              {mapCategoryLabels[loc.category]}
            </p>
            <p className="mt-0.5 text-sm font-semibold">{loc.name}</p>
            {loc.googleMapsUrl && (
              <a
                href={loc.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs font-medium text-accent"
              >
                Google Maps
              </a>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
