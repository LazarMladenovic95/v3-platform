"use client";

// DialogWindow composite — centered modal surface for confirmations and focused tasks.
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AlertCircle, CheckCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconButton } from "../atoms/button/IconButton";

const DialogWindow = DialogPrimitive.Root;

const DialogWindowTrigger = DialogPrimitive.Trigger;

const DialogWindowClose = DialogPrimitive.Close;

export type DialogWindowVariant = "neutral" | "destructive" | "success";

export interface DialogWindowContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  variant?: DialogWindowVariant;
}

const DialogWindowContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogWindowContentProps
>(({ title, description, footer, variant = "neutral", className, children, ...props }, ref) => {
  const isDestructive = variant === "destructive";
  const isSuccess = variant === "success";

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground-body/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-32px)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-surface p-5 text-foreground-body shadow-md outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          className,
        )}
        {...props}
      >
        <div className="flex gap-3">
          {isDestructive && (
            <AlertCircle
              className="mt-1 h-5 w-5 shrink-0 text-foreground-title"
              strokeWidth={2}
              aria-hidden
            />
          )}
          {isSuccess && (
            <CheckCircle
              className="mt-1 h-5 w-5 shrink-0 text-success"
              strokeWidth={2}
              aria-hidden
            />
          )}
          <div className="min-w-0 flex-1">
            <DialogPrimitive.Title className="text-title-3 text-foreground-title">
              {title}
            </DialogPrimitive.Title>
            {description && (
              <DialogPrimitive.Description className="mt-2 text-body-small text-foreground-muted">
                {description}
              </DialogPrimitive.Description>
            )}
            {children && <div className="mt-4">{children}</div>}
          </div>
        </div>

        {footer && (
          <div className="mt-6 flex justify-end gap-2">
            {footer}
          </div>
        )}

        <DialogPrimitive.Close asChild>
          <IconButton
            type="button"
            variant="ghost"
            size="small"
            aria-label="Close dialog"
            icon={<X className="h-4 w-4" aria-hidden />}
            className="absolute right-3 top-3 text-foreground-muted hover:bg-transparent hover:text-foreground-title active:text-foreground-title"
          />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

DialogWindowContent.displayName = DialogPrimitive.Content.displayName;

export { DialogWindow, DialogWindowTrigger, DialogWindowClose, DialogWindowContent };
