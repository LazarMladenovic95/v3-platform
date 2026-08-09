"use client";

import { useEffect, useState } from "react";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { Badge } from "@/components/ui/atoms/Badge";
import { Card } from "@/components/ui/composites/Card";
import { StarRating } from "@/components/ui/molecules/video-reviews/StarRating";
import {
  getCommunitySubmissions,
  type CommunitySubmissionDraft,
} from "@/lib/fixtures/reviewer-session";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ReviewerCommunitySubmissionsSection() {
  const [submissions, setSubmissions] = useState<CommunitySubmissionDraft[]>(
    [],
  );

  useEffect(() => {
    setSubmissions(getCommunitySubmissions());
  }, []);

  if (submissions.length === 0) {
    return null;
  }

  return (
    <div className="mt-5">
      <Heading as="h3" variant="title-bold">
        {t("app.reviewerMyReviews.communitySubmitted.statusInReview")}
      </Heading>
      <Card padding="none" className="mt-3 overflow-hidden">
        <ul
          aria-label={t(
            "app.reviewerMyReviews.communitySubmitted.listAriaLabel",
          )}
        >
          {submissions.map((submission, index) => (
            <li
              key={submission.id}
              className={cn(
                "flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between",
                index > 0 && "border-t border-border",
              )}
            >
              <div className="min-w-0">
                <Text
                  variant="body-small"
                  className="text-body-small-bold text-foreground-title"
                >
                  {submission.brandName} · {submission.productName}
                </Text>
                <Text variant="body-extra-small-muted" className="mt-1">
                  {t("app.reviewerMyReviews.communitySubmitted.eanMeta", {
                    ean: submission.ean,
                  })}
                </Text>
                <Text variant="body-extra-small-muted" className="mt-0.5">
                  {t("app.reviewerMyReviews.communitySubmitted.filesMeta", {
                    receipt: submission.receiptFileName,
                    video: submission.videoFileName,
                  })}
                </Text>
                {typeof submission.starRating === "number" &&
                submission.starRating > 0 ? (
                  <div className="mt-2">
                    <StarRating
                      rating={submission.starRating}
                      showScore
                      size="default"
                    />
                  </div>
                ) : null}
              </div>
              <Badge
                label={t(
                  "app.reviewerMyReviews.communitySubmitted.statusInReview",
                )}
                variant="warning"
              />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
