"use client";

import type { ReactNode } from "react";
import { AppHeader } from "@/components/ui/composites/AppHeader";

export interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader />
      {children}
    </div>
  );
}
