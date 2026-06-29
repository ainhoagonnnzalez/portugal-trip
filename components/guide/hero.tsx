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
            <div className="absolute inset-0 bg-navy/55" aria-hidden />
          </>
        ) : (
          <div className="absolute inset-0 bg-navy" aria-hidden />
        )}
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex h-full w-full flex-col items-start justify-end px-6 pb-24 md:px-12 md:pb-28 lg:px-16 lg:pb-32"
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-left"
        >
          <h1 className="text-display-hero text-white">{site.title}</h1>
          <p className="text-display-date mt-6 text-white/85 md:mt-8">
            {site.dates}
          </p>
          <p className="text-display-place mt-4 text-white md:mt-6">
            {site.location}
          </p>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-6 z-20 flex flex-col items-start gap-3 border-0 bg-transparent p-3 text-white/50 transition-colors hover:text-white/90 md:left-12 lg:left-16"
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
    </section>
  );
}
