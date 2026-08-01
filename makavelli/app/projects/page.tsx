const projects = [
  { name: "Grand Bahama Data Dashboard", vision: "A government-owned data layer for Grand Bahama.", status: "active" },
  { name: "VerityOS Roadmap", vision: "The core strategic operating system for national scale.", status: "planning" },
  { name: "KRM Desk Pilot", vision: "Pilot relationship management inside one ministry.", status: "active" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Projects</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-foreground">{project.name}</h2>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{project.vision}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
