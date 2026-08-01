import { formatDate, formatRelativeDate } from "@/lib/utils";

const meetings = [
  { title: "Demo with Ministry for Grand Bahama", date: new Date(Date.now() + 86400000 * 7), attendees: ["Ginger Moxey"] },
  { title: "Follow-up call", date: new Date(Date.now() + 86400000 * 10), attendees: ["Ministry for GB staff"] },
];

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Meetings</h1>

      <div className="space-y-3">
        {meetings.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-foreground">{m.title}</h2>
              <span className="text-xs text-muted-foreground">
                {formatRelativeDate(m.date)} · {formatDate(m.date)}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Attendees: {m.attendees.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
