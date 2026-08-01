"use client";

import { NavRail } from "./NavRail";
import { TopBar } from "./TopBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <NavRail />
      <div className="flex flex-1 flex-col">
        <TopBar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-7xl animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
}
