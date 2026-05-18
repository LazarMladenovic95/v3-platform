import { cn } from "@/lib/utils";

/**
 * Shared button size table. All sized button atoms in the design system use these three sizes.
 *  - large: 42px, body-regular-bold (16)
 *  - medium: 38px, body-small-bold — matches input / select row height
 *  - small: 32px, body-extra-small-bold (12)
 */
export const buttonSizeClasses = {
  large: "h-[42px] px-5 py-2.5 gap-2 text-body-regular-bold",
  medium: "h-[38px] px-4 gap-2 text-body-small-bold",
  small: "h-[32px] px-4 py-2 gap-1 text-body-extra-small-bold",
} as const;

export type ButtonSize = keyof typeof buttonSizeClasses;

/** Shared visuals for PrimaryPink and link-styled primary CTAs (avoid `<a><button>` nesting). */
export function primaryPinkClassName(size: ButtonSize = "large", className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-lg whitespace-nowrap cursor-pointer",
    buttonSizeClasses[size],
    "bg-primary text-primary-foreground",
    "hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
    className,
  );
}
