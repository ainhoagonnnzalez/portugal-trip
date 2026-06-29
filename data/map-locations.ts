import type { MapLocation } from "@/types/guide";
import { collectDayLocations } from "./day-content";
import { days } from "./days";

export { collectDayLocations } from "./day-content";

export const mapCenter = { lat: 37.0889, lng: -8.2503 };

export function getAllMapLocations(): MapLocation[] {
  const locations: MapLocation[] = [];
  const seen = new Set<string>();

  for (const day of days) {
    for (const loc of collectDayLocations(day)) {
      if (!seen.has(loc.id)) {
        seen.add(loc.id);
        locations.push(loc);
      }
    }
  }

  return locations;
}

export function getPrimaryMapsUrl(): string | null {
  for (const day of days) {
    for (const stop of day.stops) {
      if (stop.googleMapsUrl) return stop.googleMapsUrl;
    }
  }
  return null;
}
