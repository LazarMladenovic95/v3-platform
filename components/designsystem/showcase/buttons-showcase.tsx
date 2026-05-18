import { CtaLinkPink } from "@/components/ui";
import { ButtonSizingMatrix, ButtonStatesTable } from "./button-matrix";

export function ButtonsShowcase() {
  return (
    <section className="rounded-lg border border-border bg-surface p-5">
      <p className="text-body-regular text-foreground-muted">
        Hover and click to see interactive feedback states. All sized variants share the same size scale
        (large / medium / small). Pass <code className="text-body-extra-small">iconLeft</code>,{" "}
        <code className="text-body-extra-small">iconRight</code>,{" "}
        <code className="text-body-extra-small">loading</code>, or{" "}
        <code className="text-body-extra-small">disabled</code> on any of them.
      </p>

      <div className="mt-6">
        <ButtonSizingMatrix />
      </div>

      <div className="mt-8">
        <h3 className="text-body-small-bold text-foreground-title">CTA Link</h3>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <CtaLinkPink size="large">CTA Large</CtaLinkPink>
          <CtaLinkPink size="medium">CTA Medium</CtaLinkPink>
          <CtaLinkPink size="small">CTA Small</CtaLinkPink>
        </div>
      </div>

      <div className="mt-8">
        <ButtonStatesTable />
      </div>
    </section>
  );
}
