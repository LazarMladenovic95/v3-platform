import type { Metadata } from "next";
import { PageCanvas } from "@/components/layout/PageCanvas";
import { LandingScreen } from "@/components/screens";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t("marketing.landing.siteTitle"),
  description: t("marketing.landing.metaDescription"),
};

export default function MarketingLandingPage() {
  return (
    <PageCanvas>
      <LandingScreen />
    </PageCanvas>
  );
}
