import { Avatar, AvatarFallback, AvatarImage, Badge, DataTable, DataTableCell, DataTableHeaderCell, DataTableRow } from "@/components/ui";
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
          <DataTable className="min-w-[480px]">
            <thead>
              <tr className="border-b border-border">
                <DataTableHeaderCell>Token</DataTableHeaderCell>
                <DataTableHeaderCell>Role</DataTableHeaderCell>
                <DataTableHeaderCell>Example</DataTableHeaderCell>
              </tr>
            </thead>
            <tbody>
              <DataTableRow>
                <DataTableCell className="font-bold">border-border</DataTableCell>
                <DataTableCell>Default chrome dividers</DataTableCell>
                <DataTableCell className="text-foreground-muted">Tables, cards</DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell className="font-bold">border-border-input</DataTableCell>
                <DataTableCell>Controls at rest</DataTableCell>
                <DataTableCell className="text-foreground-muted">Inputs, triggers</DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell className="font-bold">surface-muted</DataTableCell>
                <DataTableCell>Secondary panels</DataTableCell>
                <DataTableCell className="text-foreground-muted">Cards, muted bands</DataTableCell>
              </DataTableRow>
            </tbody>
          </DataTable>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Cell variants</h2>
        <p className="mt-1 text-body-small text-foreground-muted">
          Common cell treatments: default left text, avatar with label, Badge atom, muted timestamps, a compact{" "}
          <code className="text-body-extra-small">text-right tabular-nums</code> revenue column, and a trailing{" "}
          <code className="text-body-extra-small">IconButton</code> (ellipsis) for row actions.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className={headerCellClass}>Name</th>
                <th className={headerCellClass}>Owner avatar</th>
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
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/64?img=47" alt="Jamie Chen" />
                      <AvatarFallback className="text-body-extra-small-bold">JC</AvatarFallback>
                    </Avatar>
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
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/64?img=32" alt="Alex Rivera" />
                      <AvatarFallback className="text-body-extra-small-bold">AR</AvatarFallback>
                    </Avatar>
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
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/64?img=12" alt="Morgan Lee" />
                      <AvatarFallback className="text-body-extra-small-bold">ML</AvatarFallback>
                    </Avatar>
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
