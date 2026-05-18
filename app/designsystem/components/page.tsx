import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Components — Design system",
};

const sections = [
  {
    href: "/designsystem/components/buttons",
    title: "Buttons",
    description: "Sized variants, icon buttons, CTA links, and state matrix.",
  },
  {
    href: "/designsystem/components/inputs",
    title: "Inputs",
    description: "Text, date, search, textarea, checkbox, radio, and select fields.",
  },
  {
    href: "/designsystem/components/badges-and-tags",
    title: "Badges & tags",
    description: "Badge atom and avatar patterns for compact labels.",
  },
  {
    href: "/designsystem/components/feedback",
    title: "Feedback",
    description: "Dialogs, in-page alerts, and transient toast notifications.",
  },
  {
    href: "/designsystem/components/navigation",
    title: "Navigation",
    description: "Tabbed navigation and breadcrumbs for page and section context.",
  },
  {
    href: "/designsystem/components/styles",
    title: "Styles",
    description: "Border treatments, dashed rules, and elevation shadows.",
  },
  {
    href: "/designsystem/components/cards",
    title: "Cards",
    description: "Surface, radius, and padding patterns for content regions.",
  },
  {
    href: "/designsystem/components/tables-and-rows",
    title: "Tables & rows",
    description: "Column headers, row dividers, cell variants, and dense layouts.",
  },
  {
    href: "/designsystem/components/iconography",
    title: "Iconography",
    description: "Lucide outline icons, stroke rules, and size scale used in UI.",
  },
] as const;

export default function DesignSystemComponentsHubPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Components</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-muted">
        Browse UI building blocks by category. Each page mirrors production tokens and typography from the
        Tailwind theme and semantic color layer.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sections.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block rounded-lg border border-border bg-surface p-5 shadow-sm transition-colors hover:border-border-focus hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="text-body-small-bold text-foreground-title">{s.title}</span>
              <span className="mt-1 block text-body-small text-foreground-muted">{s.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
