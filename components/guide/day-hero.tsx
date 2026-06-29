"use client";

import type { DayGuide } from "@/types/guide";
import { motion, useReducedMotion } from "framer-motion";

interface DayHeroProps {
  day: DayGuide;
}

export function DayHero({ day }: DayHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const theme = day.theme ?? day.subtitle;

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-5 pt-5 md:px-12 md:pb-6 md:pt-6 lg:px-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-day-title text-white">DÍA {day.day}</h1>
          {(day.weekday || day.dateLabel) && (
            <p className="text-display-date mt-3 text-white/85 md:mt-4">
              {day.weekday?.toUpperCase()}
              {day.weekday && day.dateLabel && " · "}
              {day.dateLabel?.toUpperCase()}
            </p>
          )}
          {theme && (
            <p className="text-display-date mt-2 max-w-3xl text-white/60 md:mt-2.5">
              {theme.toUpperCase()}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
