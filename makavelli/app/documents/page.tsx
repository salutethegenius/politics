import { formatRelativeDate } from "@/lib/utils";

const documents = [
  { title: "Meeting notes: Moxey office", type: "note", date: new Date(Date.now() - 86400000 * 3) },
  { title: "Research: Hawksbill Creek ruling", type: "report", date: new Date(Date.now() - 86400000 * 5) },
  { title: "GB dashboard one-pager", type: "proposal", date: new Date(Date.now() - 86400000 * 7) },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Documents</h1>

      <div className="space-y-3">
        {documents.map((d) => (
          <div key={d.title} className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-foreground">{d.title}</h2>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
                {d.type}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{formatRelativeDate(d.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
