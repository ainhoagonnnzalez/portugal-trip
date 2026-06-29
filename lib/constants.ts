import { images } from "@/lib/images";

export const site = {
  title: "PORTUGAL",
  dates: "24 — 29 JULIO",
  location: "ALBUFEIRA",
  description: "Plan del viaje — Albufeira, julio 2026.",
  heroImage: images.hero,
} as const;

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Plan del viaje", href: "/plan" },
  { label: "Mapa", href: "/mapa" },
] as const;

export const dayLabels = [
  "Día 1",
  "Día 2",
  "Día 3",
  "Día 4",
  "Día 5",
  "Día 6",
] as const;

export const mapCategoryLabels: Record<string, string> = {
  stop: "Parada",
  meal: "Comida",
  "beach-club": "Beach club",
  activity: "Actividad",
  venue: "Sitio",
};

export { images };
