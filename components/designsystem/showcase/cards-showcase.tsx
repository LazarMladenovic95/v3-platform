export function CardsShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-body-regular-bold text-foreground-title">Raised surface</h2>
        <p className="mt-2 text-body-small text-foreground-muted">
          Default content container: <code className="text-body-extra-small">rounded-lg</code>,{" "}
          <code className="text-body-extra-small">border-border</code>,{" "}
          <code className="text-body-extra-small">bg-surface</code>, comfortable padding, optional{" "}
          <code className="text-body-extra-small">shadow-sm</code>.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-surface-muted p-5">
        <h2 className="text-body-regular-bold text-foreground-title">Muted panel</h2>
        <p className="mt-2 text-body-small text-foreground-body">
          Muted band using <code className="text-body-extra-small">bg-surface-muted</code> with the same
          radius and border treatment as raised surfaces.
        </p>
      </div>
    </div>
  );
}
