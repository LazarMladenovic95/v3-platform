import { Fragment } from "react";
import { ColorTokenSwatch } from "@/components/ui";
import { mainColorTokens, utilityColorTokens } from "@/lib/designsystem-color-data";
import { SEMANTIC_COLOR_TABLE } from "@/lib/semantic-color-tokens";

export function DesignSystemColorTokensSection() {
  return (
    <section className="rounded-lg border border-border bg-surface p-5">
      <h2 className="text-title-2 text-foreground-title">Color tokens</h2>
      <p className="mt-1 text-body-regular text-foreground-muted">
        Semantic tokens are defined in <code className="text-body-extra-small">globals.css</code> and wired in{" "}
        <code className="text-body-extra-small">tailwind.config.mjs</code>. The legacy palette remains below for
        reference.
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[720px] border-collapse text-left text-body-regular text-foreground-body">
          <thead>
            <tr className="border-b border-border bg-surface-muted">
              <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">New token</th>
              <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Old name</th>
              <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Value</th>
              <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Used for</th>
            </tr>
          </thead>
          <tbody>
            {SEMANTIC_COLOR_TABLE.map((section) => (
              <Fragment key={section.category}>
                <tr className="border-b border-border bg-surface-muted">
                  <td
                    colSpan={4}
                    className="px-3 py-2 text-body-small font-bold text-foreground-title uppercase tracking-wide"
                  >
                    {section.category}
                  </td>
                </tr>
                {section.rows.map((row) => (
                  <tr key={`${section.category}-${row.token}`} className="border-b border-border last:border-b-0">
                    <td className="px-3 py-2 align-middle font-mono text-body-small text-foreground-body">
                      {row.token}
                    </td>
                    <td className="px-3 py-2 align-middle text-foreground-muted">{row.oldName}</td>
                    <td className="px-3 py-2 align-middle">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block h-8 w-10 shrink-0 rounded border border-border-input ${row.swatchClass}`}
                          aria-hidden
                        />
                        <code className="text-body-extra-small text-foreground-body">{row.hex}</code>
                      </div>
                    </td>
                    <td className="max-w-md px-3 py-2 align-middle text-foreground-body">{row.usage}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 grid gap-6">
        <div>
          <h3 className="text-body-small-bold text-foreground-title">Legacy — main colors</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mainColorTokens.map((token) => (
              <ColorTokenSwatch key={token.name} name={token.name} bgClass={token.bgClass} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-body-small-bold text-foreground-title">Legacy — utility colors</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {utilityColorTokens.map((token) => (
              <ColorTokenSwatch key={token.name} name={token.name} bgClass={token.bgClass} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
