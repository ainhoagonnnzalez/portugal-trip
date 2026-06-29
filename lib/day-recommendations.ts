import type {
  ActivityOption,
  BeachClubOption,
  DayGuide,
  GuideStop,
  MealOption,
  VenueOption,
} from "@/types/guide";

export interface RecommendationItem {
  id: string;
  name: string;
  googleMapsUrl?: string;
  priceRange?: string;
  hours?: string;
}

export interface RecommendationGroup {
  id: string;
  label: string;
  icon: string;
  items: RecommendationItem[];
}

type RecommendationCategory =
  | "Restaurantes"
  | "Actividades"
  | "Beach Clubs"
  | "Noche";

const CATEGORY_META: Record<
  RecommendationCategory,
  { id: string; icon: string }
> = {
  Restaurantes: { id: "restaurants", icon: "🍴" },
  Actividades: { id: "activities", icon: "🌊" },
  "Beach Clubs": { id: "beach-clubs", icon: "🍸" },
  Noche: { id: "night", icon: "🌙" },
};

const CATEGORY_ORDER: RecommendationCategory[] = [
  "Restaurantes",
  "Actividades",
  "Beach Clubs",
  "Noche",
];

function uniqueItems(items: RecommendationItem[]): RecommendationItem[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function formatPriceRange(source: {
  averagePrice?: string;
  priceLevel?: string;
  price?: string;
  averageCocktailPrice?: string;
}): string | undefined {
  if (source.averagePrice) return source.averagePrice;
  if (source.averageCocktailPrice) {
    return `Cócteles ${source.averageCocktailPrice}`;
  }
  if (source.price) return source.price;
  if (source.priceLevel) return source.priceLevel;
  return undefined;
}

function formatHours(
  source: { kitchenHours?: string; openingHours?: string },
  options?: { preferKitchen?: boolean },
): string | undefined {
  const preferKitchen = options?.preferKitchen ?? true;

  if (preferKitchen && source.kitchenHours) {
    return `Cocina ${source.kitchenHours}`;
  }
  if (source.openingHours) return source.openingHours;
  if (source.kitchenHours) return `Cocina ${source.kitchenHours}`;
  return undefined;
}

function fromMeals(
  meals: MealOption[],
  preferKitchen = true,
): RecommendationItem[] {
  return meals.map((m) => ({
    id: m.id,
    name: m.name,
    googleMapsUrl: m.googleMapsUrl,
    priceRange: formatPriceRange(m),
    hours: formatHours(m, { preferKitchen }),
  }));
}

function fromVenues(venues: VenueOption[]): RecommendationItem[] {
  return venues.map((v) => ({
    id: v.id,
    name: v.name,
    googleMapsUrl: v.googleMapsUrl,
    priceRange: formatPriceRange(v),
    hours: formatHours(v, { preferKitchen: false }),
  }));
}

function fromClubs(clubs: BeachClubOption[]): RecommendationItem[] {
  return clubs.map((c) => ({
    id: c.id,
    name: c.name,
    googleMapsUrl: c.googleMapsUrl,
    priceRange: formatPriceRange(c),
    hours: formatHours(c, { preferKitchen: false }),
  }));
}

function fromActivities(activities: ActivityOption[]): RecommendationItem[] {
  return activities.map((a) => ({
    id: a.id,
    name: a.name,
    googleMapsUrl: a.googleMapsUrl,
    priceRange: formatPriceRange(a),
    hours: formatHours(a, { preferKitchen: false }),
  }));
}

function mealCategory(stop: GuideStop): RecommendationCategory {
  const title = stop.title.toLowerCase();
  if (title === "desayuno") return "Restaurantes";
  if (stop.optionsLabel === "Ver:") return "Actividades";
  if (title === "comer" || title === "comida") return "Restaurantes";
  if (title.includes("playa")) return "Actividades";
  if (title.includes("tarde")) return "Beach Clubs";
  return "Restaurantes";
}

export function getRouteStops(day: DayGuide): GuideStop[] {
  return day.stops.filter((stop) => !stop.title.includes("(opcional)"));
}

export function collectRecommendations(day: DayGuide): RecommendationGroup[] {
  const buckets = new Map<RecommendationCategory, RecommendationItem[]>();

  const add = (category: RecommendationCategory, items: RecommendationItem[]) => {
    if (items.length === 0) return;
    const existing = buckets.get(category) ?? [];
    buckets.set(category, uniqueItems([...existing, ...items]));
  };

  for (const stop of day.stops) {
    if (stop.meals?.length) {
      const category = mealCategory(stop);
      add(
        category,
        fromMeals(stop.meals, category === "Restaurantes"),
      );
    }
    if (stop.beachClubs?.length) {
      add("Beach Clubs", fromClubs(stop.beachClubs));
    }
    if (stop.activities?.length) {
      add("Actividades", fromActivities(stop.activities));
    }
    if (stop.venues?.length) {
      add("Noche", fromVenues(stop.venues));
    }

    if (stop.title.includes("(opcional)")) {
      add("Actividades", [
        {
          id: stop.id,
          name: stop.title.replace(/\s*\(opcional\)/i, ""),
          googleMapsUrl: stop.googleMapsUrl,
          priceRange: formatPriceRange({ price: stop.price }),
          hours: formatHours(
            { openingHours: stop.openingHours },
            { preferKitchen: false },
          ),
        },
      ]);
    }
  }

  return CATEGORY_ORDER.filter((label) => buckets.has(label)).map((label) => ({
    id: CATEGORY_META[label].id,
    label,
    icon: CATEGORY_META[label].icon,
    items: buckets.get(label)!,
  }));
}

export function getBriefDescription(stop: GuideStop): string | undefined {
  if (stop.description) return stop.description;
  if (stop.details?.length) {
    return stop.details
      .map((d) => d.replace(/\.$/, ""))
      .join(" · ");
  }
  return undefined;
}
