import type { LucideIcon } from "lucide-react";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Barcode,
  Check,
  ChevronDown,
  CreditCard,
  Facebook,
  Gift,
  Github,
  Heart,
  Info,
  Instagram,
  Linkedin,
  MessageSquare,
  Minus,
  Package,
  PackageCheck,
  PackageOpen,
  Pencil,
  Plus,
  Receipt,
  ScanBarcode,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  Store,
  Tag,
  Tags,
  ThumbsUp,
  Truck,
  Twitch,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { tableBodyRowClass } from "./button-matrix";

/** Round caps/joins; stroke scales up slightly on small pixels so outlines stay legible. */
const outlineCaps = {
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function strokeWidthForSize(px: 12 | 14 | 16 | 20 | 24): number {
  switch (px) {
    case 12:
      return 2.5;
    case 14:
      return 2.25;
    case 16:
    case 20:
    case 24:
      return 2;
    default:
      return 2;
  }
}

function DsLucide({
  icon: Icon,
  sizePx,
  className,
}: {
  icon: LucideIcon;
  sizePx: 12 | 14 | 16 | 20 | 24;
  className?: string;
}) {
  return (
    <Icon
      size={sizePx}
      className={cn("shrink-0 text-foreground-body", className)}
      strokeWidth={strokeWidthForSize(sizePx)}
      {...outlineCaps}
      aria-hidden
    />
  );
}

const sizeRows: {
  label: string;
  px: 12 | 14 | 16 | 20 | 24;
  tailwind: string;
  usage: string;
}[] = [
  {
    label: "Dense",
    px: 12,
    tailwind: "h-3 w-3 · size 12",
    usage: "Checkbox mark, tight controls (see Checkbox atom).",
  },
  {
    label: "Badge",
    px: 14,
    tailwind: "h-3.5 w-3.5 · size 14",
    usage: "Leading icon inside Badge.",
  },
  {
    label: "Default",
    px: 16,
    tailwind: "h-4 w-4 · size 16",
    usage: "Buttons (medium/small), fields, tables, IconButton medium, SearchField.",
  },
  {
    label: "Large control",
    px: 20,
    tailwind: "h-5 w-5 · size 20",
    usage: "Primary row actions, IconButton large, button matrix large column.",
  },
  {
    label: "Display",
    px: 24,
    tailwind: "h-6 w-6 · size 24",
    usage: "Marketing or empty states only — avoid in dense app chrome.",
  },
];

const glyphsInProduct: { name: string; icon: LucideIcon }[] = [
  { name: "Search", icon: Search },
  { name: "ChevronDown", icon: ChevronDown },
  { name: "Plus", icon: Plus },
  { name: "X", icon: X },
  { name: "Check", icon: Check },
  { name: "Minus", icon: Minus },
  { name: "Pencil", icon: Pencil },
  { name: "ArrowRight", icon: ArrowRight },
  { name: "Info", icon: Info },
  { name: "AlertCircle", icon: AlertCircle },
  { name: "User", icon: User },
];

const retailReviewGlyphs: { name: string; icon: LucideIcon }[] = [
  { name: "Store", icon: Store },
  { name: "ShoppingBag", icon: ShoppingBag },
  { name: "ShoppingCart", icon: ShoppingCart },
  { name: "Package", icon: Package },
  { name: "PackageCheck", icon: PackageCheck },
  { name: "PackageOpen", icon: PackageOpen },
  { name: "Truck", icon: Truck },
  { name: "Receipt", icon: Receipt },
  { name: "CreditCard", icon: CreditCard },
  { name: "Gift", icon: Gift },
  { name: "Tag", icon: Tag },
  { name: "Tags", icon: Tags },
  { name: "Barcode", icon: Barcode },
  { name: "ScanBarcode", icon: ScanBarcode },
  { name: "Star", icon: Star },
  { name: "Heart", icon: Heart },
  { name: "ThumbsUp", icon: ThumbsUp },
  { name: "MessageSquare", icon: MessageSquare },
  { name: "BadgeCheck", icon: BadgeCheck },
];

const socialMediaGlyphs: { name: string; icon: LucideIcon }[] = [
  { name: "Instagram", icon: Instagram },
  { name: "Youtube", icon: Youtube },
  { name: "Facebook", icon: Facebook },
  { name: "Linkedin", icon: Linkedin },
  { name: "Twitter", icon: Twitter },
  { name: "Twitch", icon: Twitch },
  { name: "Github", icon: Github },
];

const headerCell =
  "px-3 py-2.5 text-left text-body-small font-bold text-foreground-title-subtle";
const bodyCell = "px-3 py-3 align-middle text-body-small text-foreground-body";

export function IconographyShowcase() {
  return (
    <div className="grid gap-8">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Stroke &amp; caps</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Use <strong className="font-bold text-foreground-body">Lucide</strong> (outline set). Prefer{" "}
          <code className="text-body-extra-small">strokeLinecap=&quot;round&quot;</code>,{" "}
          <code className="text-body-extra-small">strokeLinejoin=&quot;round&quot;</code>, and a{" "}
          <code className="text-body-extra-small">strokeWidth</code> that steps up on smaller sizes (e.g.{" "}
          <code className="text-body-extra-small">2.5</code> at 12px — aligned with the Checkbox atom — down
          to <code className="text-body-extra-small">2</code> at 16px and above) so strokes stay crisp. Icons
          inherit <code className="text-body-extra-small">currentColor</code>; pair with{" "}
          <code className="text-body-extra-small">text-foreground-*</code> tokens.
        </p>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Optical sizes</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Pick a pixel size first, then align the icon box to adjacent text (usually{" "}
          <code className="text-body-extra-small">text-body-small</code> at 16px for inline chrome).
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className={headerCell}>Scale</th>
                <th className={headerCell}>Spec</th>
                <th className={headerCell}>Sample</th>
                <th className={headerCell}>Typical usage</th>
              </tr>
            </thead>
            <tbody>
              {sizeRows.map((row) => (
                <tr key={row.label} className={tableBodyRowClass}>
                  <td className={`${bodyCell} font-bold text-foreground-title`}>{row.label}</td>
                  <td className={`${bodyCell} text-foreground-muted tabular-nums`}>{row.tailwind}</td>
                  <td className={bodyCell}>
                    <span className="inline-flex items-center gap-3">
                      <DsLucide icon={Plus} sizePx={row.px} />
                      <DsLucide icon={Search} sizePx={row.px} className="text-foreground-muted" />
                    </span>
                  </td>
                  <td className={`${bodyCell} text-foreground-muted`}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Glyphs in this codebase</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Same names as <code className="text-body-extra-small">lucide-react</code> imports — all shown at{" "}
          <strong className="font-bold text-foreground-body">16px</strong> with the outline stroke above.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {glyphsInProduct.map(({ name, icon: Glyph }) => (
            <li
              key={name}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface-muted px-3 py-4 text-center"
            >
              <DsLucide icon={Glyph} sizePx={16} />
              <span className="text-body-extra-small text-foreground-muted">{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Retail, shopping &amp; reviews</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Useful Lucide glyphs for product catalogs, shopping flows, fulfillment, purchases, and review
          experiences. Shown at <strong className="font-bold text-foreground-body">16px</strong> with the same
          stroke rules.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {retailReviewGlyphs.map(({ name, icon: Glyph }) => (
            <li
              key={name}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface-muted px-3 py-4 text-center"
            >
              <DsLucide icon={Glyph} sizePx={16} />
              <span className="text-body-extra-small text-foreground-muted">{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Common social media icons</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Lucide includes a limited set of social glyphs. Use these for neutral UI previews; production social
          links should still follow each platform&apos;s current brand asset guidance.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {socialMediaGlyphs.map(({ name, icon: Glyph }) => (
            <li
              key={name}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface-muted px-3 py-4 text-center"
            >
              <DsLucide icon={Glyph} sizePx={16} />
              <span className="text-body-extra-small text-foreground-muted">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
