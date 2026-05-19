import { AlertCircle, Check, Info, TriangleAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage, Badge, Tag } from "@/components/ui";

export function BadgesShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-4 md:col-span-2">
        <h2 className="text-title-2 text-foreground-title">Usage guidance</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use badges for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Status, category, tier, or metadata that is not directly editable in place.
            </p>
          </div>
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use tags for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Removable labels, applied filters, and user-managed metadata that needs a clear remove action.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4">
        <h2 className="text-title-2 text-foreground-title">Avatar</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Image and fallback variants of the avatar atom.
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/avatar4.png" alt="Expeerly avatar" />
            <AvatarFallback>EX</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-4">
          <p className="text-body-extra-small text-foreground-muted">Avatar group</p>
          <div className="mt-2">
            <AvatarGroup
              items={[
                { src: "/avatar4.png", alt: "Expeerly avatar", fallback: "EX" },
                { fallback: "DS", alt: "Design system avatar" },
                { fallback: "AS", alt: "Allison avatar" },
                { fallback: "VP", alt: "V3 platform avatar" },
              ]}
              max={3}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4">
        <h2 className="text-title-2 text-foreground-title">Badges</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Compact status labels; optional leading icon.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge label="Default" variant="default" />
          <Badge label="Subtle" variant="subtle" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
          <Badge label="Destructive" variant="destructive" />
          <Badge label="Info / Draft" variant="info" />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge label="Default" variant="default" iconLeft={<Check className="h-3.5 w-3.5" />} />
          <Badge label="Subtle" variant="subtle" iconLeft={<Check className="h-3.5 w-3.5" />} />
          <Badge label="Success" variant="success" iconLeft={<Check className="h-3.5 w-3.5" />} />
          <Badge label="Warning" variant="warning" iconLeft={<TriangleAlert className="h-3.5 w-3.5" />} />
          <Badge label="Destructive" variant="destructive" iconLeft={<AlertCircle className="h-3.5 w-3.5" />} />
          <Badge label="Info / Draft" variant="info" iconLeft={<Info className="h-3.5 w-3.5" />} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4">
        <h2 className="text-title-2 text-foreground-title">Tags</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Removable labels based on the default badge treatment.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Tag label="Research" />
          <Tag label="Customer quote" />
          <Tag label="Needs review" />
        </div>
      </div>
    </div>
  );
}
