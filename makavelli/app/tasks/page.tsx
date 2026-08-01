"use client";

const columns = ["backlog", "todo", "in_progress", "done"];

const tasks: Record<string, { title: string; priority: number }[]> = {
  backlog: [{ title: "Research Department of Local Government structure", priority: 2 }],
  todo: [{ title: "Compile GB election data", priority: 3 }],
  in_progress: [{ title: "Build dashboard prototype", priority: 4 }],
  done: [{ title: "Update relationship map", priority: 1 }],
};

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Tasks</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <div key={col} className="rounded-2xl border border-border bg-surface p-4">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {col.replace("_", " ")}
            </h2>
            <div className="space-y-3">
              {tasks[col]?.map((t) => (
                <div
                  key={t.title}
                  className="rounded-xl border border-border bg-surface-elevated p-3 text-sm"
                >
                  <p className="font-medium text-foreground">{t.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">P{t.priority}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
