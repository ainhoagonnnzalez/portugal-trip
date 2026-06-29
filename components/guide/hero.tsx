"use client";

import { site } from "@/lib/constants";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

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

  const titleContainer: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.14,
            delayChildren: 0.2,
          },
        },
      };

  const titleLine: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: {
          opacity: 0,
          y: 56,
          filter: "blur(10px)",
        },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1,
            ease: easeOut,
          },
        },
      };

  const metaContainer: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.85,
            staggerChildren: 0.1,
          },
        },
      };

  const metaItem: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: easeOut },
        },
      };

  return (
    <section className="hero relative -mt-nav h-[calc(100vh+var(--spacing-nav))] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full"
        style={{ y: imageY }}
        initial={prefersReducedMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      >
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
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-[28vh] pt-[var(--spacing-nav)] sm:pb-[24vh]">
          <motion.h1
            variants={titleContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="show"
            className="text-hero-stack w-full"
          >
            <motion.span
              variants={titleLine}
              className="text-hero-stack-line text-white"
            >
              Viaje
            </motion.span>
            <motion.span
              variants={titleLine}
              className="text-hero-stack-line text-hero-stack-mid text-accent"
            >
              a
            </motion.span>
            <motion.span
              variants={titleLine}
              className="text-hero-stack-line text-white"
            >
              Portugal
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          variants={metaContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="show"
          className="absolute inset-x-[max(1.5rem,env(safe-area-inset-left))] bottom-0 flex flex-col items-center pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center sm:pb-[max(2rem,env(safe-area-inset-bottom))]"
        >
          <div className="hero-bottom-meta">
            <motion.p variants={metaItem} className="text-hero-meta text-white/80">
              {site.dates}
            </motion.p>
            <motion.p
              variants={metaItem}
              className="text-hero-location mt-3 text-white sm:mt-4"
            >
              {site.location}
            </motion.p>
            <motion.p
              variants={metaItem}
              className="mt-2.5 text-base tracking-[0.35em] sm:mt-3 sm:text-lg"
              aria-hidden
            >
              🌸🏝️
            </motion.p>
          </div>

          <motion.button
            type="button"
            onClick={scrollNext}
            variants={metaItem}
            className="mt-7 flex flex-col items-center gap-3 border-0 bg-transparent p-0 text-white/50 transition-colors hover:text-white/90 sm:mt-9"
            aria-label="Desplazar hacia abajo"
          >
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] font-medium uppercase tracking-[0.3em]"
            >
              Desplazar
            </motion.span>
            <span className="block h-8 w-px bg-current sm:h-10" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
