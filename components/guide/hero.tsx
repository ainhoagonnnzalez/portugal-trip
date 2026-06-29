"use client";

import { site } from "@/lib/constants";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [imageFailed, setImageFailed] = useState(false);

  const hasImage = Boolean(site.heroImage) && !imageFailed;

  const imageY = useTransform(
    scrollY,
    [0, 800],
    [0, prefersReducedMotion || !hasImage ? 0 : 160],
  );
  const contentY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  const scrollNext = () => {
    document.getElementById("siguiente")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero relative -mt-nav h-[calc(100vh+var(--spacing-nav))] w-full overflow-hidden">
      <motion.div className="absolute inset-0 w-full" style={{ y: imageY }}>
        {hasImage ? (
          <>
            <Image
              src={site.heroImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
              onError={() => setImageFailed(true)}
            />
            <div className="absolute inset-0 bg-navy/60" aria-hidden />
          </>
        ) : (
          <div className="absolute inset-0 bg-navy" aria-hidden />
        )}
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex h-full w-full min-w-0 flex-col items-center justify-center px-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] pb-[max(5rem,env(safe-area-inset-bottom))] pt-[max(4.5rem,env(safe-area-inset-top))]"
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full min-w-0 max-w-[1600px] flex-col items-center text-center"
        >
          <h1 className="text-hero-stack">
            <span className="text-hero-stack-line text-white">Viaje</span>
            <span className="text-hero-stack-line text-hero-stack-mid text-accent">
              a
            </span>
            <span className="text-hero-stack-line text-white">Portugal</span>
          </h1>

          <p className="text-hero-meta mt-8 text-white/80 sm:mt-10 md:mt-12">
            {site.dates}
          </p>
          <p className="text-display-place mt-3 text-white sm:mt-4">
            {site.location}
          </p>
          <p
            className="mt-3 text-lg tracking-[0.35em] sm:mt-4 sm:text-xl"
            aria-hidden
          >
            🌸🏝️
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={scrollNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-[max(2rem,env(safe-area-inset-bottom))] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 border-0 bg-transparent p-3 text-white/50 transition-colors hover:text-white/90"
          aria-label="Desplazar hacia abajo"
        >
          <motion.span
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] font-medium uppercase tracking-[0.3em]"
          >
            Desplazar
          </motion.span>
          <span className="block h-10 w-px bg-current" />
        </motion.button>
      </motion.div>
    </section>
  );
}
