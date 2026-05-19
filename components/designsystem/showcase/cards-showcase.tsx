import Image from "next/image";
import Link from "next/link";
import { Eye, Info, PackageCheck, Settings, ShoppingBag, Star } from "lucide-react";
import { Badge, Card, CardContent, CardDescription, CardTitle, CheckboxField } from "@/components/ui";

export function CardsShowcase() {
  return (
    <div className="grid gap-8">
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardTitle>Raised surface</CardTitle>
          <CardDescription>
            Default content container: <code className="text-body-extra-small">rounded-lg</code>,{" "}
            <code className="text-body-extra-small">border-border</code>,{" "}
            <code className="text-body-extra-small">bg-surface</code>, comfortable padding, optional{" "}
            <code className="text-body-extra-small">shadow-sm</code>.
          </CardDescription>
        </Card>

        <Card surface="background">
          <CardTitle>Muted panel</CardTitle>
          <CardDescription className="text-foreground-body">
            Muted band using <code className="text-body-extra-small">bg-background</code> with the same
            radius and border treatment as raised surfaces.
          </CardDescription>
        </Card>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">Common card types</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Frequently reused content structures built from existing atoms and semantic tokens.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
                <ShoppingBag className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-body-regular-bold text-foreground-title">Icon + text</h3>
                <p className="mt-1 text-body-small text-foreground-muted">
                  Use for compact feature summaries, metrics, or settings entry points.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <CardTitle>Badge card</CardTitle>
                <CardDescription>
                  Use a Badge atom for status, tier, or review state metadata.
                </CardDescription>
              </div>
              <Badge label="Active" variant="success" />
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
                <Settings className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <CardTitle>Settings card</CardTitle>
                <CardDescription className="mt-1">
                  Group a few related preferences with clear labels and helper text.
                </CardDescription>
                <CardContent className="grid gap-3">
                  <CheckboxField
                    label="Email notifications"
                    hint="Send updates when reviews need attention."
                    defaultChecked
                  />
                  <CheckboxField
                    label="Auto-tag verified products"
                    hint="Apply verified metadata after product matching."
                  />
                </CardContent>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
                <Info className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <CardTitle>Info card</CardTitle>
                <CardDescription className="mt-1">
                  Use for guidance, summaries, or supporting copy that should sit inside a standard card.
                </CardDescription>
                <ul className="mt-4 grid gap-2 text-body-small text-foreground-muted">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                    Keep guidance specific and actionable.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                    Use the same card padding and border treatment as other cards.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card padding="none" className="overflow-hidden">
            <div className="flex min-h-40 items-center justify-center bg-surface-muted p-6">
              <Image
                src="/expeerly_reviewed_MINIMAL.svg"
                alt="Expeerly reviewed symbol"
                width={96}
                height={96}
                className="h-24 w-24"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-body-regular-bold text-foreground-title">Image and text, vertical</h3>
              </div>
              <p className="mt-2 text-body-small text-foreground-muted">
                Stack the image above text for narrow cards, catalog cards, or mobile-first layouts.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge label="4.8 rating" variant="default" iconLeft={<Star className="h-3.5 w-3.5" />} />
                <Badge
                  label="Verified product"
                  variant="success"
                  iconLeft={<PackageCheck className="h-3.5 w-3.5" />}
                />
              </div>
            </div>
          </Card>

          <Card padding="none" className="overflow-hidden md:col-span-2">
            <div className="grid md:grid-cols-[220px_1fr]">
              <div className="flex min-h-44 items-center justify-center bg-surface-muted p-6">
                <Image
                  src="/expeerly_reviewed_MINIMAL.svg"
                  alt="Expeerly reviewed symbol"
                  width={96}
                  height={96}
                  className="h-24 w-24"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-body-regular-bold text-foreground-title">Image and text, horizontal</h3>
                </div>
                <p className="mt-2 max-w-2xl text-body-small text-foreground-muted">
                  Pair a visual region with title, description, and metadata for product, campaign, or
                  review-summary cards.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge label="4.8 rating" variant="default" iconLeft={<Star className="h-3.5 w-3.5" />} />
                  <Badge
                    label="Verified product"
                    variant="success"
                    iconLeft={<PackageCheck className="h-3.5 w-3.5" />}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">Interactive cards</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use an interactive card when the entire surface navigates to one destination. Avoid placing
          separate buttons or nested links inside a clickable card. Use a standard content card when the
          surface itself should not navigate.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link
            href="/designsystem/components"
            className="block rounded-lg border border-border bg-surface p-5 shadow-sm transition-colors hover:border-border-focus hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <h3 className="text-body-regular-bold text-foreground-title">Component overview card</h3>
            <span className="mt-1 block text-body-small text-foreground-muted">
              This is the same clickable card pattern used on the component overview page.
            </span>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">Content cards</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use content cards when the card needs a title and structured supporting content.
        </p>

        <div className="mt-4 grid gap-6">
          <Card>
            <CardTitle>Content card</CardTitle>
            <CardDescription>
              Use a content card for concise editorial content, summaries, or detail blocks that need a
              title and supporting body content.
            </CardDescription>
            <ul className="mt-4 grid gap-3 text-body-small text-foreground-muted">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                Body content can be a short paragraph, a bulleted list, or a small group of related details.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                Keep the content focused and use spacing to separate body copy from metadata or actions.
              </li>
            </ul>
          </Card>

          <Card>
            <CardTitle>Two-column content card</CardTitle>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">Review summary</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  Highlight a primary message, insight, or product recommendation.
                </p>
              </div>
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">Next step</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  Pair the summary with supporting guidance or a secondary detail.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardTitle>Three-column content card</CardTitle>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">Audience</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  Show who the content is for or where it applies.
                </p>
              </div>
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">Status</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  Add a short operational detail or current state.
                </p>
              </div>
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">Outcome</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  Close with the value, result, or action supported by the card.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">Data cards</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Small stat cards show one specific data point with a label, value, and optional trend or icon.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Card padding="small">
            <p className="text-body-extra-small-bold text-foreground-title-subtle">
              Product views
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-title-2 text-foreground-title tabular-nums">89,400</p>
              <Eye className="h-5 w-5 text-secondary" aria-hidden />
            </div>
            <p className="mt-2 text-body-small text-success">21% more than last month</p>
          </Card>

          <Card padding="small">
            <p className="text-body-extra-small-bold text-foreground-title-subtle">
              Average rating
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-title-2 text-foreground-title tabular-nums">4.8</p>
              <Star className="h-5 w-5 text-secondary" aria-hidden />
            </div>
            <p className="mt-2 text-body-small text-foreground-muted">Across verified reviews</p>
          </Card>

          <Card padding="small">
            <p className="text-body-extra-small-bold text-foreground-title-subtle">
              Orders shipped
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-title-2 text-foreground-title tabular-nums">1,284</p>
              <PackageCheck className="h-5 w-5 text-secondary" aria-hidden />
            </div>
            <p className="mt-2 text-body-small text-success">96% on time</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
