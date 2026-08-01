export default function RelationshipsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Relationships
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Ginger Maria Moxey</h2>
          <p className="mt-1 text-xs text-muted-foreground">Minister for Grand Bahama</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
              Trust: 7
            </span>
            <span className="rounded-full bg-surface-elevated px-2 py-0.5 text-xs text-muted-foreground">
              Next: 4 days
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Grand Bahama Port Authority</h2>
          <p className="mt-1 text-xs text-muted-foreground">Organization</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
              Trust: 5
            </span>
            <span className="rounded-full bg-surface-elevated px-2 py-0.5 text-xs text-muted-foreground">
              Next: 14 days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
