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
        className="relative z-10 h-full w-full min-w-0 px-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-[18vh] pt-[var(--spacing-nav)] sm:pb-[16vh]">
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero-stack w-full"
          >
            <span className="text-hero-stack-line text-white">Viaje</span>
            <span className="text-hero-stack-line text-hero-stack-mid text-accent">
              a
            </span>
            <span className="text-hero-stack-line text-white">Portugal</span>
          </motion.h1>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-[max(1.5rem,env(safe-area-inset-left))] bottom-[max(5.5rem,env(safe-area-inset-bottom))] flex flex-col items-center text-center sm:bottom-[max(6rem,env(safe-area-inset-bottom))]"
        >
          <p className="text-hero-meta text-white/80">{site.dates}</p>
          <p className="text-hero-location mt-3 text-white sm:mt-4">
            {site.location}
          </p>
          <p
            className="mt-2.5 text-base tracking-[0.35em] sm:mt-3 sm:text-lg"
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
          className="absolute bottom-[max(1.75rem,env(safe-area-inset-bottom))] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 border-0 bg-transparent p-3 text-white/50 transition-colors hover:text-white/90"
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
