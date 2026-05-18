"use client";

import {
  DestructiveRed,
  DialogWindow,
  DialogWindowClose,
  DialogWindowContent,
  DialogWindowTrigger,
  OutlineNeutral,
  OutlinePrimary,
  PrimaryPink,
} from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/composites/Popover";

export function DialogWindowsShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Usage guidance</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use dialogs for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Blocking decisions, confirmations, destructive actions, success confirmations, and focused tasks
              that need explicit completion or dismissal.
            </p>
          </div>
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use popovers for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Lightweight contextual controls or supporting information that should not interrupt the page flow.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Dialogs</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Centered modal windows for neutral confirmations, success states, destructive decisions, and focused
          workflows.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
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
                    <OutlineNeutral size="medium">Cancel</OutlineNeutral>
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
              <OutlinePrimary size="small">Success dialog</OutlinePrimary>
            </DialogWindowTrigger>
            <DialogWindowContent
              variant="success"
              title="Changes saved"
              description="Your updates have been saved successfully."
              footer={
                <DialogWindowClose asChild>
                  <PrimaryPink size="medium">Done</PrimaryPink>
                </DialogWindowClose>
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
                    <OutlineNeutral size="medium">Cancel</OutlineNeutral>
                  </DialogWindowClose>
                  <DialogWindowClose asChild>
                    <DestructiveRed size="medium">Delete</DestructiveRed>
                  </DialogWindowClose>
                </>
              }
            />
          </DialogWindow>

          <DialogWindow>
            <DialogWindowTrigger asChild>
              <OutlinePrimary size="small">Large responsive dialog</OutlinePrimary>
            </DialogWindowTrigger>
            <DialogWindowContent
              title="Review campaign details"
              description="A larger dialog gives longer workflows room to breathe while staying responsive on smaller screens."
              className="max-w-3xl"
              footer={
                <>
                  <DialogWindowClose asChild>
                    <OutlineNeutral size="medium">Cancel</OutlineNeutral>
                  </DialogWindowClose>
                  <DialogWindowClose asChild>
                    <PrimaryPink size="medium">Save changes</PrimaryPink>
                  </DialogWindowClose>
                </>
              }
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface-muted p-4">
                  <h3 className="text-body-small-bold text-foreground-title">Campaign summary</h3>
                  <p className="mt-2 text-body-small text-foreground-muted">
                    Use a large responsive dialog for review steps, content previews, or settings with
                    supporting context.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-surface-muted p-4">
                  <h3 className="text-body-small-bold text-foreground-title">Next action</h3>
                  <p className="mt-2 text-body-small text-foreground-muted">
                    The close button remains available in the top-right corner for every dialog size.
                  </p>
                </div>
              </div>
            </DialogWindowContent>
          </DialogWindow>

          <DialogWindow>
            <DialogWindowTrigger asChild>
              <OutlinePrimary size="small">Custom width modal</OutlinePrimary>
            </DialogWindowTrigger>
            <DialogWindowContent
              title="Small modal"
              description="Use the content className to customize width for compact tasks."
              className="max-w-sm"
              footer={
                <DialogWindowClose asChild>
                  <PrimaryPink size="medium">Done</PrimaryPink>
                </DialogWindowClose>
              }
            />
          </DialogWindow>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Popovers</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Contextual overlays for lightweight supporting content, quick actions, and small controls.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <OutlinePrimary size="small">Default popover</OutlinePrimary>
            </PopoverTrigger>
            <PopoverContent align="start">
              <p className="text-body-small-bold">Default Popover</p>
              <p className="mt-1 text-body-small text-foreground-muted">
                Example contextual content for the design system.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  );
}
