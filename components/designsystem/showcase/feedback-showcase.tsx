"use client";

import {
  DestructiveRed,
  DialogWindow,
  DialogWindowClose,
  DialogWindowContent,
  DialogWindowTrigger,
  GhostNeutral,
  InPageAlert,
  InfoBox,
  OutlinePrimary,
  PrimaryPink,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/composites/Popover";
import { ToastPlayground } from "./toast-playground";

export function FeedbackShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
        <h2 className="text-title-2 text-foreground-title">Dialog windows</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Centered modal windows for neutral confirmations and destructive decisions.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <DialogWindow>
            <DialogWindowTrigger asChild>
              <OutlinePrimary size="small">Neutral dialog</OutlinePrimary>
            </DialogWindowTrigger>
            <DialogWindowContent
              title="Confirm changes"
              description="Review the details before applying this update."
              footer={
                <>
                  <DialogWindowClose asChild>
                    <GhostNeutral size="medium">Cancel</GhostNeutral>
                  </DialogWindowClose>
                  <DialogWindowClose asChild>
                    <PrimaryPink size="medium">Confirm</PrimaryPink>
                  </DialogWindowClose>
                </>
              }
            />
          </DialogWindow>

          <DialogWindow>
            <DialogWindowTrigger asChild>
              <OutlinePrimary size="small">Destructive dialog</OutlinePrimary>
            </DialogWindowTrigger>
            <DialogWindowContent
              variant="destructive"
              title="Delete this item?"
              description="This action cannot be undone. The item and related history will be permanently removed."
              footer={
                <>
                  <DialogWindowClose asChild>
                    <GhostNeutral size="medium">Cancel</GhostNeutral>
                  </DialogWindowClose>
                  <DialogWindowClose asChild>
                    <DestructiveRed size="medium">Delete</DestructiveRed>
                  </DialogWindowClose>
                </>
              }
            />
          </DialogWindow>
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

      <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
        <h2 className="text-title-2 text-foreground-title">Suggest we remove these</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Older feedback patterns under review while alerts, dialogs, and toasts become the primary set.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-title-2 text-foreground-title">Popover</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Contextual overlays; default, success, and error surface tokens.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <OutlinePrimary size="small">Default</OutlinePrimary>
                </PopoverTrigger>
                <PopoverContent align="start">
                  <p className="text-body-small-bold">Default Popover</p>
                  <p className="mt-1 text-body-small text-foreground-muted">
                    Example contextual content for the design system.
                  </p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <OutlinePrimary size="small">Success</OutlinePrimary>
                </PopoverTrigger>
                <PopoverContent align="start" variant="success">
                  <p className="text-body-small-bold">Success Popover</p>
                  <p className="mt-1 text-body-small text-foreground-body">
                    Utility success styling with green tokens.
                  </p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <OutlinePrimary size="small">Error</OutlinePrimary>
                </PopoverTrigger>
                <PopoverContent align="start" variant="error">
                  <p className="text-body-small-bold">Error Popover</p>
                  <p className="mt-1 text-body-small text-foreground-body">
                    Utility error styling with red tokens.
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-title-2 text-foreground-title">InfoBox</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Bordered composite for guidelines, summaries, and structured supporting copy.
            </p>
            <div className="mt-3">
              <InfoBox
                header="Review Guidelines"
                points={[
                  "Keep feedback specific and constructive.",
                  "Use clear language and actionable advice.",
                  "Highlight both strengths and improvements.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
