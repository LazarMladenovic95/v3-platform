"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "../atoms/Icon";

export type AccordionSize = "large" | "small" | "extra-small";

export type AccordionItemData = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: readonly AccordionItemData[];
  size?: AccordionSize;
  defaultOpenId?: string;
  className?: string;
};

const accordionSizeClasses: Record<AccordionSize, {
  container: string;
  item: string;
  buttonLayout: string;
  button: string;
  content: string;
  icon: string;
  title: string;
}> = {
  large: {
    container: "overflow-hidden rounded-lg border border-border bg-surface",
    item: "border-t border-border",
    buttonLayout: "flex w-full items-center justify-between gap-4",
    button: "px-5 py-4",
    content: "px-5 pb-5",
    icon: "h-4 w-4",
    title: "text-body-regular-bold",
  },
  small: {
    container: "overflow-hidden rounded-lg border border-border bg-surface",
    item: "border-t border-border",
    buttonLayout: "flex w-full items-center justify-between gap-4",
    button: "px-4 py-3",
    content: "px-4 pb-4",
    icon: "h-4 w-4",
    title: "text-body-small-bold",
  },
  "extra-small": {
    container: "grid gap-2 bg-transparent",
    item: "",
    buttonLayout: "inline-flex items-center gap-3",
    button: "py-1",
    content: "pt-1 pb-2",
    icon: "h-3 w-3",
    title: "text-body-extra-small-bold",
  },
};

export function Accordion({ items, size = "large", defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | undefined>(defaultOpenId);
  const sizeClasses = accordionSizeClasses[size];

  return (
    <div className={cn(sizeClasses.container, className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const buttonId = `${item.id}-trigger`;
        const panelId = `${item.id}-panel`;

        return (
          <div key={item.id} className={cn(index > 0 && sizeClasses.item)}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className={cn(
                  "text-left text-foreground-title transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset",
                  sizeClasses.buttonLayout,
                  sizeClasses.button,
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? undefined : item.id)}
              >
                <span className={sizeClasses.title}>{item.title}</span>
                <Icon
                  name="chevron-down"
                  className={cn(
                    sizeClasses.icon,
                    "shrink-0 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className={cn(sizeClasses.content, "text-body-small text-foreground-muted")}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
