const researches = [
  {
    name: "Grand Bahama open data",
    problem: "No public dashboard tracks GB investment, employment, or programs outside the Port Area.",
    hypothesis: "A Ministry-owned dashboard can be built from public records in weeks.",
    status: "active",
  },
  {
    name: "Banking Sector 2026",
    problem: "Banking sector data is fragmented and not publicly aggregated.",
    hypothesis: "Structured public records can become a citable sector report.",
    status: "complete",
  },
];

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Research</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {researches.map((r) => (
          <div key={r.name} className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-foreground">{r.name}</h2>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
                {r.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Problem:</span> {r.problem}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Hypothesis:</span> {r.hypothesis}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
