import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DesignSystemHeader } from "@/components/designsystem/DesignSystemHeader";

export const metadata: Metadata = {
  title: "Design system — Expeerly",
  robots: { index: false, follow: false },
};

export default function DesignSystemLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <DesignSystemHeader />
      <main className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-16 lg:px-20">{children}</main>
    </div>
  );
}
