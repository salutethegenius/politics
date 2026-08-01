"use client";

import { Widget } from "./Widget";
import { formatRelativeDate } from "@/lib/utils";

const mission = "Build the Digital Infrastructure Powering The Bahamas.";

const weeklyFocus = [
  { title: "Confirm GB dashboard data scope", due: new Date(Date.now() + 86400000 * 2) },
  { title: "Follow up with Ministry for Grand Bahama", due: new Date(Date.now() + 86400000 * 3) },
  { title: "Draft VerityOS roadmap v2", due: new Date(Date.now() + 86400000 * 5) },
];

const projects = [
  { name: "Grand Bahama Data Dashboard", status: "active" },
  { name: "VerityOS Roadmap", status: "planning" },
  { name: "KRM Desk Pilot", status: "active" },
];

const researchPipeline = [
  { name: "GB open data sources", status: "active" },
  { name: "Banking Sector 2026", status: "complete" },
];

const relationships = [
  { name: "Ministry for Grand Bahama", next: new Date(Date.now() + 86400000 * 4) },
  { name: "GBPA", next: new Date(Date.now() + 86400000 * 14) },
];

const opportunities = [
  { name: "GB dashboard demo", value: "—", status: "discovery" },
  { name: "Local government digitization", value: "—", status: "discovery" },
];

const meetings = [
  { title: "Demo with Ministry for GB", date: new Date(Date.now() + 86400000 * 7) },
  { title: "Follow-up call", date: new Date(Date.now() + 86400000 * 10) },
];

const notes = [
  { title: "Meeting notes: Moxey office", date: new Date(Date.now() - 86400000 * 3) },
  { title: "Research: Hawksbill Creek ruling", date: new Date(Date.now() - 86400000 * 5) },
];

const tasks = [
  { title: "Build dashboard prototype", status: "in_progress" },
  { title: "Compile GB election data", status: "todo" },
  { title: "Update relationship map", status: "done" },
];

export function DashboardGrid() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border bg-surface p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Mission
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          {mission}
        </h1>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Widget title="Weekly Focus" href="/tasks">
          <ul className="space-y-2">
            {weeklyFocus.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.title}</span>
                <span className="text-xs text-muted-foreground">
                  {formatRelativeDate(item.due)}
                </span>
              </li>
            ))}
          </ul>
        </Widget>

        <Widget title="Current Projects" href="/projects">
          <ul className="space-y-2">
            {projects.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.name}</span>
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </Widget>

        <Widget title="Research Pipeline" href="/research">
          <ul className="space-y-2">
            {researchPipeline.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.status}</span>
              </li>
            ))}
          </ul>
        </Widget>

        <Widget title="Relationship Pipeline" href="/relationships">
          <ul className="space-y-2">
            {relationships.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground">
                  {formatRelativeDate(item.next)}
                </span>
              </li>
            ))}
          </ul>
        </Widget>

        <Widget title="Government Opportunities" href="/opportunities">
          <ul className="space-y-2">
            {opportunities.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.status}</span>
              </li>
            ))}
          </ul>
        </Widget>

        <Widget title="Meetings" href="/meetings">
          <ul className="space-y-2">
            {meetings.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.title}</span>
                <span className="text-xs text-muted-foreground">
                  {formatRelativeDate(item.date)}
                </span>
              </li>
            ))}
          </ul>
        </Widget>

        <Widget title="Recent Notes" href="/documents">
          <ul className="space-y-2">
            {notes.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.title}</span>
                <span className="text-xs text-muted-foreground">
                  {formatRelativeDate(item.date)}
                </span>
              </li>
            ))}
          </ul>
        </Widget>

        <Widget title="Tasks" href="/tasks" className="md:col-span-2 xl:col-span-1">
          <div className="grid grid-cols-3 gap-2">
            {tasks.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface-elevated p-2 text-xs"
              >
                <span className="block font-medium text-foreground">{item.title}</span>
                <span className="mt-1 block text-muted-foreground">{item.status}</span>
              </div>
            ))}
          </div>
        </Widget>

        <Widget title="AI Assistant" href="/ai" className="md:col-span-2 xl:col-span-3">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated px-4 py-3">
            <SparklesIcon />
            <span className="text-sm text-muted-foreground">
              Ask anything: “Who should I contact next?” or “Summarize my relationship
              with the Ministry for Grand Bahama.”
            </span>
          </div>
        </Widget>
      </div>
    </div>
  );
}

function SparklesIcon() {
  return (
    <svg
      className="h-5 w-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}
