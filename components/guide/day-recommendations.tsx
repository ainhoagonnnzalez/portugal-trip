import type { RecommendationGroup } from "@/lib/day-recommendations";
import { RecommendationCard } from "@/components/guide/recommendation-card";

interface DayRecommendationsProps {
  groups: RecommendationGroup[];
}

export function DayRecommendations({ groups }: DayRecommendationsProps) {
  if (groups.length === 0) return null;

  return (
    <section className="mt-12 md:mt-14">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="border-t border-white/10 pt-10 md:pt-12">
          <h2 className="text-display-date text-white/55">Recomendaciones</h2>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:mt-12">
            {groups.map((group) => (
              <div key={group.id}>
                <h3 className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-white/65">
                  <span aria-hidden>{group.icon} </span>
                  {group.label}
                </h3>

                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <RecommendationCard item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
