import { ArrowRight, Info, Pencil, Plus, X } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { DestructiveRed, GhostNeutral, GhostPrimary, IconButton, OutlineDestructive, OutlinePrimary, PrimaryPink } from "@/components/ui";
import type { IconButtonVariant } from "@/components/ui/atoms/button/IconButton";

export type SizedButton = ComponentType<{
  size?: "large" | "medium" | "small";
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}>;

export const SIZED_VARIANTS: { label: string; Component: SizedButton }[] = [
  { label: "Primary", Component: PrimaryPink as unknown as SizedButton },
  { label: "Outline", Component: OutlinePrimary as unknown as SizedButton },
  { label: "Ghost", Component: GhostPrimary as unknown as SizedButton },
  { label: "Ghost neutral", Component: GhostNeutral as unknown as SizedButton },
  { label: "Destructive", Component: DestructiveRed as unknown as SizedButton },
  { label: "Destructive outline", Component: OutlineDestructive as unknown as SizedButton },
];

export const ICON_VARIANTS: {
  variant: IconButtonVariant;
  label: string;
  aria: string;
  iconLarge: ReactNode;
  iconSmall: ReactNode;
}[] = [
  {
    variant: "primary",
    label: "Primary",
    aria: "Add",
    iconLarge: <Plus className="h-5 w-5" />,
    iconSmall: <Plus className="h-4 w-4" />,
  },
  {
    variant: "outline",
    label: "Outline",
    aria: "Edit",
    iconLarge: <Pencil className="h-5 w-5" />,
    iconSmall: <Pencil className="h-4 w-4" />,
  },
  {
    variant: "ghost",
    label: "Ghost",
    aria: "Edit",
    iconLarge: <Pencil className="h-5 w-5" />,
    iconSmall: <Pencil className="h-4 w-4" />,
  },
  {
    variant: "ghost-neutral",
    label: "Ghost neutral",
    aria: "More options",
    iconLarge: <Info className="h-5 w-5" />,
    iconSmall: <Info className="h-4 w-4" />,
  },
  {
    variant: "destructive",
    label: "Destructive",
    aria: "Delete",
    iconLarge: <X className="h-5 w-5" />,
    iconSmall: <X className="h-4 w-4" />,
  },
  {
    variant: "outline-destructive",
    label: "Destructive outline",
    aria: "Delete",
    iconLarge: <X className="h-5 w-5" />,
    iconSmall: <X className="h-4 w-4" />,
  },
];

export const headerCellClass =
  "px-3 py-2.5 text-body-small font-bold text-foreground-title-subtle";
export const variantCellClass =
  "px-3 py-3 align-middle text-body-small-bold text-foreground-body w-44";
export const bodyCellClass = "px-3 py-3 align-middle text-body-small text-foreground-body";

/** Body row chrome for design-system / data tables. */
export const tableBodyRowClass =
  "border-b border-border last:border-b-0 transition-colors hover:bg-background";

function VariantRow({ label, Component }: { label: string; Component: SizedButton }) {
  return (
    <tr className={tableBodyRowClass}>
      <td className={variantCellClass}>{label}</td>
      <td className={bodyCellClass}>
        <Component size="large">{label}</Component>
      </td>
      <td className={bodyCellClass}>
        <Component size="medium">{label}</Component>
      </td>
      <td className={bodyCellClass}>
        <Component size="small">{label}</Component>
      </td>
    </tr>
  );
}

function IconRow({
  variant,
  label,
  aria,
  iconLarge,
  iconSmall,
}: {
  variant: IconButtonVariant;
  label: string;
  aria: string;
  iconLarge: ReactNode;
  iconSmall: ReactNode;
}) {
  return (
    <tr className={tableBodyRowClass}>
      <td className={variantCellClass}>{label}</td>
      <td className={bodyCellClass}>
        <IconButton variant={variant} size="large" icon={iconLarge} aria-label={aria} />
      </td>
      <td className={bodyCellClass}>
        <IconButton variant={variant} size="medium" icon={iconSmall} aria-label={aria} />
      </td>
      <td className={bodyCellClass}>
        <IconButton variant={variant} size="small" icon={iconSmall} aria-label={aria} />
      </td>
    </tr>
  );
}

function WithIconRow({ label, Component }: { label: string; Component: SizedButton }) {
  return (
    <tr className={tableBodyRowClass}>
      <td className={variantCellClass}>{label}</td>
      <td className={bodyCellClass}>
        <Component iconLeft={<Plus className="h-4 w-4" />}>{label}</Component>
      </td>
      <td className={bodyCellClass}>
        <Component iconRight={<ArrowRight className="h-4 w-4" />}>{label}</Component>
      </td>
    </tr>
  );
}

function StatesRow({ label, Component }: { label: string; Component: SizedButton }) {
  return (
    <tr className={tableBodyRowClass}>
      <td className={variantCellClass}>{label}</td>
      <td className={bodyCellClass}>
        <Component>{label}</Component>
      </td>
      <td className={bodyCellClass}>
        <Component disabled>{label}</Component>
      </td>
      <td className={bodyCellClass}>
        <Component loading>{label}</Component>
      </td>
    </tr>
  );
}

/** Matrix tables used on the Buttons page and as a row-pattern reference on Tables & rows. */
export function ButtonSizingMatrix() {
  return (
    <div className="grid gap-8">
      <div>
        <h3 className="text-body-small-bold text-foreground-title">Variants × sizes</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className={`${headerCellClass} w-44`}>Variant</th>
                <th className={headerCellClass}>Large</th>
                <th className={headerCellClass}>Medium</th>
                <th className={headerCellClass}>Small</th>
              </tr>
            </thead>
            <tbody>
              {SIZED_VARIANTS.map((v) => (
                <VariantRow key={v.label} label={v.label} Component={v.Component} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-body-small-bold text-foreground-title">With icons</h3>
        <p className="mt-1 text-body-small text-foreground-muted">
          Any sized variant accepts an optional <code className="text-body-extra-small">iconLeft</code> or{" "}
          <code className="text-body-extra-small">iconRight</code>.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className={`${headerCellClass} w-44`}>Variant</th>
                <th className={headerCellClass}>Icon left</th>
                <th className={headerCellClass}>Icon right</th>
              </tr>
            </thead>
            <tbody>
              {SIZED_VARIANTS.map((v) => (
                <WithIconRow key={v.label} label={v.label} Component={v.Component} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-body-small-bold text-foreground-title">Icon only</h3>
        <p className="mt-1 text-body-small text-foreground-muted">
          Square button, no text label. <code className="text-body-extra-small">aria-label</code> required.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className={`${headerCellClass} w-44`}>Variant</th>
                <th className={headerCellClass}>Large</th>
                <th className={headerCellClass}>Medium</th>
                <th className={headerCellClass}>Small</th>
              </tr>
            </thead>
            <tbody>
              {ICON_VARIANTS.map((v) => (
                <IconRow key={v.label} {...v} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function ButtonStatesTable() {
  return (
    <div>
      <h3 className="text-body-small-bold text-foreground-title">States</h3>
      <p className="mt-1 text-body-small text-foreground-muted">
        Hover state is interactive — mouse over the variants above to see it.
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th className={`${headerCellClass} w-44`}>Variant</th>
              <th className={headerCellClass}>Default</th>
              <th className={headerCellClass}>Disabled</th>
              <th className={headerCellClass}>Loading</th>
            </tr>
          </thead>
          <tbody>
            {SIZED_VARIANTS.map((v) => (
              <StatesRow key={v.label} label={v.label} Component={v.Component} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
