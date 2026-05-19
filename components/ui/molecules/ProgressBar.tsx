import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type ProgressBarProps = {
  value: number;
  label?: string;
  showValue?: boolean;
  className?: string;
};

export function ProgressBar({ value, label, showValue = true, className }: ProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("grid gap-2", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between gap-3">
          {label && <span className="text-body-small-bold text-foreground-title">{label}</span>}
          {showValue && (
            <span className="text-body-extra-small text-foreground-muted">{clampedValue}%</span>
          )}
        </div>
      )}
      <div
        className="h-2 overflow-hidden rounded-full bg-surface-hover"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clampedValue}
        aria-label={label ?? t("ui.progress.ariaLabel")}
      >
        <div
          className="h-full rounded-full bg-secondary transition-all duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
