import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type LocaleId } from "@/locales/index";

/**
 * Path prefixes that receive a locale segment in the URL (e.g. `/de/video-reviews`).
 * www / player / marketing surfaces only.
 */
export const LOCALE_PREFIXED_PATH_PREFIXES = [
  "/",
  "/video-reviews",
] as const;

/**
 * App (authenticated) paths: never prefixed with `/{locale}`.
 * UI copy may still use `t()` / `locales/*.json`.
 */
export const LOCALE_EXEMPT_PATH_PREFIXES = [
  "/companies",
  "/reviewer",
  "/sign-in",
  "/bnd",
] as const;

export function isLocaleExemptPath(pathname: string): boolean {
  return LOCALE_EXEMPT_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function shouldPrefixPathWithLocale(pathname: string): boolean {
  if (isLocaleExemptPath(pathname)) return false;

  return LOCALE_PREFIXED_PATH_PREFIXES.some((prefix) => {
    if (prefix === "/") {
      return pathname === "/" || pathname.startsWith("/video-reviews");
    }

    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}

export function isSupportedLocaleSegment(segment: string): segment is LocaleId {
  return (SUPPORTED_LOCALES as readonly string[]).includes(segment);
}

export function stripLocalePrefix(pathname: string): {
  locale: LocaleId | null;
  pathnameWithoutLocale: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isSupportedLocaleSegment(first) && first !== DEFAULT_LOCALE) {
    const rest = `/${segments.slice(1).join("/")}`;
    return {
      locale: first,
      pathnameWithoutLocale: rest === "/" ? "/" : rest.replace(/\/$/, "") || "/",
    };
  }

  return { locale: null, pathnameWithoutLocale: pathname };
}
