/** Rows for the design system semantic color table (Tailwind classes reference theme in tailwind.config.mjs + globals.css). */
export type SemanticColorRow = {
  token: string;
  legacyName: string;
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
        token: "--color-primary",
        legacyName: "—",
        hex: "#E10E8C",
        usage: "Primary brand action color for solid buttons and high-emphasis CTAs.",
        swatchClass: "bg-primary",
      },
      {
        token: "--color-primary-hover",
        legacyName: "pink-500",
        hex: "#FA0F9C",
        usage: "Hover state for primary text, ghost buttons, and primary action controls.",
        swatchClass: "bg-primary-hover",
      },
      {
        token: "--color-primary-active",
        legacyName: "pink-700",
        hex: "#C6186B",
        usage: "Pressed state for primary and primary-toned interactive controls.",
        swatchClass: "bg-primary-active",
      },
      {
        token: "--color-secondary",
        legacyName: "blue-500",
        hex: "#4B49EB",
        usage: "Secondary brand accent for toast backgrounds, links, hover text, icons, and progress fills.",
        swatchClass: "bg-secondary",
      },
    ],
  },
  {
    category: "Surfaces",
    rows: [
      {
        token: "--color-background",
        legacyName: "—",
        hex: "#FAFAFF",
        usage: "Page canvas behind content and design-system guide screens.",
        swatchClass: "bg-background",
      },
      {
        token: "--color-surface",
        legacyName: "—",
        hex: "#FFFFFF",
        usage: "Default raised UI surface for cards, modals, popovers, fields, tables, and panels.",
        swatchClass: "bg-surface",
      },
      {
        token: "--color-surface-hover",
        legacyName: "—",
        hex: "#F3F3FF",
        usage: "Subtle hover and placeholder surface for rows, upload zones, tags, skeletons, and icon wells.",
        swatchClass: "bg-surface-hover",
      },
      {
        token: "--color-surface-active",
        legacyName: "—",
        hex: "#E8E8FF",
        usage: "Selected or active surface state for menus, pagination, upload icons, and compact status chips.",
        swatchClass: "bg-surface-active",
      },
      {
        token: "--color-surface-muted",
        legacyName: "grey-100",
        hex: "#F7F7F7",
        usage: "Low-emphasis neutral surface for image wells, table headers, and secondary content panels.",
        swatchClass: "bg-surface-muted",
      },
      {
        token: "--color-disabled",
        legacyName: "grey-200",
        hex: "#EBEBEA",
        usage: "Disabled control backgrounds and inactive form surfaces.",
        swatchClass: "bg-disabled",
      },
      {
        token: "--color-tooltip",
        legacyName: "navy-500",
        hex: "#2C1277",
        usage: "Dark informational surface for tooltips and inverse brand asset previews.",
        swatchClass: "bg-tooltip",
      },
    ],
  },
  {
    category: "Foreground and text",
    rows: [
      {
        token: "--color-foreground-title",
        legacyName: "navy-500",
        hex: "#2C1277",
        usage: "Primary heading, selected navigation, important labels, and high-emphasis UI text.",
        swatchClass: "bg-foreground-title",
      },
      {
        token: "--color-foreground-title-subtle",
        legacyName: "—",
        hex: "#6B59A0",
        usage: "Default navigation/menu text, neutral button text, and secondary title-level labels.",
        swatchClass: "bg-foreground-title-subtle",
      },
      {
        token: "--color-foreground-body",
        legacyName: "—",
        hex: "#080218",
        usage: "Default paragraph text and filled form/select values.",
        swatchClass: "bg-foreground-body",
      },
      {
        token: "--color-foreground-muted",
        legacyName: "grey-500",
        hex: "#706F74",
        usage: "Helper text, descriptions, captions, metadata, timestamps, and placeholder-adjacent copy.",
        swatchClass: "bg-foreground-muted",
      },
      {
        token: "--color-foreground-disabled",
        legacyName: "grey-300",
        hex: "#D1D1D4",
        usage: "Text, icons, and labels inside disabled controls.",
        swatchClass: "bg-foreground-disabled",
      },
      {
        token: "--color-foreground-accent",
        legacyName: "blue-500",
        hex: "#4B49EB",
        usage: "Accent text and legacy progress fills; prefer secondary for new brand-blue UI accents.",
        swatchClass: "bg-foreground-accent",
      },
      {
        token: "--color-foreground-on-dark",
        legacyName: "—",
        hex: "#FFFFFF",
        usage: "Text and icons on dark or saturated surfaces, including primary, secondary, tooltip, destructive, success, and info.",
        swatchClass: "bg-foreground-on-dark border border-border-input",
      },
    ],
  },
  {
    category: "Borders",
    rows: [
      {
        token: "--color-border",
        legacyName: "—",
        hex: "#DFDFFF",
        usage: "Default borders for cards, panels, tables, dividers, and neutral outline buttons.",
        swatchClass: "bg-border",
      },
      {
        token: "--color-border-input",
        legacyName: "grey-300",
        hex: "#D1D1D4",
        usage: "Resting border for text inputs, selects, textareas, checkboxes, and radio controls.",
        swatchClass: "bg-border-input",
      },
      {
        token: "--color-border-focus",
        legacyName: "blue-500",
        hex: "#4B49EB",
        usage: "Focus rings, highlighted field borders, and focused/hovered neutral outline borders.",
        swatchClass: "bg-border-focus",
      },
      {
        token: "--color-border-error",
        legacyName: "—",
        hex: "#F0294D",
        usage: "Validation error borders on fields and controls.",
        swatchClass: "bg-border-error",
      },
    ],
  },
  {
    category: "Status and intent",
    rows: [
      {
        token: "--color-destructive",
        legacyName: "—",
        hex: "#D5223F",
        usage: "Destructive actions, delete buttons, error text, and danger-state icons.",
        swatchClass: "bg-destructive",
      },
      {
        token: "--color-destructive-hover",
        legacyName: "—",
        hex: "#F0294D",
        usage: "Hover state for solid destructive controls.",
        swatchClass: "bg-destructive-hover",
      },
      {
        token: "--color-destructive-active",
        legacyName: "—",
        hex: "#BA1C36",
        usage: "Pressed and outline-hover state for destructive controls.",
        swatchClass: "bg-destructive-active",
      },
      {
        token: "--color-destructive-subtle",
        legacyName: "—",
        hex: "#FFEEF1",
        usage: "Subtle destructive backgrounds for validation fields, badges, and danger alerts.",
        swatchClass: "bg-destructive-subtle",
      },
      {
        token: "--color-warning",
        legacyName: "yellow-500",
        hex: "#FFC122",
        usage: "Warning accent color for caution states and pending indicators.",
        swatchClass: "bg-warning",
      },
      {
        token: "--color-warning-subtle",
        legacyName: "—",
        hex: "#FFF8E6",
        usage: "Subtle warning backgrounds for warning alerts and badges.",
        swatchClass: "bg-warning-subtle",
      },
      {
        token: "--color-warning-foreground",
        legacyName: "—",
        hex: "#2E2E2F",
        usage: "Readable text and icons on yellow warning surfaces.",
        swatchClass: "bg-warning-foreground",
      },
      {
        token: "--color-success",
        legacyName: "—",
        hex: "#2E8B33",
        usage: "Success text, icons, positive trends, and confirmation states.",
        swatchClass: "bg-success",
      },
      {
        token: "--color-success-subtle",
        legacyName: "—",
        hex: "#E6F4E7",
        usage: "Subtle success backgrounds for alerts, badges, and positive status surfaces.",
        swatchClass: "bg-success-subtle",
      },
      {
        token: "--color-info",
        legacyName: "—",
        hex: "#127A90",
        usage: "Informational accent color for tips, notices, and neutral status icons.",
        swatchClass: "bg-info",
      },
      {
        token: "--color-info-subtle",
        legacyName: "—",
        hex: "#D6FCFF",
        usage: "Subtle info backgrounds for info alerts and badges.",
        swatchClass: "bg-info-subtle",
      },
    ],
  },
];
