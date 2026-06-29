"use client";

import { dayLabels } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface DayNavigationProps {
  activeDay: number;
  onChange: (day: number) => void;
}

export function DayNavigation({ activeDay, onChange }: DayNavigationProps) {
  return (
    <nav aria-label="Días del viaje">
      <div className="hide-scrollbar mx-auto flex w-full max-w-[1600px] gap-5 overflow-x-auto px-6 md:gap-8 md:px-12 lg:px-16">
        {dayLabels.map((label, index) => {
          const day = index + 1;
          const active = activeDay === day;

          return (
            <button
              key={label}
              type="button"
              onClick={() => onChange(day)}
              className={cn(
                "shrink-0 py-3.5 font-display text-xs font-extrabold uppercase tracking-[0.24em] transition-colors md:py-4",
                active ? "text-white" : "text-white/70 hover:text-white",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
