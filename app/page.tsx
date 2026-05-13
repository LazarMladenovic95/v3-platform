import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { primaryPinkClassName } from "@/components/ui/atoms/button/primaryPinkClasses";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center px-6 py-8 text-center md:px-16 lg:px-20">
        <Image
          src="/expeerly-logo.svg"
          alt="Expeerly logo"
          width={180}
          height={48}
          priority
          className="h-[48px] w-[180px]"
        />
        <h1 className="mt-6 text-heading-1 text-foreground-title">This is the new expeerly version</h1>
        <Link
          href="/designsystem"
          className={cn(
            primaryPinkClassName("regular"),
            "mt-6 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          Go to Design System
        </Link>
      </main>
    </div>
  );
}
