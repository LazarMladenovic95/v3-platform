"use client";

import {
  InPageAlert,
  OutlinePrimary,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { ToastPlayground } from "./toast-playground";

export function FeedbackShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
        <h2 className="text-title-2 text-foreground-title">Usage guidance</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use alerts for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Persistent page-level messages, validation summaries, blocked states, and context that should
              remain visible until resolved.
            </p>
          </div>
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use toasts for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Short confirmation messages after an action. Do not use toasts for critical errors or content
              people must read before continuing.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
        <h2 className="text-title-2 text-foreground-title">In-page alerts</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Page-level messages with default, destructive, and warning styles.
        </p>
        <div className="mt-3 grid gap-3">
          <InPageAlert
            header="Default alert"
            description="Use this for neutral guidance that belongs inline with page content."
            onClose={() => {}}
          />
          <InPageAlert
            variant="destructive"
            header="Destructive alert"
            description="Use this for errors, blocked states, or destructive consequences."
            onClose={() => {}}
          />
          <InPageAlert
            variant="warning"
            header="Warning alert"
            description="Use this for caution states, pending changes, or important pre-submit checks."
            onClose={() => {}}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
        <h2 className="text-title-2 text-foreground-title">Toasts</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Short-lived notifications with default, success, and destructive styles plus optional inline actions.
        </p>
        <div className="mt-4">
          <ToastPlayground />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
        <h2 className="text-title-2 text-foreground-title">Tooltips</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Brief hover/focus help using the tooltip background and foreground color tokens.
        </p>
        <TooltipProvider>
          <div className="mt-3 flex flex-wrap gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <OutlinePrimary size="small">Default tooltip</OutlinePrimary>
              </TooltipTrigger>
              <TooltipContent>
                Use tooltips for short, non-essential helper text.
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <OutlinePrimary size="small">Placement example</OutlinePrimary>
              </TooltipTrigger>
              <TooltipContent side="right">
                Tooltip content uses bg-tooltip and text-tooltip-foreground.
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

    </div>
  );
}
