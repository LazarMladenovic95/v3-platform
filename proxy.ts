import { type NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE } from "@/locales/index";
import {
  isLocaleExemptPath,
  isSupportedLocaleSegment,
  LOCALE_COOKIE_NAME,
  shouldPrefixPathWithLocale,
  stripLocalePrefix,
} from "@/lib/i18n-routing";

function applyLocaleCookie(response: NextResponse, locale: string): NextResponse {
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    sameSite: "lax",
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

  const { locale, pathnameWithoutLocale } = stripLocalePrefix(pathname);

  if (locale) {
    if (isLocaleExemptPath(pathnameWithoutLocale) || !shouldPrefixPathWithLocale(pathnameWithoutLocale)) {
      const url = request.nextUrl.clone();
      url.pathname = pathnameWithoutLocale;
      return NextResponse.redirect(url);
    }

    const url = request.nextUrl.clone();
    url.pathname = pathnameWithoutLocale;
    return applyLocaleCookie(NextResponse.rewrite(url), locale);
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (cookieLocale && cookieLocale !== DEFAULT_LOCALE && isSupportedLocaleSegment(cookieLocale)) {
    if (shouldPrefixPathWithLocale(pathname) && pathname === request.nextUrl.pathname) {
      const url = request.nextUrl.clone();
      url.pathname = `/${cookieLocale}${pathname === "/" ? "" : pathname}`;
      return NextResponse.redirect(url);
    }
  }

  return applyLocaleCookie(NextResponse.next(), cookieLocale ?? DEFAULT_LOCALE);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/webpack-hmr|.*\\..*).*)"],
};
