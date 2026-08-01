"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WidgetProps {
  title: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Widget({ title, href, children, className }: WidgetProps) {
  const content = (
    <div
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-all hover:border-border-strong",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        {href && (
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
