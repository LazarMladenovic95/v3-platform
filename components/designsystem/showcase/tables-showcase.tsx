import { User } from "lucide-react";
import { Badge } from "@/components/ui";
import { ButtonSizingMatrix, bodyCellClass, headerCellClass, tableBodyRowClass, variantCellClass } from "./button-matrix";
import { TimestampPatternsSection } from "./timestamp-patterns-section";
import { TableRowMenuCell } from "./table-row-menu-cell";

const numericHeaderClass = `${headerCellClass} text-right`;
const numericCellClass = `${bodyCellClass} text-right tabular-nums`;
const rowMenuHeaderClass = `${headerCellClass} w-12 text-right`;
const rowMenuCellClass = `${bodyCellClass} text-right align-middle`;

export function TablesShowcase() {
  return (
    <div className="grid gap-8">
      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Dense data table</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Column titles use{" "}
          <code className="text-body-extra-small">text-body-small font-bold text-foreground-title-subtle</code>{" "}
          with no header fill. Body rows use{" "}
          <code className="text-body-extra-small">hover:bg-background</code> and{" "}
          <code className="text-body-extra-small">border-b border-border</code> per row.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className={headerCellClass}>Token</th>
                <th className={headerCellClass}>Role</th>
                <th className={headerCellClass}>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className={tableBodyRowClass}>
                <td className={variantCellClass}>border-border</td>
                <td className={bodyCellClass}>Default chrome dividers</td>
                <td className={`${bodyCellClass} text-foreground-muted`}>Tables, cards</td>
              </tr>
              <tr className={tableBodyRowClass}>
                <td className={variantCellClass}>border-border-input</td>
                <td className={bodyCellClass}>Controls at rest</td>
                <td className={`${bodyCellClass} text-foreground-muted`}>Inputs, triggers</td>
              </tr>
              <tr className={tableBodyRowClass}>
                <td className={variantCellClass}>surface-muted</td>
                <td className={bodyCellClass}>Secondary panels</td>
                <td className={`${bodyCellClass} text-foreground-muted`}>Cards, muted bands</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Cell variants</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Common cell treatments: default left text, icon with label, Badge atom, muted timestamps, a compact{" "}
          <code className="text-body-extra-small">text-right tabular-nums</code> revenue column, and a trailing{" "}
          <code className="text-body-extra-small">IconButton</code> (ellipsis) for row actions.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className={headerCellClass}>Name</th>
                <th className={headerCellClass}>Owner</th>
                <th className={headerCellClass}>Status</th>
                <th className={`${headerCellClass} text-right`}>Updated</th>
                <th className={numericHeaderClass}>Revenue</th>
                <th className={rowMenuHeaderClass} aria-label="Row actions">
                  <span className="sr-only">Row actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={tableBodyRowClass}>
                <td className={variantCellClass}>Enterprise rollout</td>
                <td className={bodyCellClass}>
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4 shrink-0 text-foreground-muted" aria-hidden />
                    <span>Jamie Chen</span>
                  </span>
                </td>
                <td className={bodyCellClass}>
                  <Badge label="Active" variant="success" />
                </td>
                <td className={`${bodyCellClass} text-right`}>
                  <time dateTime="2026-05-14T14:32:00" className="text-body-small text-foreground-muted tabular-nums">
                    2026-05-14 · 14:32
                  </time>
                </td>
                <td className={numericCellClass}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(124_900)}
                </td>
                <td className={rowMenuCellClass}>
                  <span className="inline-flex justify-end">
                    <TableRowMenuCell />
                  </span>
                </td>
              </tr>
              <tr className={tableBodyRowClass}>
                <td className={variantCellClass}>Self-serve onboarding</td>
                <td className={bodyCellClass}>
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4 shrink-0 text-foreground-muted" aria-hidden />
                    <span>Alex Rivera</span>
                  </span>
                </td>
                <td className={bodyCellClass}>
                  <Badge label="Draft" variant="info" />
                </td>
                <td className={`${bodyCellClass} text-right`}>
                  <time dateTime="2026-05-12T09:18:00" className="text-body-small text-foreground-muted tabular-nums">
                    2026-05-12 · 09:18
                  </time>
                </td>
                <td className={numericCellClass}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(42_500)}
                </td>
                <td className={rowMenuCellClass}>
                  <span className="inline-flex justify-end">
                    <TableRowMenuCell />
                  </span>
                </td>
              </tr>
              <tr className={tableBodyRowClass}>
                <td className={variantCellClass}>Partner API access</td>
                <td className={bodyCellClass}>
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4 shrink-0 text-foreground-muted" aria-hidden />
                    <span>Morgan Lee</span>
                  </span>
                </td>
                <td className={bodyCellClass}>
                  <Badge label="Paused" variant="default" />
                </td>
                <td className={`${bodyCellClass} text-right`}>
                  <time dateTime="2026-04-28T23:05:00" className="text-body-small text-foreground-muted tabular-nums">
                    2026-04-28 · 23:05
                  </time>
                </td>
                <td className={numericCellClass}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(8_040)}
                </td>
                <td className={rowMenuCellClass}>
                  <span className="inline-flex justify-end">
                    <TableRowMenuCell />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <TimestampPatternsSection />

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Component matrix (reference)</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Same row and cell pattern as the Buttons page for comparing variants at a glance.
        </p>
        <div className="mt-6">
          <ButtonSizingMatrix />
        </div>
      </div>
    </div>
  );
}
