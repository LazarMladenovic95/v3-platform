import { Blocks, Palette, Sparkles } from "lucide-react";

export default function DesignSystemOverviewPage() {
  return (
    <div className="flex min-h-[calc(100vh-70px-4rem)] flex-col items-center justify-center py-16 text-center">
      <div className="max-w-3xl">
        <h1 className="text-heading-1 text-foreground-title">Design system guide</h1>
        <p className="mt-3 text-body-regular text-foreground-title-subtle">
          Use this guide as the source of truth for building consistent Expeerly interfaces. Start with
          the tokens, then compose UI from the documented atoms, molecules, and composites before adding
          anything new.
        </p>
      </div>

      <section className="mt-8 max-w-4xl rounded-lg border border-border bg-surface p-5 text-left shadow-sm">
        <h2 className="text-body-regular-bold text-foreground-title">How to use this guide</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
              <Palette className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-body-small-bold text-foreground-title">Start with foundations</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Check typography, color, and style tokens before choosing component styles.
            </p>
          </div>
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
              <Blocks className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-body-small-bold text-foreground-title">Use existing components</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Prefer documented atoms, molecules, and composites over one-off UI patterns.
            </p>
          </div>
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-body-small-bold text-foreground-title">Extend intentionally</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Add a new token or component only when a repeated product need is not covered here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
