import Image from "next/image";
import Link from "next/link";
import {
  EyeIcon,
  InfoIcon,
  PackageCheckIcon,
  SettingsIcon,
  ShoppingBagIcon,
  StarIcon,
} from "@/components/ui/icons";
import { Badge, Card, CardContent, CardDescription, CardTitle, CheckboxField } from "@/components/ui";
import { t } from "@/lib/i18n";

export function CardsShowcase() {
  return (
    <div className="grid gap-8">
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardTitle>{t("designsystem.showcase.cards.raisedSurfaceTitle")}</CardTitle>
          <CardDescription>
            {t("designsystem.showcase.cards.raisedSurfaceDescription")}
          </CardDescription>
        </Card>

        <Card surface="background">
          <CardTitle>{t("designsystem.showcase.cards.mutedPanelTitle")}</CardTitle>
          <CardDescription className="text-foreground-body">
            {t("designsystem.showcase.cards.mutedPanelDescription")}
          </CardDescription>
        </Card>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">{t("designsystem.showcase.cards.commonTypesTitle")}</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          {t("designsystem.showcase.cards.commonTypesIntro")}
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
                <ShoppingBagIcon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-body-regular-bold text-foreground-title">{t("designsystem.showcase.cards.iconTextTitle")}</h3>
                <p className="mt-1 text-body-small text-foreground-muted">
                  {t("designsystem.showcase.cards.iconTextBody")}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <CardTitle>{t("designsystem.showcase.cards.badgeCardTitle")}</CardTitle>
                <CardDescription>
                  {t("designsystem.showcase.cards.badgeCardBody")}
                </CardDescription>
              </div>
              <Badge label={t("designsystem.showcase.common.active")} variant="success" />
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
                <SettingsIcon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <CardTitle>{t("designsystem.showcase.cards.settingsCardTitle")}</CardTitle>
                <CardDescription className="mt-1">
                  {t("designsystem.showcase.cards.settingsCardBody")}
                </CardDescription>
                <CardContent className="grid gap-3">
                  <CheckboxField
                    label={t("designsystem.showcase.cards.emailNotificationsLabel")}
                    hint={t("designsystem.showcase.cards.emailNotificationsHint")}
                    defaultChecked
                  />
                  <CheckboxField
                    label={t("designsystem.showcase.cards.autoTagLabel")}
                    hint={t("designsystem.showcase.cards.autoTagHint")}
                  />
                </CardContent>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-hover text-foreground-title">
                <InfoIcon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <CardTitle>{t("designsystem.showcase.cards.infoCardTitle")}</CardTitle>
                <CardDescription className="mt-1">
                  {t("designsystem.showcase.cards.infoCardBody")}
                </CardDescription>
                <ul className="mt-4 grid gap-2 text-body-small text-foreground-muted">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                    {t("designsystem.showcase.cards.infoBullet1")}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                    {t("designsystem.showcase.cards.infoBullet2")}
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card padding="none" className="overflow-hidden">
            <div className="flex min-h-40 items-center justify-center bg-surface-muted p-6">
              <Image
                src="/expeerly_reviewed_MINIMAL.svg"
                alt={t("designsystem.showcase.cards.reviewedSymbolAlt")}
                width={96}
                height={96}
                className="h-24 w-24"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-body-regular-bold text-foreground-title">{t("designsystem.showcase.cards.imageTextVerticalTitle")}</h3>
              </div>
              <p className="mt-2 text-body-small text-foreground-muted">
                {t("designsystem.showcase.cards.imageTextVerticalBody")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge label={t("designsystem.showcase.cards.ratingBadge")} variant="default" iconLeft={<StarIcon className="h-3.5 w-3.5" />} />
                <Badge
                  label={t("designsystem.showcase.cards.verifiedProductBadge")}
                  variant="success"
                  iconLeft={<PackageCheckIcon className="h-3.5 w-3.5" />}
                />
              </div>
            </div>
          </Card>

          <Card padding="none" className="overflow-hidden md:col-span-2">
            <div className="grid md:grid-cols-[220px_1fr]">
              <div className="flex min-h-44 items-center justify-center bg-surface-muted p-6">
                <Image
                  src="/expeerly_reviewed_MINIMAL.svg"
                  alt={t("designsystem.showcase.cards.reviewedSymbolAlt")}
                  width={96}
                  height={96}
                  className="h-24 w-24"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-body-regular-bold text-foreground-title">{t("designsystem.showcase.cards.imageTextHorizontalTitle")}</h3>
                </div>
                <p className="mt-2 max-w-2xl text-body-small text-foreground-muted">
                  {t("designsystem.showcase.cards.imageTextHorizontalBody")}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge label={t("designsystem.showcase.cards.ratingBadge")} variant="default" iconLeft={<StarIcon className="h-3.5 w-3.5" />} />
                  <Badge
                    label={t("designsystem.showcase.cards.verifiedProductBadge")}
                    variant="success"
                    iconLeft={<PackageCheckIcon className="h-3.5 w-3.5" />}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">{t("designsystem.showcase.cards.interactiveTitle")}</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          {t("designsystem.showcase.cards.interactiveIntro")}
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link
            href="/designsystem/components"
            className="block rounded-lg border border-border bg-surface p-5 shadow-sm transition-colors hover:border-border-focus hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <h3 className="text-body-regular-bold text-foreground-title">{t("designsystem.showcase.cards.componentOverviewTitle")}</h3>
            <span className="mt-1 block text-body-small text-foreground-muted">
              {t("designsystem.showcase.cards.componentOverviewBody")}
            </span>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">{t("designsystem.showcase.cards.contentCardsTitle")}</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          {t("designsystem.showcase.cards.contentCardsIntro")}
        </p>

        <div className="mt-4 grid gap-6">
          <Card>
            <CardTitle>{t("designsystem.showcase.cards.contentCardTitle")}</CardTitle>
            <CardDescription>
              {t("designsystem.showcase.cards.contentCardBody")}
            </CardDescription>
            <ul className="mt-4 grid gap-3 text-body-small text-foreground-muted">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                {t("designsystem.showcase.cards.contentBullet1")}
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
                {t("designsystem.showcase.cards.contentBullet2")}
              </li>
            </ul>
          </Card>

          <Card>
            <CardTitle>{t("designsystem.showcase.cards.twoColumnTitle")}</CardTitle>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">{t("designsystem.showcase.cards.reviewSummaryLabel")}</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  {t("designsystem.showcase.cards.reviewSummaryBody")}
                </p>
              </div>
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">{t("designsystem.showcase.cards.nextStepLabel")}</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  {t("designsystem.showcase.cards.nextStepBody")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardTitle>{t("designsystem.showcase.cards.threeColumnTitle")}</CardTitle>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">{t("designsystem.showcase.cards.audienceLabel")}</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  {t("designsystem.showcase.cards.audienceBody")}
                </p>
              </div>
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">{t("designsystem.showcase.cards.statusLabel")}</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  {t("designsystem.showcase.cards.statusBody")}
                </p>
              </div>
              <div>
                <p className="text-body-small-bold text-foreground-title-subtle">{t("designsystem.showcase.cards.outcomeLabel")}</p>
                <p className="mt-1 text-body-small text-foreground-muted">
                  {t("designsystem.showcase.cards.outcomeBody")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-title-2 text-foreground-title">{t("designsystem.showcase.cards.dataCardsTitle")}</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          {t("designsystem.showcase.cards.dataCardsIntro")}
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Card padding="small">
            <p className="text-body-extra-small-bold text-foreground-title-subtle">
              {t("designsystem.showcase.cards.productViewsLabel")}
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-title-2 text-foreground-title tabular-nums">89,400</p>
              <EyeIcon className="h-5 w-5 text-secondary" aria-hidden />
            </div>
            <p className="mt-2 text-body-small text-success">{t("designsystem.showcase.cards.productViewsTrend")}</p>
          </Card>

          <Card padding="small">
            <p className="text-body-extra-small-bold text-foreground-title-subtle">
              {t("designsystem.showcase.cards.averageRatingLabel")}
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-title-2 text-foreground-title tabular-nums">4.8</p>
              <StarIcon className="h-5 w-5 text-secondary" aria-hidden />
            </div>
            <p className="mt-2 text-body-small text-foreground-muted">{t("designsystem.showcase.cards.averageRatingCaption")}</p>
          </Card>

          <Card padding="small">
            <p className="text-body-extra-small-bold text-foreground-title-subtle">
              {t("designsystem.showcase.cards.ordersShippedLabel")}
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-title-2 text-foreground-title tabular-nums">1,284</p>
              <PackageCheckIcon className="h-5 w-5 text-secondary" aria-hidden />
            </div>
            <p className="mt-2 text-body-small text-success">{t("designsystem.showcase.cards.ordersShippedTrend")}</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
