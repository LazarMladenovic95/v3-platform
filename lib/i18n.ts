import { en, type LocaleMessages } from "@/locales/en/index";

export type LocaleId = "en";

const DEFAULT_LOCALE: LocaleId = "en";

const messagesByLocale: Record<LocaleId, LocaleMessages> = {
  en,
};

export function getLocale(): LocaleId {
  return DEFAULT_LOCALE;
}

export function getUiStrings(): LocaleMessages {
  return messagesByLocale[getLocale()];
}

type MessageParams = Record<string, string | number>;

function getByPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, segment) => {
    if (current && typeof current === "object" && segment in current) {
      return (current as Record<string, unknown>)[segment];
    }

    return undefined;
  }, source);
}

function interpolate(template: string, params?: MessageParams): string {
  if (!params) return template;

  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = params[key];
    return value === undefined ? `{${key}}` : String(value);
  });
}

export function t(path: string, params?: MessageParams): string {
  const value = getByPath(getUiStrings(), path);

  if (typeof value === "string") {
    return interpolate(value, params);
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return path;
}

export function getWeekdayLabels(): readonly string[] {
  return getUiStrings().ui.calendar.weekdays;
}

export function formatUiDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(getLocale(), options).format(date);
}

export function formatUiBytes(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return t("ui.fileUpload.bytes.kilobytes", { size: Math.round(bytes / 1024) });
  }

  return t("ui.fileUpload.bytes.megabytes", {
    size: Math.round((bytes / 1024 / 1024) * 10) / 10,
  });
}
