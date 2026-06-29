"use client";

import { DayHero } from "@/components/guide/day-hero";
import { DayNavigation } from "@/components/guide/day-navigation";
import { TopNavigation } from "@/components/guide/top-navigation";
import type { DayGuide } from "@/types/guide";

interface PlanHeaderProps {
  day: DayGuide;
  activeDay: number;
  onDayChange: (day: number) => void;
}

export function PlanHeader({ day, activeDay, onDayChange }: PlanHeaderProps) {
  return (
    <header className="bg-navy">
      <TopNavigation overlay />

      <div className="mt-4 border-t border-white/10 md:mt-5">
        <DayNavigation activeDay={activeDay} onChange={onDayChange} />
      </div>

      <div className="border-t border-white/10">
        <DayHero day={day} />
      </div>
    </header>
  );
}
