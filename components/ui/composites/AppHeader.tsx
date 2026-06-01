"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  outlinePrimaryLinkClassName,
  primaryPinkClassName,
} from "@/components/ui/atoms/button/buttonClasses";
import { RightMenu } from "@/components/ui/composites/RightMenu";
import { MenuButton } from "@/components/ui/molecules/MenuButton";
import { appContentContainerClassName } from "@/components/layout/contentContainerClasses";
import { t } from "@/lib/i18n";
import type { PublicMenuCatalog } from "@/lib/public-menu-types";
import { cn } from "@/lib/utils";

const AUTH_LINKS = {
  signUp: "/sign-in?sign-up",
  login: "/sign-in",
} as const;

const headerAuthLinkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export type AppHeaderProps = {
  publicMenuCatalog?: PublicMenuCatalog;
};

export function AppHeader({ publicMenuCatalog }: AppHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (menuAreaRef.current && !menuAreaRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="h-header w-full shrink-0 border-b border-border bg-surface">
      <div
        className={cn(
          appContentContainerClassName,
          "relative flex h-full items-center justify-between gap-6",
        )}
      >
        <Link
          href="/"
          className="inline-flex shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <Image
            src="/expeerly-logo.svg"
            alt={t("app.home.logoAlt")}
            width={150}
            height={40}
            priority
            className="h-[40px] w-[150px]"
          />
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href={AUTH_LINKS.signUp}
            className={cn(
              primaryPinkClassName("small"),
              "no-underline md:hidden",
              headerAuthLinkFocus,
            )}
            aria-label={t("app.auth.signUpAriaLabel")}
          >
            {t("app.auth.signUpLabel")}
          </Link>
          <Link
            href={AUTH_LINKS.login}
            className={cn(
              outlinePrimaryLinkClassName("small"),
              "no-underline md:hidden",
              headerAuthLinkFocus,
            )}
            aria-label={t("app.auth.loginAriaLabel")}
          >
            {t("app.auth.loginLabel")}
          </Link>
          <Link
            href={AUTH_LINKS.signUp}
            className={cn(
              primaryPinkClassName("medium"),
              "hidden min-w-36 no-underline md:inline-flex",
              headerAuthLinkFocus,
            )}
            aria-label={t("app.auth.signUpAriaLabel")}
          >
            {t("app.auth.signUpLabel")}
          </Link>
          <Link
            href={AUTH_LINKS.login}
            className={cn(
              outlinePrimaryLinkClassName("medium"),
              "hidden min-w-36 no-underline md:inline-flex",
              headerAuthLinkFocus,
            )}
            aria-label={t("app.auth.loginAriaLabel")}
          >
            {t("app.auth.loginLabel")}
          </Link>

          <div ref={menuAreaRef} className="relative">
            <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} />
          {isMenuOpen ? (
            <RightMenu
              className="absolute top-menu-dropdown right-0 z-20"
              onItemClick={() => setIsMenuOpen(false)}
              publicMenuCatalog={publicMenuCatalog}
            />
          ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
