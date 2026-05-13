import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/designsystem", label: "Overview" },
  { href: "/designsystem/typography", label: "Typography" },
  { href: "/designsystem/colors", label: "Color" },
  { href: "/designsystem/components", label: "Components" },
] as const;

export function DesignSystemHeader() {
  return (
    <header className="h-[70px] w-full border-b border-border bg-surface">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-16 lg:px-20">
        <Link
          href="/designsystem"
          className="inline-flex shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <Image
            src="/expeerly-logo.svg"
            alt="Expeerly logo"
            width={150}
            height={40}
            priority
            className="h-[40px] w-[150px]"
          />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-4" aria-label="Design system">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body-regular text-foreground-body rounded-md px-2 py-1.5 hover:bg-surface-hover hover:text-foreground-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
