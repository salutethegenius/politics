export default function MissionPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-surface p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Mission
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Build the Digital Infrastructure Powering The Bahamas.
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Strategic Goals</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Become the trusted digital infrastructure partner for The Bahamas.</li>
            <li>Map every ministry, agency, and decision-maker.</li>
            <li>Turn public data into credible, citable government dashboards.</li>
            <li>Build and deploy Verity-branded products at national scale.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">North Star</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Influence creates national impact. Trust creates influence. Pilots create
            trust. Opportunities create pilots. Meetings create opportunities. Projects
            create meetings. Research creates projects. Products create research.
            Problems create products. Ministries hold problems. People lead ministries.
            Everything connects.
          </p>
        </div>
      </div>
    </div>
  );
}
