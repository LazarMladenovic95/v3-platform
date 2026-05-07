// Status pill atom that displays a colored badge for review publication states (published, restricted, draft).
type StatusPillProps = {
  label: string;
  variant: "published" | "restricted" | "draft";
};

const variantStyles: Record<StatusPillProps["variant"], string> = {
  published: "bg-blue-500",
  restricted: "bg-pink-600",
  draft: "bg-blue-500",
};

export function StatusPill({ label, variant }: StatusPillProps) {
  return (
    <span
      className={`text-label text-white rounded-lg px-3 py-1 inline-flex items-center justify-center gap-1 h-8 ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
