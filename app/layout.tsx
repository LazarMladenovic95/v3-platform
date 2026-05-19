import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { AppShell } from "@/components/ui/composites/AppShell";
import { t } from "@/lib/i18n";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: t("app.layout.title"),
  description: t("app.layout.description"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
