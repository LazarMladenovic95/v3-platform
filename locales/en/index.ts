import { app } from "./app";
import { designsystem } from "./designsystem";
import { ui } from "./ui";

export const en = {
  ui,
  app,
  designsystem,
} as const;

export type LocaleMessages = typeof en;
