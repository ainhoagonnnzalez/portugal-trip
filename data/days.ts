import type { DayGuide } from "@/types/guide";
import { day1, day2, day3, day4, day5, day6 } from "./day-content";

export const days: DayGuide[] = [day1, day2, day3, day4, day5, day6];

export function getDay(dayNumber: number): DayGuide | undefined {
  return days.find((d) => d.day === dayNumber);
}
