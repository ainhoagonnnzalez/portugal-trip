import type {
  BeachClubOption,
  MealOption,
} from "@/types/guide";

type MealMeta = Pick<
  MealOption,
  "averagePrice" | "priceLevel" | "openingHours" | "kitchenHours"
>;

type ClubMeta = Pick<
  BeachClubOption,
  "openingHours" | "averageCocktailPrice" | "priceLevel"
>;

type ActivityMeta = {
  price?: string;
  openingHours?: string;
};

type VenueMeta = {
  averagePrice?: string;
  priceLevel?: string;
  openingHours?: string;
};

export const venueMeta: Record<string, VenueMeta> = {
  kiss: {
    averagePrice: "15–20 €",
    openingHours: "23:30–6:00",
  },
  liberto: {
    averagePrice: "15–20 €",
    openingHours: "0:00–6:00",
  },
  georgina: {
    averagePrice: "10–15 €",
    openingHours: "17:00–2:00",
  },
  "sal-rosa": {
    averagePrice: "10–14 €",
    openingHours: "18:00–2:00",
  },
  "the-garden": {
    averagePrice: "10–15 €",
    openingHours: "17:00–1:00",
  },
  "matts-bar": {
    averagePrice: "8–12 €",
    openingHours: "18:00–2:00",
  },
};

export const mealMeta: Record<string, MealMeta> = {
  "letras-lounge": {
    averagePrice: "8–15 €",
    openingHours: "8:00–18:00",
    kitchenHours: "8:30–17:00",
  },
  "doce-ke-doce": {
    averagePrice: "6–12 €",
    openingHours: "8:00–19:00",
    kitchenHours: "8:30–18:00",
  },
  "al-gharb": {
    averagePrice: "5–10 €",
    openingHours: "8:00–19:00",
    kitchenHours: "8:00–18:00",
  },
  "boneca-bar": {
    averagePrice: "18–30 €",
    openingHours: "10:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:30",
  },
  vimar: {
    averagePrice: "20–35 €",
    openingHours: "10:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  "jota-lita": {
    averagePrice: "15–25 €",
    openingHours: "10:00–22:30",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  "silves-castillo": {
    averagePrice: "8 € entrada",
    openingHours: "9:00–18:00",
  },
  "silves-murallas": {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  "silves-catedral": {
    averagePrice: "2 € entrada",
    openingHours: "9:00–17:00",
  },
  "silves-centro": {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  "ferragudo-puerto": {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  "ferragudo-plaza": {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  "ferragudo-calles": {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  "ferragudo-miradores": {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  sueste: {
    averagePrice: "25–40 €",
    openingHours: "12:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:30",
  },
  "fim-do-mundo": {
    averagePrice: "20–35 €",
    openingHours: "12:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  "club-nau": {
    averagePrice: "22–38 €",
    openingHours: "12:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:30",
  },
  "borda-do-cais": {
    averagePrice: "18–30 €",
    openingHours: "12:00–22:30",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  falesia: {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  "sao-rafael": {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  castelo: {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  arrifes: {
    averagePrice: "Gratis",
    openingHours: "24h",
  },
  "os-arcos": {
    averagePrice: "18–28 €",
    openingHours: "12:00–22:30",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  "bom-apetite": {
    averagePrice: "15–25 €",
    openingHours: "12:00–22:00",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  "tasquinha-rossio": {
    averagePrice: "18–30 €",
    openingHours: "12:00–22:30",
    kitchenHours: "12:00–15:00, 19:00–22:30",
  },
  "a-venda": {
    averagePrice: "18–30 €",
    openingHours: "12:00–22:00",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  "ria-formosa": {
    averagePrice: "20–35 €",
    openingHours: "12:00–22:30",
    kitchenHours: "12:00–15:00, 19:00–22:00",
  },
  "ham-faro": {
    averagePrice: "15–25 €",
    openingHours: "12:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:30",
  },
  "the-market": {
    averagePrice: "20–35 €",
    openingHours: "12:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:30",
  },
  "cabana-fresca": {
    averagePrice: "25–40 €",
    openingHours: "12:00–23:00",
    kitchenHours: "12:00–15:00, 19:00–22:30",
  },
  "bravo-steak": {
    averagePrice: "30–50 €",
    openingHours: "18:00–23:30",
    kitchenHours: "19:00–22:30",
  },
};

export const clubMeta: Record<string, ClubMeta> = {
  nosoloagua: {
    averageCocktailPrice: "12–18 €",
    openingHours: "10:00–2:00",
    priceLevel: "€€€",
  },
  "sky-bar": {
    averageCocktailPrice: "10–15 €",
    openingHours: "10:00–20:00",
    priceLevel: "€€",
  },
  verdelago: {
    averageCocktailPrice: "15–22 €",
    openingHours: "10:00–19:00",
    priceLevel: "€€€",
  },
};

export const activityMeta: Record<string, ActivityMeta> = {
  "d4-jetski": {
    price: "40–80 €",
    openingHours: "10:00–18:00",
  },
  "d4-coasteering": {
    price: "50–70 €",
    openingHours: "9:00–17:00",
  },
  "algarve-riders": {
    price: "55–120 €",
    openingHours: "9:00–17:00",
  },
  "xride-algarve": {
    price: "55–120 €",
    openingHours: "9:00–17:00",
  },
  "buggy-safari": {
    price: "55–120 €",
    openingHours: "9:00–17:00",
  },
};
