import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility — Design system",
};

const guidelines = [
  {
    title: "Keyboard behavior",
    description:
      "Every interactive component must be reachable with Tab, usable with Enter or Space where expected, and dismissible with Escape for temporary overlays.",
  },
  {
    title: "Focus states",
    description:
      "Use the shared focus ring token on all interactive controls. Do not remove focus outlines unless an equivalent visible focus state is present.",
  },
  {
    title: "Contrast expectations",
    description:
      "Normal text should meet at least 4.5:1 contrast. Large text and non-text UI indicators should meet at least 3:1.",
  },
  {
    title: "Disabled states",
    description:
      "Disabled controls should look inactive and must not be the only way to communicate important information. Pair disabled states with helper text when needed.",
  },
  {
    title: "Icon-only controls",
    description:
      "Icon-only buttons require an aria-label that describes the action, such as Close dialog, Previous page, or Open calendar.",
  },
  {
    title: "Motion and loading",
    description:
      "Keep animations short and purposeful. Loading states should preserve layout, announce progress when possible, and avoid blocking unrelated page content.",
  },
] as const;

export default function DesignSystemAccessibilityPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Accessibility</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Accessibility rules for using and extending the design system.
      </p>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Guidelines</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {guidelines.map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-surface p-4 shadow-sm">
              <h3 className="text-body-small-bold text-foreground-title">{item.title}</h3>
              <p className="mt-1 text-body-small text-foreground-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
