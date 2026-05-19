import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RightMenuItemProps {
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
  nested?: boolean;
}

export function RightMenuItem({ icon, label, onClick, nested = false }: RightMenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-10 w-full items-center rounded-lg px-2 py-2 text-left text-foreground-body transition-colors hover:bg-surface-hover",
        icon ? "gap-4" : "gap-0",
        nested && "pl-8",
      )}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span className="text-body-small-bold">{label}</span>
    </button>
  );
}
