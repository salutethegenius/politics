export default function GovernmentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Government
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Cabinet</h2>
          <p className="mt-2 text-xs text-muted-foreground">
            Top-level ministers and portfolios.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Ministries</h2>
          <p className="mt-2 text-xs text-muted-foreground">
            Mission, priorities, pain points, contacts, projects.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Local Government</h2>
          <p className="mt-2 text-xs text-muted-foreground">
            District councils, town committees, and election results.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5">
        <h2 className="text-sm font-medium text-foreground">Ministry for Grand Bahama</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Hon. Ginger Maria Moxey, M.P. Portfolio includes community engagement,
          employment, entrepreneurial opportunities, and revitalization of Grand
          Bahama. No public data dashboard currently exists for the Ministry.
        </p>
      </div>
    </div>
  );
}
