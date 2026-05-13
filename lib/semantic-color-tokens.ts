/** Rows for the design system semantic color table (Tailwind classes reference theme in tailwind.config.mjs + globals.css). */
export type SemanticColorRow = {
  token: string;
  oldName: string;
  hex: string;
  usage: string;
  /** Tailwind class to preview fill (must match a configured color). */
  swatchClass: string;
};

export type SemanticColorSection = {
  category: string;
  rows: SemanticColorRow[];
};

export const SEMANTIC_COLOR_TABLE: SemanticColorSection[] = [
  {
    category: "Brand",
    rows: [
      {
        token: "primary",
        oldName: "pink-500",
        hex: "#FA0F9C",
        usage: "Primary buttons, active nav, key CTAs",
        swatchClass: "bg-primary",
      },
      {
        token: "primary-foreground",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text and icons on primary color",
        swatchClass: "bg-primary-foreground",
      },
      {
        token: "primary-hover",
        oldName: "pink-600",
        hex: "#DE1777",
        usage: "Hover and pressed state of primary button",
        swatchClass: "bg-primary-hover",
      },
      {
        token: "primary-active",
        oldName: "pink-700",
        hex: "#C6186B",
        usage: "Pressed / active depth on primary (app extension)",
        swatchClass: "bg-primary-active",
      },
      {
        token: "secondary",
        oldName: "blue-500",
        hex: "#4B49EB",
        usage: "Secondary buttons, tags, supporting UI elements",
        swatchClass: "bg-secondary",
      },
      {
        token: "secondary-foreground",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text and icons on secondary / blue",
        swatchClass: "bg-secondary-foreground",
      },
      {
        token: "accent",
        oldName: "—",
        hex: "#1BB8DE",
        usage: "Highlights, callouts, gradient moments, special badges",
        swatchClass: "bg-accent",
      },
      {
        token: "accent-foreground",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text and icons on accent / teal",
        swatchClass: "bg-accent-foreground",
      },
    ],
  },
  {
    category: "Surfaces",
    rows: [
      {
        token: "background",
        oldName: "navy-100",
        hex: "#EFEDF4",
        usage: "Main app canvas — light purple page background",
        swatchClass: "bg-background",
      },
      {
        token: "surface",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Cards, modals, dropdowns, popovers, input fields",
        swatchClass: "bg-surface",
      },
      {
        token: "surface-hover",
        oldName: "grey-100",
        hex: "#F7F7F7",
        usage: "Tag backgrounds, menu item hover, row hover states",
        swatchClass: "bg-surface-hover",
      },
      {
        token: "disabled",
        oldName: "grey-200",
        hex: "#EBEBEA",
        usage: "Disabled button and input field backgrounds",
        swatchClass: "bg-disabled",
      },
      {
        token: "tooltip",
        oldName: "navy-500",
        hex: "#2C1277",
        usage: "Tooltip background",
        swatchClass: "bg-tooltip",
      },
      {
        token: "tooltip-foreground",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text inside tooltips",
        swatchClass: "bg-tooltip-foreground",
      },
    ],
  },
  {
    category: "Foreground (text)",
    rows: [
      {
        token: "foreground-title",
        oldName: "navy-500",
        hex: "#2C1277",
        usage: "H1, H2, H3 — website and marketing pages",
        swatchClass: "bg-foreground-title",
      },
      {
        token: "foreground-body",
        oldName: "grey-700",
        hex: "#080218",
        usage: "Body copy, default app text, paragraphs",
        swatchClass: "bg-foreground-body",
      },
      {
        token: "foreground-muted",
        oldName: "—",
        hex: "#8D8B94",
        usage: "Captions, metadata, timestamps, helper text",
        swatchClass: "bg-foreground-muted",
      },
      {
        token: "foreground-disabled",
        oldName: "grey-300",
        hex: "#D1D1D4",
        usage: "Disabled labels and text on disabled controls",
        swatchClass: "bg-foreground-disabled",
      },
      {
        token: "foreground-accent",
        oldName: "blue-500",
        hex: "#4B49EB",
        usage: "Inline links, highlighted values, CTA text",
        swatchClass: "bg-foreground-accent",
      },
      {
        token: "foreground-on-dark",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text on navy, pink, or any dark background",
        swatchClass: "bg-foreground-on-dark border border-border-input",
      },
    ],
  },
  {
    category: "Borders",
    rows: [
      {
        token: "border",
        oldName: "grey-200",
        hex: "#EBEBEA",
        usage: "Cards, dividers, section separators",
        swatchClass: "bg-border",
      },
      {
        token: "border-input",
        oldName: "grey-300",
        hex: "#D1D1D4",
        usage: "Input, select, textarea at rest",
        swatchClass: "bg-border-input",
      },
      {
        token: "border-focus",
        oldName: "blue-500",
        hex: "#4B49EB",
        usage: "Focus ring on all interactive elements",
        swatchClass: "bg-border-focus",
      },
      {
        token: "border-error",
        oldName: "red-util-100",
        hex: "#FB3314",
        usage: "Input validation error state",
        swatchClass: "bg-border-error",
      },
    ],
  },
  {
    category: "Semantic states",
    rows: [
      {
        token: "destructive",
        oldName: "—",
        hex: "#FE0B2E",
        usage: "Delete buttons, error backgrounds, danger alerts",
        swatchClass: "bg-destructive",
      },
      {
        token: "destructive-subtle",
        oldName: "—",
        hex: "#FFEEF1",
        usage: "Error message backgrounds, inline validation tints",
        swatchClass: "bg-destructive-subtle",
      },
      {
        token: "destructive-foreground",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text on destructive / red backgrounds",
        swatchClass: "bg-destructive-foreground border border-border-input",
      },
      {
        token: "warning",
        oldName: "yellow-500",
        hex: "#FFC122",
        usage: "Warning banners, pending status, caution states",
        swatchClass: "bg-warning",
      },
      {
        token: "warning-foreground",
        oldName: "—",
        hex: "#2E2E2F",
        usage: "Text on warning / yellow — near black for contrast",
        swatchClass: "bg-warning-foreground",
      },
      {
        token: "success",
        oldName: "—",
        hex: "#2E8B33",
        usage: "Success states, approved campaigns, published",
        swatchClass: "bg-success",
      },
      {
        token: "success-subtle",
        oldName: "—",
        hex: "#E6F4E7",
        usage: "Success message backgrounds, positive tints",
        swatchClass: "bg-success-subtle",
      },
      {
        token: "success-foreground",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text on success / green backgrounds",
        swatchClass: "bg-success-foreground border border-border-input",
      },
      {
        token: "info",
        oldName: "—",
        hex: "#1BBBDE",
        usage: "Informational banners, tips, neutral notifications",
        swatchClass: "bg-info",
      },
      {
        token: "info-subtle",
        oldName: "—",
        hex: "#D6FCFF",
        usage: "Info message backgrounds, notification tints",
        swatchClass: "bg-info-subtle",
      },
      {
        token: "info-foreground",
        oldName: "—",
        hex: "#FFFFFF",
        usage: "Text on info backgrounds",
        swatchClass: "bg-info-foreground border border-border-input",
      },
    ],
  },
];
