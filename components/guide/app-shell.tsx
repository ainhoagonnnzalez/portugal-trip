"use client";

import { CursorRing } from "@/components/guide/cursor-ring";
import { FabMaps } from "@/components/guide/fab-maps";
import { Footer } from "@/components/guide/footer";
import { Navbar } from "@/components/guide/navbar";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPlan = pathname.startsWith("/plan");

  return (
    <>
      <CursorRing />
      {!isPlan && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
      <FabMaps />
    </>
  );
}
