import type { Metadata } from "next";
import {
  bodyTokens,
  displayTokens,
  headingTokens,
  titleTokens,
} from "@/lib/designsystem-typography-data";

export const metadata: Metadata = {
  title: "Typography — Design system",
};

export default function DesignSystemTypographyPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Typography</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Type scale uses CSS variables in <code className="text-body-extra-small">globals.css</code> and Tailwind
        utilities in <code className="text-body-extra-small">tailwind.config.mjs</code>. Below{" "}
        <span className="text-foreground-body">&lt;768px</span> and <span className="text-foreground-body">≥768px</span>{" "}
        list size / line-height / weight.
      </p>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Display</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-body-regular text-foreground-body">
            <thead>
              <tr className="border-b border-border bg-surface-muted">
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Token</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">&lt;768px</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">≥768px</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Sample</th>
              </tr>
            </thead>
            <tbody>
              {displayTokens.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0">
                  <td className="px-3 py-3 align-middle font-mono text-body-small">{row.className}</td>
                  <td className="px-3 py-3 align-middle text-foreground-muted">{row.mobile}</td>
                  <td className="px-3 py-3 align-middle text-foreground-muted">{row.desktop}</td>
                  <td className="px-3 py-3 align-middle">
                    <p className={`${row.className} text-foreground-title`}>Display sample</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Headings</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-body-regular text-foreground-body">
            <thead>
              <tr className="border-b border-border bg-surface-muted">
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Token</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">&lt;768px</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">≥768px</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Sample</th>
              </tr>
            </thead>
            <tbody>
              {headingTokens.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0">
                  <td className="px-3 py-3 align-middle font-mono text-body-small">{row.className}</td>
                  <td className="px-3 py-3 align-middle text-foreground-muted">{row.mobile}</td>
                  <td className="px-3 py-3 align-middle text-foreground-muted">{row.desktop}</td>
                  <td className="px-3 py-3 align-middle">
                    <p className={`${row.className} text-foreground-title`}>Heading sample</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Titles</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-body-regular text-foreground-body">
            <thead>
              <tr className="border-b border-border bg-surface-muted">
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Token</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">&lt;768px</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">≥768px</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Sample</th>
              </tr>
            </thead>
            <tbody>
              {titleTokens.map((row) => {
                const mobileSpec = "mobile" in row ? row.mobile : row.values;
                const desktopSpec = "desktop" in row ? row.desktop : row.values;
                return (
                  <tr key={row.label} className="border-b border-border last:border-b-0">
                    <td className="px-3 py-3 align-middle font-mono text-body-small">{row.className}</td>
                    <td className="px-3 py-3 align-middle text-foreground-muted">{mobileSpec}</td>
                    <td className="px-3 py-3 align-middle text-foreground-muted">{desktopSpec}</td>
                    <td className="px-3 py-3 align-middle">
                      <p className={`${row.className} text-foreground-title`}>Title sample</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Body</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-body-regular text-foreground-body">
            <thead>
              <tr className="border-b border-border bg-surface-muted">
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Token</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Size / line / weight</th>
                <th className="px-3 py-2.5 text-body-extra-small font-bold text-foreground-muted">Sample</th>
              </tr>
            </thead>
            <tbody>
              {bodyTokens.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0">
                  <td className="px-3 py-3 align-middle font-mono text-body-small">{row.className}</td>
                  <td className="px-3 py-3 align-middle text-foreground-muted">{row.values}</td>
                  <td className="px-3 py-3 align-middle">
                    <p className={`${row.className} text-foreground-body`}>
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
