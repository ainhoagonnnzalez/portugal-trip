"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";

export interface LightboxPhoto {
  src: string;
  alt: string;
}

interface PhotoLightboxProps {
  photos: readonly LightboxPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function PhotoLightbox({
  photos,
  activeIndex,
  onClose,
  onChange,
}: PhotoLightboxProps) {
  const prefersReducedMotion = useReducedMotion();
  const isOpen = activeIndex != null;
  const photo = activeIndex != null ? photos[activeIndex] : null;
  const hasPrev = activeIndex != null && activeIndex > 0;
  const hasNext = activeIndex != null && activeIndex < photos.length - 1;

  const goPrev = useCallback(() => {
    if (activeIndex == null || !hasPrev) return;
    onChange(activeIndex - 1);
  }, [activeIndex, hasPrev, onChange]);

  const goNext = useCallback(() => {
    if (activeIndex == null || !hasNext) return;
    onChange(activeIndex + 1);
  }, [activeIndex, hasNext, onChange]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 px-4 py-16 sm:px-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-white/40 hover:text-white sm:right-8 sm:top-8"
          >
            Cerrar
          </button>

          {hasPrev && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 px-3 py-2 text-white/80 transition-colors hover:border-white/40 hover:text-white sm:left-6 sm:block"
              aria-label="Foto anterior"
            >
              ←
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 px-3 py-2 text-white/80 transition-colors hover:border-white/40 hover:text-white sm:right-6 sm:block"
              aria-label="Foto siguiente"
            >
              →
            </button>
          )}

          <motion.figure
            key={photo.src}
            initial={
              prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98, y: 8 }
            }
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[min(78vh,900px)] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
            <figcaption className="absolute -bottom-8 left-0 right-0 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
              {(activeIndex ?? 0) + 1} / {photos.length}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
