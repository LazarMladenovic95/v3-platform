import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Components — Design system",
};

const sections = [
  {
    href: "/designsystem/components/accordions",
    title: "Accordions",
    description: "Large and small disclosure panels for progressive detail.",
  },
  {
    href: "/designsystem/components/assets",
    title: "Assets",
    description: "Logo, inverse logo, symbol, and favicon-style brand assets.",
  },
  {
    href: "/designsystem/components/badges-and-tags",
    title: "Badges & tags",
    description: "Badge atom and avatar patterns for compact labels.",
  },
  {
    href: "/designsystem/components/buttons",
    title: "Buttons",
    description: "Sized variants, icon buttons, CTA links, and state matrix.",
  },
  {
    href: "/designsystem/components/cards",
    title: "Cards",
    description: "Surface, radius, and padding patterns for content regions.",
  },
  {
    href: "/designsystem/components/carousels",
    title: "Carousels",
    description: "Swipeable multi-item and compact one-at-a-time content patterns.",
  },
  {
    href: "/designsystem/components/dialog-windows",
    title: "Dialogs and popovers",
    description: "Modal windows and contextual overlays for decisions and supporting content.",
  },
  {
    href: "/designsystem/components/empty-states",
    title: "Empty states",
    description: "Missing-content, no-results, and setup prompts with clear actions.",
  },
  {
    href: "/designsystem/components/feedback",
    title: "Feedback",
    description: "In-page alerts, transient toast notifications, and tooltip help.",
  },
  {
    href: "/designsystem/components/filters-and-sorting",
    title: "Filters & sorting",
    description: "Panels, sort controls, and applied-filter summaries for result sets.",
  },
  {
    href: "/designsystem/components/iconography",
    title: "Iconography",
    description: "Lucide outline icons, stroke rules, and size scale used in UI.",
  },
  {
    href: "/designsystem/components/inputs",
    title: "Inputs",
    description: "Text, date, search, textarea, checkbox, radio, and select fields.",
  },
  {
    href: "/designsystem/components/lists",
    title: "Lists",
    description: "Image-led rows with title, description, and trailing actions.",
  },
  {
    href: "/designsystem/components/loaders-and-skeletons",
    title: "Loaders & skeletons",
    description: "Spinners, loading rows, and placeholder layouts for async states.",
  },
  {
    href: "/designsystem/components/navigation",
    title: "Navigation",
    description: "Tabbed navigation and breadcrumbs for page and section context.",
  },
  {
    href: "/designsystem/components/pagination",
    title: "Pagination",
    description: "Page controls with default, ellipsis, and compact variants.",
  },
  {
    href: "/designsystem/components/progress",
    title: "Progress",
    description: "Determinate and indeterminate indicators for ongoing work.",
  },
  {
    href: "/designsystem/components/tables-and-rows",
    title: "Tables & rows",
    description: "Column headers, row dividers, cell variants, and dense layouts.",
  },
] as const;

export default function DesignSystemComponentsHubPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Components</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
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
