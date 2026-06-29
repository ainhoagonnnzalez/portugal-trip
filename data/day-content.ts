import type { DayGuide, MapLocation, MealOption, VenueOption } from "@/types/guide";
import { activityMeta, clubMeta, mealMeta, venueMeta } from "@/data/place-meta";
import { images } from "@/lib/images";

const maps = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const meal = (id: string, name: string, query?: string): MealOption => ({
  id,
  name,
  googleMapsUrl: maps(query ?? name),
  ...mealMeta[id],
});

const venue = (id: string, name: string, query?: string): VenueOption => ({
  id,
  name,
  googleMapsUrl: maps(query ?? name),
  ...venueMeta[id],
});

const nightVenues = () => [
  venue("kiss", "Kiss Club", "Kiss Club Albufeira"),
  venue("liberto", "Liberto Club", "Liberto Club Albufeira"),
];

export const day1: DayGuide = {
  day: 1,
  weekday: "Viernes",
  dateLabel: "24 Julio",
  stops: [
    {
      id: "d1-faro",
      time: "23:45",
      title: "Aeropuerto de Faro",
      description: "Recoger coche de alquiler.",
      durationMinutes: 30,
      image: images.faro,
      googleMapsUrl: maps("Aeroporto de Faro"),
      coordinates: { lat: 37.0154, lng: -7.9717 },
    },
    {
      id: "d1-apartment",
      title: "Apartamento",
      description: "Dejar maletas.",
      image: images.albufeira,
      drivingTimeFromPrevious: "35 min",
      googleMapsUrl: maps("Albufeira"),
      coordinates: { lat: 37.0889, lng: -8.2503 },
    },
    {
      id: "d1-oldtown",
      title: "Old Town Albufeira",
      image: images.oldTownAlbufeira,
      details: ["Tomar algo.", "Pasear.", "Opcional salir un rato."],
      drivingTimeFromPrevious: "15 min",
      googleMapsUrl: maps("Albufeira Old Town"),
      coordinates: { lat: 37.0881, lng: -8.2478 },
    },
  ],
};

export const day2: DayGuide = {
  day: 2,
  weekday: "Sábado",
  dateLabel: "25 Julio",
  theme: "Playa + Carvoeiro + Fiesta",
  stops: [
    {
      id: "d2-breakfast",
      time: "09:30",
      title: "Desayuno",
      meals: [
        meal("letras-lounge", "Letras Lounge", "Letras Lounge Albufeira"),
        meal("doce-ke-doce", "Doce Ke Doce", "Doce Ke Doce Albufeira"),
        meal("al-gharb", "Al-Gharb Coffee Roasters", "Al-Gharb Coffee Roasters Albufeira"),
      ],
    },
    {
      id: "d2-marinha",
      title: "Playa de Marinha",
      description: "Pasar la mañana.",
      image: images.praiaDaMarinha,
      drivingTimeFromPrevious: "35 min",
      googleMapsUrl: maps("Praia da Marinha"),
      coordinates: { lat: 37.0871, lng: -8.4253 },
    },
    {
      id: "d2-carvalho",
      title: "Playa de Carvalho",
      description: "Último baño.",
      image: images.praiaDoCarvalho,
      drivingTimeFromPrevious: "6 min",
      googleMapsUrl: maps("Praia do Carvalho"),
      coordinates: { lat: 37.0875, lng: -8.41 },
    },
    {
      id: "d2-lunch",
      title: "Comida",
      drivingTimeFromPrevious: "15 min",
      meals: [
        meal("boneca-bar", "Boneca Bar", "Boneca Bar Carvoeiro"),
        meal("vimar", "Vimar Restaurante", "Vimar Restaurante Carvoeiro"),
        meal("jota-lita", "Jota Lita", "Jota Lita Carvoeiro"),
      ],
    },
    {
      id: "d2-algar-seco",
      title: "Algar Seco",
      description: "Mirador sobre el mar · Formaciones rocosas",
      image: images.carvoeiro,
      googleMapsUrl: maps("Algar Seco Carvoeiro"),
      coordinates: { lat: 37.0974, lng: -8.4682 },
    },
    {
      id: "d2-supermarket",
      title: "Supermercado",
      drivingTimeFromPrevious: "25 min",
    },
    {
      id: "d2-apartment",
      title: "Apartamento",
      drivingTimeFromPrevious: "10 min",
    },
    {
      id: "d2-dinner",
      title: "Cena apartamento",
    },
    {
      id: "d2-strip",
      title: "The Strip",
      description: "Tomar algo · Previo fiesta",
      image: images.oldTownAlbufeira,
      drivingTimeFromPrevious: "10 min",
      googleMapsUrl: maps("The Strip Albufeira"),
      coordinates: { lat: 37.0912, lng: -8.2298 },
      venues: nightVenues(),
    },
  ],
};

export const day3: DayGuide = {
  day: 3,
  weekday: "Domingo",
  dateLabel: "26 Julio",
  stops: [
    {
      id: "d3-breakfast",
      time: "09:30",
      title: "Desayuno",
    },
    {
      id: "d3-silves",
      title: "Silves",
      image: images.silves,
      drivingTimeFromPrevious: "25 min",
      optionsLabel: "Ver:",
      meals: [
        meal("silves-castillo", "Castillo", "Castillo de Silves"),
        meal("silves-murallas", "Murallas", "Murallas Silves"),
        meal("silves-catedral", "Catedral", "Catedral de Silves"),
        meal("silves-centro", "Centro histórico", "Centro histórico Silves"),
      ],
      googleMapsUrl: maps("Silves Portugal"),
      coordinates: { lat: 37.1896, lng: -8.4442 },
    },
    {
      id: "d3-ferragudo",
      title: "Ferragudo",
      image: images.ferragudo,
      drivingTimeFromPrevious: "30 min",
      optionsLabel: "Ver:",
      meals: [
        meal("ferragudo-puerto", "Puerto", "Puerto Ferragudo"),
        meal("ferragudo-plaza", "Plaza", "Plaza Ferragudo"),
        meal("ferragudo-calles", "Calles blancas", "Ferragudo calles"),
        meal("ferragudo-miradores", "Miradores", "Miradores Ferragudo"),
      ],
      googleMapsUrl: maps("Ferragudo Portugal"),
      coordinates: { lat: 37.1192, lng: -8.5217 },
    },
    {
      id: "d3-lunch",
      title: "Comer",
      meals: [
        meal("sueste", "Sueste", "Sueste Ferragudo"),
        meal("fim-do-mundo", "Fim do Mundo", "Fim do Mundo Ferragudo"),
        meal("club-nau", "Club Nau", "Club Nau Ferragudo"),
        meal("borda-do-cais", "Borda do Cais", "Borda do Cais Ferragudo"),
      ],
    },
    {
      id: "d3-paseo",
      title: "Paseo por Ferragudo",
    },
    {
      id: "d3-portimao",
      title: "Portimão",
      description: "Paseo marítimo.",
      image: images.portimao,
      drivingTimeFromPrevious: "10 min",
      googleMapsUrl: maps("Portimão paseo marítimo"),
      coordinates: { lat: 37.1366, lng: -8.5373 },
    },
    {
      id: "d3-apartment",
      title: "Apartamento",
      drivingTimeFromPrevious: "35 min",
      googleMapsUrl: maps("Albufeira"),
      coordinates: { lat: 37.0889, lng: -8.2503 },
    },
    {
      id: "d3-afternoon",
      title: "Elegir plan de tarde",
      drivingTimeFromPrevious: "15 min",
      beachClubs: [
        {
          id: "nosoloagua",
          name: "NoSoloÁgua",
          googleMapsUrl: maps("NoSoloÁgua Albufeira"),
          ...clubMeta.nosoloagua,
        },
        {
          id: "sky-bar",
          name: "Sky Bar Carvoeiro",
          googleMapsUrl: maps("Sky Bar Carvoeiro"),
          ...clubMeta["sky-bar"],
        },
        {
          id: "verdelago",
          name: "VerdeLago Beach Club",
          googleMapsUrl: maps("VerdeLago Beach Club"),
          ...clubMeta.verdelago,
        },
      ],
    },
  ],
};

export const day4: DayGuide = {
  day: 4,
  weekday: "Lunes",
  dateLabel: "27 Julio",
  theme: "Lancha + Playa + Fiesta",
  stops: [
    {
      id: "d4-boat",
      time: "09:30",
      title: "Tour lancha rápida",
      description: "Cuevas + Delfines · ~3 h",
      durationMinutes: 180,
      image: images.albufeira,
      drivingTimeFromPrevious: "10 min",
      googleMapsUrl: maps("Marina de Albufeira"),
      coordinates: { lat: 37.0875, lng: -8.2611 },
    },
    {
      id: "d4-jetski",
      title: "Motos de agua (opcional)",
      ...activityMeta["d4-jetski"],
    },
    {
      id: "d4-coasteering",
      title: "Coasteering (opcional)",
      ...activityMeta["d4-coasteering"],
    },
    {
      id: "d4-lunch",
      title: "Comer",
      drivingTimeFromPrevious: "10 min",
    },
    {
      id: "d4-beach",
      title: "Elegir playa",
      image: images.praiaDaFalesia,
      drivingTimeFromPrevious: "15 min",
      meals: [
        meal("falesia", "Playa de Falésia", "Praia da Falésia"),
        meal("sao-rafael", "Playa de São Rafael", "Praia de São Rafael"),
        meal("castelo", "Playa de Castelo", "Praia do Castelo Albufeira"),
        meal("arrifes", "Playa de Arrifes", "Praia dos Arrifes"),
      ],
    },
    {
      id: "d4-apartment",
      title: "Apartamento",
      drivingTimeFromPrevious: "15 min",
      googleMapsUrl: maps("Albufeira"),
      coordinates: { lat: 37.0889, lng: -8.2503 },
    },
    {
      id: "d4-dinner",
      title: "Cena apartamento",
    },
    {
      id: "d4-strip",
      title: "The Strip",
      description: "Tomar algo · Previo fiesta",
      image: images.oldTownAlbufeira,
      drivingTimeFromPrevious: "10 min",
      googleMapsUrl: maps("The Strip Albufeira"),
      coordinates: { lat: 37.0912, lng: -8.2298 },
      venues: nightVenues(),
    },
  ],
};

export const day5: DayGuide = {
  day: 5,
  weekday: "Martes",
  dateLabel: "28 Julio",
  freeDayTitle: "DÍA LIBRE",
  pendingMessage: "Todavía por decidir.",
  ideas: [
    "Piscina",
    "Beach Club",
    "Old Town",
    "Compras",
    "Playa",
    "Restaurante",
  ],
  stops: [],
};

export const day6: DayGuide = {
  day: 6,
  weekday: "Miércoles",
  dateLabel: "29 Julio",
  stops: [
    {
      id: "d6-pool",
      time: "09:30",
      title: "Piscina",
    },
    {
      id: "d6-checkout",
      title: "Apartamento",
      description: "Check-out",
      googleMapsUrl: maps("Albufeira"),
      coordinates: { lat: 37.0889, lng: -8.2503 },
    },
    {
      id: "d6-faro",
      title: "Faro",
      drivingTimeFromPrevious: "35 min",
      googleMapsUrl: maps("Faro Portugal"),
      coordinates: { lat: 37.0194, lng: -7.9322 },
    },
    {
      id: "d6-lunch",
      title: "Comer",
    },
    {
      id: "d6-car",
      title: "Devolver coche",
      drivingTimeFromPrevious: "15 min",
      googleMapsUrl: maps("Aeroporto de Faro alquiler coches"),
    },
    {
      id: "d6-airport",
      title: "Aeropuerto",
      image: images.faro,
      googleMapsUrl: maps("Aeroporto de Faro"),
      coordinates: { lat: 37.0154, lng: -7.9717 },
    },
  ],
};

export function collectDayLocations(day: DayGuide): MapLocation[] {
  const locations: MapLocation[] = [];
  const seen = new Set<string>();

  const add = (loc: MapLocation) => {
    if (seen.has(loc.id)) return;
    seen.add(loc.id);
    locations.push(loc);
  };

  for (const stop of day.stops) {
    if (stop.coordinates) {
      add({
        id: stop.id,
        name: stop.title,
        lat: stop.coordinates.lat,
        lng: stop.coordinates.lng,
        googleMapsUrl: stop.googleMapsUrl,
        category: "stop",
      });
    }
    for (const mealItem of stop.meals ?? []) {
      if (mealItem.coordinates) {
        add({
          id: mealItem.id,
          name: mealItem.name,
          lat: mealItem.coordinates.lat,
          lng: mealItem.coordinates.lng,
          googleMapsUrl: mealItem.googleMapsUrl,
          category: "meal",
        });
      }
    }
    for (const venue of stop.venues ?? []) {
      if (venue.coordinates) {
        add({
          id: venue.id,
          name: venue.name,
          lat: venue.coordinates.lat,
          lng: venue.coordinates.lng,
          googleMapsUrl: venue.googleMapsUrl,
          category: "venue",
        });
      }
    }
    for (const club of stop.beachClubs ?? []) {
      if (club.coordinates) {
        add({
          id: club.id,
          name: club.name,
          lat: club.coordinates.lat,
          lng: club.coordinates.lng,
          googleMapsUrl: club.googleMapsUrl,
          category: "beach-club",
        });
      }
    }
    for (const activity of stop.activities ?? []) {
      if (activity.coordinates) {
        add({
          id: activity.id,
          name: activity.name,
          lat: activity.coordinates.lat,
          lng: activity.coordinates.lng,
          googleMapsUrl: activity.googleMapsUrl,
          category: "activity",
        });
      }
    }
  }

  return locations;
}

export function getRouteCoordinates(day: DayGuide): [number, number][] {
  return day.stops
    .filter((s) => s.coordinates)
    .map((s) => [s.coordinates!.lat, s.coordinates!.lng] as [number, number]);
}
