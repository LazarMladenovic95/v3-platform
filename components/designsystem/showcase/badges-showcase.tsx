import { AlertCircle, Check, Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage, Badge, Tag } from "@/components/ui";

export function BadgesShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
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
          <Badge label="Success" variant="success" />
          <Badge label="Destructive" variant="destructive" />
          <Badge label="Info / Draft" variant="info" />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge label="Default" variant="default" iconLeft={<Check className="h-3.5 w-3.5" />} />
          <Badge label="Success" variant="success" iconLeft={<Check className="h-3.5 w-3.5" />} />
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
