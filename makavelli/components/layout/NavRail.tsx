"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  Landmark,
  Users,
  Boxes,
  FlaskConical,
  FolderKanban,
  Calendar,
  TrendingUp,
  FileText,
  CheckSquare,
  Sparkles,
  Settings,
  Hexagon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Mission", href: "/mission", icon: Target },
  { label: "Government", href: "/government", icon: Landmark },
  { label: "Relationships", href: "/relationships", icon: Users },
  { label: "Products", href: "/products", icon: Boxes },
  { label: "Research", href: "/research", icon: FlaskConical },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Meetings", href: "/meetings", icon: Calendar },
  { label: "Opportunities", href: "/opportunities", icon: TrendingUp },
  { label: "Documents", href: "/documents", icon: FileText },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "AI Assistant", href: "/ai", icon: Sparkles },
];

export function NavRail() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col border-r border-border bg-surface px-4 py-5">
      <Link
        href="/dashboard"
        className="flex items-center gap-3 px-3 py-2 text-lg font-semibold tracking-tight"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
          <Hexagon className="h-5 w-5" />
        </div>
        <span>Makavelli</span>
      </Link>

      <nav className="mt-6 flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-accent-soft text-accent-foreground"
                  : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/settings"
        className={cn(
          "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
          pathname === "/settings"
            ? "bg-accent-soft text-accent-foreground"
            : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
        )}
      >
        <Settings className="h-4 w-4" />
        Settings
      </Link>
    </aside>
  );
}
