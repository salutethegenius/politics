export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Settings</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Integrations</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Supabase: configured</li>
            <li>Neo4j: pending</li>
            <li>OpenAI: pending</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="text-sm font-medium text-foreground">Data</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Export to CSV/JSON</li>
            <li>Import from CSV/JSON</li>
            <li>Sync graph to Neo4j</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
