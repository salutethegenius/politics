export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-foreground">
          Makavelli
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Personal Strategic Operating System
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground outline-none focus:border-border-strong"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-border bg-surface-elevated px-3 py-2 text-sm text-foreground outline-none focus:border-border-strong"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-accent py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Auth integration is wired but not yet connected to a live Supabase project.
        </p>
      </div>
    </div>
  );
}
