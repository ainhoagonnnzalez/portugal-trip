"use client";

import { DayRecommendations } from "@/components/guide/day-recommendations";
import { RouteStop } from "@/components/guide/route-stop";
import { collectRecommendations, getRouteStops } from "@/lib/day-recommendations";
import { buildScheduledRouteStops } from "@/lib/itinerary-schedule";
import type { DayGuide } from "@/types/guide";
import { useMemo } from "react";

interface RouteViewProps {
  day: DayGuide;
}

export function RouteView({ day }: RouteViewProps) {
  const stops = useMemo(
    () => buildScheduledRouteStops(getRouteStops(day)),
    [day],
  );
  const recommendations = collectRecommendations(day);

  if (stops.length === 0 && recommendations.length === 0) return null;

  return (
    <div className="pb-16 md:pb-20">
      {stops.length > 0 && (
        <div className="mx-auto w-full max-w-[1600px] px-6 pt-2 md:px-12 md:pt-3 lg:px-16">
          <div className="border-b border-white/[0.08]">
            {stops.map((stop) => (
              <RouteStop key={stop.id} stop={stop} />
            ))}
          </div>
        </div>
      )}

      {recommendations.length > 0 && (
        <DayRecommendations groups={recommendations} />
      )}
    </div>
  );
}
