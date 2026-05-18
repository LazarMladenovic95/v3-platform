"use client";

import { OutlinePrimary, Toaster } from "@/components/ui";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/molecules/feedback/toast";

export function ToastPlayground() {
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <OutlinePrimary
          type="button"
          size="small"
          onClick={() =>
            void toast({
              description: "Your changes were saved successfully.",
              action: (
                <ToastAction altText="Undo save">
                  Undo
                </ToastAction>
              ),
            })
          }
        >
          Default toast
        </OutlinePrimary>
        <OutlinePrimary
          type="button"
          size="small"
          onClick={() =>
            void toast({
              variant: "success",
              description: "Your update is now live.",
              action: (
                <ToastAction altText="Undo publish">
                  Undo
                </ToastAction>
              ),
            })
          }
        >
          Success toast
        </OutlinePrimary>
        <OutlinePrimary
          type="button"
          size="small"
          onClick={() =>
            void toast({
              variant: "destructive",
              description: "Try again or contact support if the issue persists.",
              action: (
                <ToastAction altText="Undo error">
                  Undo
                </ToastAction>
              ),
            })
          }
        >
          Destructive toast
        </OutlinePrimary>
      </div>
    </>
  );
}
