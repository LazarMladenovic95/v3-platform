export function StylesShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-4">
        <h2 className="text-title-2 text-foreground-title">Borders</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Tailwind <code className="text-body-extra-small">border-solid</code> and{" "}
          <code className="text-body-extra-small">border-dashed</code> with the{" "}
          <code className="text-body-extra-small">border-border</code> token.
        </p>
        <div className="mt-3 grid gap-3">
          <div className="rounded-lg border border-solid border-border p-3 text-body-small text-foreground-muted">
            Solid · <code className="text-body-extra-small">border border-border</code>
          </div>
          <div className="rounded-lg border border-dashed border-border p-3 text-body-small text-foreground-muted">
            Dashed · <code className="text-body-extra-small">border border-dashed border-border</code>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4">
        <h2 className="text-title-2 text-foreground-title">Elevation</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Common shadow utilities paired with <code className="text-body-extra-small">rounded-lg</code> and
          surface background.
        </p>
        <div className="mt-3 grid gap-4">
          <div className="rounded-lg border border-border bg-surface p-4 text-body-small text-foreground-muted shadow-sm">
            <code className="text-body-extra-small">shadow-sm</code>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4 text-body-small text-foreground-muted shadow-md">
            <code className="text-body-extra-small">shadow-md</code>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4 text-body-small text-foreground-muted shadow-lg">
            <code className="text-body-extra-small">shadow-lg</code>
          </div>
        </div>
      </div>
    </div>
  );
}
