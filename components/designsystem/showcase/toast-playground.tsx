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
            })
          }
        >
          Destructive toast
        </OutlinePrimary>
        <OutlinePrimary
          type="button"
          size="small"
          onClick={() =>
            void toast({
              description: "Item archived.",
              action: (
                <ToastAction altText="Undo archive">
                  Undo
                </ToastAction>
              ),
            })
          }
        >
          Toast with action
        </OutlinePrimary>
      </div>
    </>
  );
}
