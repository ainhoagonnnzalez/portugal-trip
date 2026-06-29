import { GuideMap } from "@/components/map/guide-map";
import { PageContainer } from "@/components/ui/page-container";
import { getAllMapLocations } from "@/data/map-locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa",
};

export default function MapaPage() {
  const locations = getAllMapLocations();

  return (
    <>
      <header className="bg-navy pb-10 pt-24 md:pb-14 md:pt-28">
        <PageContainer>
          <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Mapa
          </h1>
        </PageContainer>
      </header>

      <PageContainer className="py-10 md:py-14">
        <GuideMap locations={locations} />
      </PageContainer>
    </>
  );
}
