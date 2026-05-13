import { cn } from "@/lib/utils";

const sizeClasses = {
  regular: "h-[44px] px-4 py-[13px] gap-2",
  small: "h-[40px] px-3 py-[11px] gap-2",
} as const;

export type PrimaryPinkSize = keyof typeof sizeClasses;

/** Shared visuals for PrimaryPink and link-styled primary CTAs (avoid `<a><button>` nesting). */
export function primaryPinkClassName(size: PrimaryPinkSize = "regular", className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-lg whitespace-nowrap cursor-pointer",
    sizeClasses[size],
    "text-body-regular-bold",
    "bg-primary text-primary-foreground",
    "hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
    className,
  );
}
