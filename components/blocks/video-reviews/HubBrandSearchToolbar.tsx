"use client";

import { BrandSearchField } from "@/components/blocks/video-reviews/BrandSearchField";
import { SelectField, SelectItem } from "@/components/ui";
import type { BrandFixture, BrandSortOption } from "@/lib/fixtures/video-reviews";
import { t } from "@/lib/i18n";

export type HubBrandSearchToolbarProps = {
  topBrands: BrandFixture[];
  allBrands: BrandFixture[];
  sort: BrandSortOption;
  onSortChange: (sort: BrandSortOption) => void;
};

export function HubBrandSearchToolbar({
  topBrands,
  allBrands,
  sort,
  onSortChange,
}: HubBrandSearchToolbarProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end">
      <div className="min-w-0 flex-1">
        <BrandSearchField topBrands={topBrands} allBrands={allBrands} />
      </div>

      <div className="w-full shrink-0 sm:w-48">
        <SelectField
          label={t("player.hub.brandSortLabel")}
          hideLabel
          value={sort}
          onValueChange={(value) => onSortChange(value as BrandSortOption)}
        >
          <SelectItem value="most-reviewed">
            {t("player.hub.brandSortMostReviewed")}
          </SelectItem>
          <SelectItem value="top-rated">{t("player.hub.brandSortTopRated")}</SelectItem>
          <SelectItem value="newest">{t("player.hub.brandSortNewest")}</SelectItem>
        </SelectField>
      </div>
    </div>
  );
}
