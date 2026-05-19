"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RightMenu } from "@/components/ui/composites/RightMenu";
import { MenuButton } from "@/components/ui/molecules/MenuButton";
import { t } from "@/lib/i18n";

export function AppHeader() {
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
      <div className="relative mx-auto flex h-full w-full max-w-content items-center justify-between gap-6 px-6 md:px-16 lg:px-20">
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

        <div ref={menuAreaRef} className="relative">
          <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} />
          {isMenuOpen ? (
            <RightMenu
              className="absolute top-menu-dropdown right-0 z-20"
              onItemClick={() => setIsMenuOpen(false)}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}
