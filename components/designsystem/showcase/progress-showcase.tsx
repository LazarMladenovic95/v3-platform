import { IndeterminateBar, ProgressBar } from "@/components/ui";

export function ProgressShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Determinate progress</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use determinate progress when the system knows how much work is complete.
        </p>
        <div className="mt-4 grid gap-4">
          <ProgressBar label="Profile completion" value={72} />
          <ProgressBar label="Upload progress" value={38} />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Indeterminate progress</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use indeterminate progress when the system is working but the remaining time is unknown.
        </p>
        <div className="mt-4">
          <IndeterminateBar />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Progress card</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Progress can be embedded inside cards for setup flows, uploads, or sync states.
        </p>
        <div className="mt-4 max-w-md rounded-lg border border-border bg-surface p-4 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-body-regular-bold text-foreground-title">Campaign setup</h3>
              <p className="mt-1 text-body-small text-foreground-muted">
                Complete the remaining steps before launch.
              </p>
            </div>
            <span className="rounded-full bg-surface-active px-2 py-1 text-body-extra-small-bold text-foreground-title">
              3/4
            </span>
          </div>
          <ProgressBar value={75} showValue={false} className="mt-4" />
        </div>
      </section>
    </div>
  );
}
