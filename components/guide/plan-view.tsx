"use client";

import { PlanHeader } from "@/components/guide/plan-header";
import { RouteView } from "@/components/guide/route-view";
import { days } from "@/data/days";
import type { DayGuide } from "@/types/guide";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

function DayFree({ day }: { day: DayGuide }) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-6 pb-24 pt-10 md:px-12 lg:px-16">
      {day.freeDayTitle && (
        <h2 className="text-route-title">{day.freeDayTitle}</h2>
      )}
      {day.pendingMessage && (
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
          {day.pendingMessage}
        </p>
      )}
      {day.ideas && day.ideas.length > 0 && (
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {day.ideas.map((idea) => (
            <li
              key={idea}
              className="rounded-xl bg-white/[0.06] px-4 py-3.5 text-sm text-white/85 ring-1 ring-white/10"
            >
              {idea}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PlanView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dayParam = Number(searchParams.get("dia") ?? "1");
  const activeDay = dayParam >= 1 && dayParam <= 6 ? dayParam : 1;

  const currentDay = useMemo(
    () => days.find((d) => d.day === activeDay) ?? days[0],
    [activeDay],
  );

  const setDay = useCallback(
    (day: number) => {
      router.replace(`/plan?dia=${day}`, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [router],
  );

  if (
    currentDay.stops.length === 0 &&
    !currentDay.weekday &&
    !currentDay.freeDayTitle
  ) {
    return null;
  }

  const isFreeDay =
    currentDay.stops.length === 0 && currentDay.freeDayTitle;

  return (
    <div key={activeDay} className="min-h-screen bg-navy">
      <PlanHeader
        day={currentDay}
        activeDay={activeDay}
        onDayChange={setDay}
      />

      {isFreeDay ? <DayFree day={currentDay} /> : <RouteView day={currentDay} />}
    </div>
  );
}
