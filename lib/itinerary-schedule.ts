import type { GuideStop } from "@/types/guide";

export interface ScheduledRouteStop extends GuideStop {
  scheduledTime: string;
}

const DEFAULT_DAY_START = "09:30";
const MIN_LUNCH_MINUTES = 14 * 60;
const MIN_DINNER_MINUTES = 21 * 60;

function getMinimumStartMinutes(stop: GuideStop): number | null {
  const title = stop.title.toLowerCase();
  if (title === "comer" || title === "comida") return MIN_LUNCH_MINUTES;
  if (title.includes("cena")) return MIN_DINNER_MINUTES;
  return null;
}

export function parseDriveMinutes(value?: string): number {
  if (!value) return 0;

  const rangeMatch = value.match(/(\d+)\s*-\s*(\d+)/);
  if (rangeMatch) {
    return Math.round(
      (Number(rangeMatch[1]) + Number(rangeMatch[2])) / 2,
    );
  }

  const match = value.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

function parseTimeString(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function roundToNearest30(totalMinutes: number): number {
  return Math.round(totalMinutes / 30) * 30;
}

function formatMinutesAs12Hour(totalMinutes: number): string {
  const normalized =
    ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
  const hours24 = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const period = hours24 >= 12 ? "pm" : "am";
  const hours12 = hours24 % 12 || 12;

  if (minutes === 0) {
    return `${hours12}${period}`;
  }

  return `${hours12}:${String(minutes).padStart(2, "0")}${period}`;
}

export function inferStopDurationMinutes(stop: GuideStop): number {
  if (stop.durationMinutes != null) return stop.durationMinutes;

  const title = stop.title.toLowerCase();
  const description = (stop.description ?? "").toLowerCase();

  if (title === "desayuno") return 45;
  if (title === "comer" || title === "comida") return 75;
  if (title.includes("cena")) return 90;
  if (title === "supermercado") return 30;
  if (title === "piscina") return 60;
  if (description.includes("check-out")) return 30;
  if (title.includes("paseo por")) return 90;
  if (title.includes("algar seco") || title.includes("mirador")) return 60;
  if (title === "portimão") return 60;
  if (title.includes("playa de marinha") || description.includes("mañana")) {
    return 150;
  }
  if (title.includes("carvalho")) return 45;
  if (title.includes("elegir playa")) return 120;
  if (title === "silves") return 135;
  if (title === "ferragudo") return 30;
  if (title.includes("old town")) return 120;
  if (title.includes("aeropuerto")) return 45;
  if (title.includes("devolver coche")) return 20;
  if (title.includes("tour") || title.includes("lancha")) return 180;
  if (title.includes("plan de tarde") || title.includes("elegir plan")) {
    return 150;
  }
  if (title.includes("strip")) return 90;
  if (title === "faro") return 60;
  if (title === "apartamento") {
    if (description.includes("dejar maletas")) return 30;
    return 75;
  }

  return 60;
}

export function buildScheduledRouteStops(
  stops: GuideStop[],
): ScheduledRouteStop[] {
  if (stops.length === 0) return [];

  let cursor = parseTimeString(stops[0].time ?? DEFAULT_DAY_START);

  return stops.map((stop, index) => {
    if (index > 0) {
      cursor += parseDriveMinutes(stop.drivingTimeFromPrevious);
    }

    const minimumStart = getMinimumStartMinutes(stop);
    if (minimumStart != null) {
      cursor = Math.max(cursor, minimumStart);
    }

    cursor = roundToNearest30(cursor);
    const scheduledTime = formatMinutesAs12Hour(cursor);
    cursor += inferStopDurationMinutes(stop);

    return { ...stop, scheduledTime };
  });
}
