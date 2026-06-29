import type { RecommendationItem } from "@/lib/day-recommendations";
import Link from "next/link";

interface RecommendationCardProps {
  item: RecommendationItem;
}

function RecommendationCardContent({ item }: RecommendationCardProps) {
  const hasMeta = item.priceRange || item.hours;

  return (
    <>
      <span className="block text-sm text-white/85">{item.name}</span>
      {hasMeta && (
        <span className="mt-1.5 block space-y-0.5 text-[11px] leading-relaxed text-white/45">
          {item.priceRange && <span className="block">{item.priceRange}</span>}
          {item.hours && <span className="block">{item.hours}</span>}
        </span>
      )}
    </>
  );
}

const cardClassName =
  "block rounded-lg bg-white/[0.05] px-3.5 py-2.5 ring-1 ring-white/[0.08] transition-colors hover:bg-white/[0.09]";

export function RecommendationCard({ item }: RecommendationCardProps) {
  if (item.googleMapsUrl) {
    return (
      <Link
        href={item.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClassName} hover:text-white`}
      >
        <RecommendationCardContent item={item} />
      </Link>
    );
  }

  return (
    <span className={cardClassName}>
      <RecommendationCardContent item={item} />
    </span>
  );
}
