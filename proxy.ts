import { type NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, type LocaleId } from "@/locales/index";
import {
  isLocaleExemptPath,
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
  PATHNAME_HEADER,
  pathnameWithLocale,
  resolvePreferredLocale,
  shouldPrefixPathWithLocale,
  stripLocalePrefix,
} from "@/lib/i18n/routing";

function applyLocaleCookie(response: NextResponse, locale: LocaleId): NextResponse {
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS,
  });
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/companies")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/companies/, "/company");
    return NextResponse.redirect(url);
  }

  const { locale: urlLocale, pathnameWithoutLocale } = stripLocalePrefix(pathname);
  const acceptLanguage = request.headers.get("accept-language");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(PATHNAME_HEADER, pathnameWithoutLocale);

  if (urlLocale) {
    if (isLocaleExemptPath(pathnameWithoutLocale) || !shouldPrefixPathWithLocale(pathnameWithoutLocale)) {
      const url = request.nextUrl.clone();
      url.pathname = pathnameWithoutLocale;
      return applyLocaleCookie(NextResponse.redirect(url), urlLocale);
    }

    const url = request.nextUrl.clone();
    url.pathname = pathnameWithoutLocale;
    return applyLocaleCookie(
      NextResponse.rewrite(url, { request: { headers: requestHeaders } }),
      urlLocale,
    );
  }

  const cookieValue = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const preferredLocale = resolvePreferredLocale(cookieValue, acceptLanguage);

  if (
    preferredLocale !== DEFAULT_LOCALE &&
    shouldPrefixPathWithLocale(pathnameWithoutLocale) &&
    pathname === request.nextUrl.pathname
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathnameWithLocale(pathnameWithoutLocale, preferredLocale);
    return applyLocaleCookie(NextResponse.redirect(url), preferredLocale);
  }

  return applyLocaleCookie(
    NextResponse.next({ request: { headers: requestHeaders } }),
    preferredLocale,
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/webpack-hmr|.*\\..*).*)"],
};
