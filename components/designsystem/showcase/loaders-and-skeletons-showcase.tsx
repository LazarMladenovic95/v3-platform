import { Skeleton, Spinner } from "@/components/ui";

export function LoadersAndSkeletonsShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Loaders</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use loaders when the system is actively working and content is not ready yet.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface-muted p-4">
            <div className="flex items-center gap-3">
              <Spinner className="h-5 w-5 text-secondary" />
              <span className="text-body-small-bold text-foreground-title">Loading data</span>
            </div>
            <p className="mt-2 text-body-small text-foreground-muted">
              Inline loading indicator for short waits.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface-muted p-4">
            <div className="flex min-h-24 items-center justify-center">
              <Spinner className="h-8 w-8 text-secondary" />
            </div>
            <p className="mt-2 text-center text-body-small text-foreground-muted">Centered page loader</p>
          </div>

          <div className="rounded-lg border border-border bg-surface-muted p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-body-small-bold text-foreground-title">Syncing reviews</p>
                <p className="mt-1 text-body-small text-foreground-muted">This may take a moment.</p>
              </div>
              <Spinner className="h-5 w-5 text-secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Skeletons</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Skeletons reserve layout space while content loads and reduce visual jumping.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-4 shadow-sm">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="mt-4 h-4 w-2/3" />
            <Skeleton className="mt-2 h-3 w-full" />
            <Skeleton className="mt-2 h-3 w-5/6" />
          </div>

          <div className="rounded-lg border border-border bg-surface p-4 shadow-sm">
            <div className="grid gap-3">
              {["first", "second", "third"].map((row) => (
                <div key={row} className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="min-w-0 flex-1">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="mt-2 h-3 w-3/4" />
                  </div>
                  <Skeleton className="h-8 w-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
