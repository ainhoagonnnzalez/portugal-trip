"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const previewPhotos = [
  { src: "/images/1.jpg", alt: "Portugal" },
  { src: "/images/2.jpg", alt: "Portugal" },
  { src: "/images/3.jpg", alt: "Portugal" },
  { src: "/images/4.jpg", alt: "Portugal" },
  { src: "/images/5.jpg", alt: "Portugal" },
  { src: "/images/6.jpg", alt: "Portugal" },
] as const;

export function HomeGallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="siguiente"
      className="gallery bg-navy pt-[100px]"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto w-full max-w-[1800px] px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {previewPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl md:aspect-[2/3]"
            >
              <Link href="/plan" className="absolute inset-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-navy/20 transition-colors duration-300 group-hover:bg-navy/0" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center py-14 md:py-20">
          <Link
            href="/plan"
            className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
          >
            Plan del viaje →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
