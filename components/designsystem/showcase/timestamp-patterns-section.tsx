import { bodyCellClass, headerCellClass, tableBodyRowClass, variantCellClass } from "./button-matrix";

const timeClass = "text-body-small text-foreground-muted tabular-nums";

/** Reference patterns for absolute and relative timestamps (semantic time + a11y). */
export function TimestampPatternsSection() {
  return (
    <section className="rounded-lg border border-border bg-surface p-5">
      <h2 className="text-title-2 text-foreground-title">Timestamps</h2>
      <p className="mt-1 text-body-small text-foreground-muted">
        Use <code className="text-body-extra-small">&lt;time dateTime=&quot;…&quot;&gt;</code> with an ISO-8601
        instant. Style with <code className="text-body-extra-small">text-body-small</code>,{" "}
        <code className="text-body-extra-small">text-foreground-muted</code>, and{" "}
        <code className="text-body-extra-small">tabular-nums</code> so digits align in tables. For relative
        copy, keep <code className="text-body-extra-small">dateTime</code> accurate and add{" "}
        <code className="text-body-extra-small">aria-label</code> (and optionally{" "}
        <code className="text-body-extra-small">title</code>) with the absolute instant so assistive tech and
        hover tooltips expose the precise moment.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th className={headerCellClass}>Pattern</th>
              <th className={headerCellClass}>Example</th>
              <th className={headerCellClass}>When to use</th>
            </tr>
          </thead>
          <tbody>
            <tr className={tableBodyRowClass}>
              <td className={variantCellClass}>Absolute · long</td>
              <td className={bodyCellClass}>
                <time dateTime="2026-05-14T14:32:00.000Z" className={timeClass}>
                  May 14, 2026, 2:32 PM UTC
                </time>
              </td>
              <td className={`${bodyCellClass} text-foreground-muted`}>
                Detail views, audit trails, or when timezone matters—localize strings in product.
              </td>
            </tr>
            <tr className={tableBodyRowClass}>
              <td className={variantCellClass}>Absolute · compact</td>
              <td className={`${bodyCellClass} text-right`}>
                <time dateTime="2026-05-14T14:32:00.000Z" className={`${timeClass} inline-block`}>
                  2026-05-14 · 14:32
                </time>
              </td>
              <td className={`${bodyCellClass} text-foreground-muted`}>
                Dense tables and lists; right-align when paired with numeric columns.
              </td>
            </tr>
            <tr className={tableBodyRowClass}>
              <td className={variantCellClass}>Relative</td>
              <td className={bodyCellClass}>
                <time
                  dateTime="2026-05-12T09:18:00.000Z"
                  title="May 12, 2026, 9:18 AM UTC"
                  aria-label="Last updated May 12, 2026, at 9:18 AM UTC"
                  className={timeClass}
                >
                  2 days ago
                </time>
              </td>
              <td className={`${bodyCellClass} text-foreground-muted`}>
                Activity feeds; refresh periodically in app code. Never drop <code className="text-body-extra-small">dateTime</code>.
              </td>
            </tr>
            <tr className={tableBodyRowClass}>
              <td className={variantCellClass}>Relative · just now</td>
              <td className={bodyCellClass}>
                <time
                  dateTime="2026-05-14T14:31:00.000Z"
                  title="May 14, 2026, 2:31 PM UTC"
                  aria-label="May 14, 2026, at 2:31 PM UTC"
                  className={timeClass}
                >
                  Just now
                </time>
              </td>
              <td className={`${bodyCellClass} text-foreground-muted`}>
                Same rules; define a small window (e.g. under one minute) for “Just now” in your copy layer.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-body-small text-foreground-muted">
        <li>
          Prefer <strong className="font-bold text-foreground-body">UTC</strong> in <code className="text-body-extra-small">dateTime</code>{" "}
          and convert for display if you show local time.
        </li>
        <li>
          Avoid updating relative strings on every render without throttling—use a sensible interval or event
          boundaries.
        </li>
      </ul>
    </section>
  );
}
