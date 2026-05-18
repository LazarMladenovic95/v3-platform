import type { Metadata } from "next";
import { FeedbackShowcase } from "@/components/designsystem/showcase/feedback-showcase";

export const metadata: Metadata = {
  title: "Feedback — Design system",
};

export default function DesignSystemFeedbackPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Feedback</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        In-page alerts, toast notifications, and tooltip help for feedback flows.
      </p>
      <div className="mt-6">
        <FeedbackShowcase />
      </div>
    </>
  );
}
