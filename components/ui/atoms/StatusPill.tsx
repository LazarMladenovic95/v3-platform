// Status pill atom that displays a colored badge for review publication states (published, restricted, draft).
type StatusPillProps = {
  label: string;
  variant: "published" | "restricted" | "draft";
};

const variantStyles: Record<StatusPillProps["variant"], string> = {
  published: "bg-success",
  restricted: "bg-primary",
  draft: "bg-info",
};

export function StatusPill({ label, variant }: StatusPillProps) {
  return (
    <span
      className={`text-body-extra-small text-foreground-on-dark rounded-lg px-3 py-1 inline-flex items-center justify-center gap-1 h-8 ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
