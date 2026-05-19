// AvatarGroup composite — overlapping stack of Avatar atoms with optional overflow count.
import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/Avatar";

export type AvatarGroupItem = {
  src?: string;
  alt: string;
  fallback: string;
};

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AvatarGroupItem[];
  max?: number;
  sizeClassName?: string;
}

export function AvatarGroup({
  items,
  max = items.length,
  sizeClassName,
  className,
  "aria-label": ariaLabel = "Avatar group",
  ...props
}: AvatarGroupProps) {
  const visibleItems = items.slice(0, max);
  const overflowCount = Math.max(items.length - visibleItems.length, 0);
  const avatarClassName = cn("h-10 w-10 border-2 border-surface", sizeClassName);

  return (
    <div
      role="list"
      aria-label={ariaLabel}
      className={cn("flex items-center -space-x-2", className)}
      {...props}
    >
      {visibleItems.map((item) => (
        <div key={`${item.alt}-${item.fallback}`} role="listitem">
          <Avatar className={avatarClassName}>
            {item.src && <AvatarImage src={item.src} alt={item.alt} />}
            <AvatarFallback className="text-body-extra-small-bold">{item.fallback}</AvatarFallback>
          </Avatar>
        </div>
      ))}
      {overflowCount > 0 && (
        <div role="listitem">
          <Avatar className={avatarClassName}>
            <AvatarFallback className="text-body-extra-small-bold">+{overflowCount}</AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
}
