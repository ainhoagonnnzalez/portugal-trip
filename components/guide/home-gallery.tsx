"use client";

import { PhotoLightbox } from "@/components/guide/photo-lightbox";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
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
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border-0 bg-transparent p-0 md:aspect-[2/3]"
                aria-label={`Abrir foto ${i + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-navy/20 transition-colors duration-300 group-hover:bg-navy/0" />
              </motion.button>
            ))}
          </div>

          <div className="flex justify-center py-14 md:py-20">
            <Link
              href="/plan"
              className="text-sm font-medium uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-white"
            >
              Plan del viaje →
            </Link>
          </div>
        </div>
      </motion.section>

      <PhotoLightbox
        photos={previewPhotos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </>
  );
}
