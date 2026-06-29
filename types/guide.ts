export interface GuideStop {
  id: string;
  time?: string;
  title: string;
  description?: string;
  details?: string[];
  optionsLabel?: string;
  sectionLabel?: string;
  address?: string;
  priceGuide?: string[];
  openingHours?: string;
  mapsLabel?: string;
  icon?: string;
  image?: string;
  drivingTimeFromPrevious?: string;
  walkingTimeFromPrevious?: string;
  showDriveFromPrevious?: boolean;
  /** Minutes spent at this stop (used for schedule calculation). */
  durationMinutes?: number;
  duration?: string;
  price?: string;
  googleMapsUrl?: string;
  coordinates?: { lat: number; lng: number };
  meals?: MealOption[];
  beachClubs?: BeachClubOption[];
  venues?: VenueOption[];
  cocktails?: VenueOption[];
  activities?: ActivityOption[];
  /** Custom label for recommendations section (e.g. "Empresas de Buggy"). */
  recommendationGroup?: string;
  recommendationIcon?: string;
  alternatives?: { name: string; googleMapsUrl?: string }[];
}

export interface MealOption {
  id: string;
  name: string;
  description?: string;
  image?: string;
  rating?: string;
  priceLevel?: string;
  averagePrice?: string;
  openingHours?: string;
  kitchenHours?: string;
  distance?: string;
  googleMapsUrl?: string;
  instagramUrl?: string;
  coordinates?: { lat: number; lng: number };
}

export interface VenueOption {
  id: string;
  name: string;
  description?: string;
  image?: string;
  rating?: string;
  priceLevel?: string;
  openingHours?: string;
  averagePrice?: string;
  distance?: string;
  googleMapsUrl?: string;
  instagramUrl?: string;
  coordinates?: { lat: number; lng: number };
}

export interface BeachClubOption {
  id: string;
  name: string;
  image?: string;
  rating?: string;
  priceLevel?: string;
  openingHours?: string;
  averageCocktailPrice?: string;
  distance?: string;
  atmosphere?: string;
  googleMapsUrl?: string;
  coordinates?: { lat: number; lng: number };
}

export interface ActivityOption {
  id: string;
  name: string;
  description?: string;
  image?: string;
  price?: string;
  duration?: string;
  difficulty?: string;
  reservationRequired?: boolean;
  openingHours?: string;
  googleMapsUrl?: string;
  coordinates?: { lat: number; lng: number };
}

export interface DayGuide {
  day: number;
  weekday?: string;
  dateLabel?: string;
  subtitle?: string;
  theme?: string;
  intro?: string;
  totalKm?: string;
  totalDriving?: string;
  sunset?: string;
  dayBudget?: string;
  showDayMap?: boolean;
  pendingMessage?: string;
  pendingNote?: string;
  freeDayTitle?: string;
  ideas?: string[];
  /** Shown in day hero only (not in day tabs). */
  emoji?: string;
  stops: GuideStop[];
}

export interface MapLocation {
  id: string;
  name: string;
  category: "stop" | "meal" | "venue" | "beach-club" | "activity";
  lat: number;
  lng: number;
  googleMapsUrl?: string;
}
