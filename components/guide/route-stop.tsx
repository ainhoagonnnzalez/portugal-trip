"use client";

import { getBriefDescription } from "@/lib/day-recommendations";
import type { ScheduledRouteStop } from "@/lib/itinerary-schedule";
import Link from "next/link";

interface RouteStopProps {
  stop: ScheduledRouteStop;
}

export function RouteStop({ stop }: RouteStopProps) {
  const description = getBriefDescription(stop);

  return (
    <article
      id={`stop-${stop.id}`}
      className="route-row scroll-mt-32"
    >
      <div className="route-col-time">
        <time className="text-itinerary-time">{stop.scheduledTime}</time>
      </div>

      <div className="route-col-main min-w-0">
        <h2 className="text-itinerary-title">{stop.title}</h2>
        {description && (
          <p className="text-itinerary-desc mt-1.5 truncate md:mt-2">
            {description}
          </p>
        )}
      </div>

      <div className="route-col-meta">
        {stop.drivingTimeFromPrevious && (
          <p className="text-itinerary-drive">
            <span aria-hidden>🚗 </span>
            {stop.drivingTimeFromPrevious}
          </p>
        )}
        {stop.googleMapsUrl && (
          <Link
            href={stop.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-itinerary-link"
          >
            Google Maps →
          </Link>
        )}
      </div>
    </article>
  );
}
