"use client";

import { useState } from "react";
import { Search, Plus, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-surface/80 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>Digital Infrastructure for The Bahamas</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className={cn(
            "flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-border-strong hover:text-foreground",
            searchOpen && "border-border-strong text-foreground"
          )}
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search anything</span>
          <kbd className="hidden rounded-md border border-border px-1.5 py-0.5 text-xs font-mono sm:inline">
            ⌘K
          </kbd>
        </button>

        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-elevated text-muted-foreground transition-colors hover:text-foreground">
          <Bell className="h-4 w-4" />
        </button>

        <button className="flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New</span>
        </button>

        <div className="ml-1 h-8 w-8 overflow-hidden rounded-full bg-accent-soft">
          <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-accent-foreground">
            KM
          </div>
        </div>
      </div>
    </header>
  );
}
