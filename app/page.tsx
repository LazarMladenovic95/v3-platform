import type { Metadata } from "next";
import Link from "next/link";
import { primaryPinkClassName } from "@/components/ui/atoms/button/buttonClasses";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <main className="mx-auto flex flex-1 w-full max-w-[1440px] flex-col items-center justify-center px-6 py-8 text-center md:px-16 lg:px-20">
        <h1 className="text-heading-1 text-foreground-title">{t("app.home.title")}</h1>
        <Link
          href="/bnd/designsystem"
          className={cn(
            primaryPinkClassName("medium"),
            "mt-6 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          {t("app.home.designSystemLink")}
        </Link>
      </main>
    </div>
  );
}
