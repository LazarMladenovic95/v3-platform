"use client";

import { Accordion } from "@/components/ui";

const largeItems = [
  {
    id: "large-overview",
    title: "What makes this campaign ready to launch?",
    content:
      "Large accordions are useful for FAQ sections, onboarding content, or review flows where each item needs room for supporting copy.",
  },
  {
    id: "large-assets",
    title: "Which assets are required?",
    content:
      "Include product imagery, review guidance, audience details, and any brand requirements before inviting reviewers.",
  },
  {
    id: "large-reporting",
    title: "How will reporting be shared?",
    content:
      "Use the expanded panel for explanatory text, links, or next steps that would be too long for a compact row.",
  },
] as const;

const smallItems = [
  {
    id: "small-filters",
    title: "Filters",
    content: "Compact accordions work well in sidebars and dense settings panels.",
  },
  {
    id: "small-status",
    title: "Status",
    content: "Keep small accordion content short so the layout stays easy to scan.",
  },
] as const;

const extraSmallItems = [
  {
    id: "extra-small-details",
    title: "More details",
    content: "Extra-small accordions are plain text disclosures with no surrounding lines.",
  },
  {
    id: "extra-small-guidance",
    title: "View guidance",
    content: "Use them for compact helper content where a full accordion container would feel too heavy.",
  },
] as const;

export function AccordionsShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Large accordion</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use the large size for content-heavy sections with longer labels and descriptions.
        </p>
        <div className="mt-4">
          <Accordion items={largeItems} defaultOpenId="large-overview" />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Small accordion</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use the small size for filters, settings, and compact supporting panels.
        </p>
        <div className="mt-4 max-w-md">
          <Accordion items={smallItems} size="small" defaultOpenId="small-filters" />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Extra-small accordion</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use the extra-small size for lightweight disclosures without surrounding lines.
        </p>
        <div className="mt-4 max-w-md">
          <Accordion items={extraSmallItems} size="extra-small" defaultOpenId="extra-small-details" />
        </div>
      </section>
    </div>
  );
}
