import { PlanView } from "@/components/guide/plan-view";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Plan del viaje",
};

export default function PlanPage() {
  return (
    <Suspense fallback={null}>
      <PlanView />
    </Suspense>
  );
}
