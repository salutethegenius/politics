const opportunities = [
  { name: "GB Data Dashboard", customer: "Ministry for Grand Bahama", status: "discovery", probability: 30, nextAction: "Confirm data scope and demo date" },
  { name: "Local Government Digitization", customer: "Department of Local Government", status: "discovery", probability: 20, nextAction: "Map 33 district data sources" },
];

export default function OpportunitiesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Opportunities
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {opportunities.map((o) => (
          <div key={o.name} className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-foreground">{o.name}</h2>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
                {o.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Customer: {o.customer}</p>
            <p className="mt-2 text-sm text-muted-foreground">Probability: {o.probability}%</p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="text-foreground">Next action:</span> {o.nextAction}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
