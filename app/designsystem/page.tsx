import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AddNewButton,
  Avatar,
  AvatarFallback,
  AvatarImage,
  ColorTokenSwatch,
  CtaLinkPink,
  DestructiveRed,
  InfoBox,
  InputField,
  PrimaryPink,
  PrimaryPinkExtraSmall,
  SearchField,
  SecondaryPink,
  SecondaryPinkExtraSmall,
  SelectField,
  SelectItem,
  Spinner,
  StatusPill,
} from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/composites/Popover";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  const mainColorTokens = [
    { name: "pink-500", bgClass: "bg-pink-500" },
    { name: "pink-600", bgClass: "bg-pink-600" },
    { name: "pink-700", bgClass: "bg-pink-700" },
    { name: "grey-100", bgClass: "bg-grey-100" },
    { name: "grey-200", bgClass: "bg-grey-200" },
    { name: "grey-300", bgClass: "bg-grey-300" },
    { name: "grey-500", bgClass: "bg-grey-500" },
    { name: "grey-700", bgClass: "bg-grey-700" },
    { name: "blue-500", bgClass: "bg-blue-500" },
    { name: "navy-100", bgClass: "bg-navy-100" },
    { name: "navy-500", bgClass: "bg-navy-500" },
    { name: "yellow-500", bgClass: "bg-yellow-500" },
  ];

  const utilityColorTokens = [
    { name: "red-util-100", bgClass: "bg-red-util-100" },
    { name: "red-util-60", bgClass: "bg-red-util-60" },
    { name: "green-util-100", bgClass: "bg-green-util-100" },
    { name: "green-util-60", bgClass: "bg-green-util-60" },
  ];

  const headingTokens = [
    { label: "heading-1", className: "text-heading-1", values: "20px / 24px / 800" },
    { label: "heading-2", className: "text-heading-2", values: "18px / 20px / 700" },
    { label: "heading-3", className: "text-heading-3", values: "16px / 18px / 700" },
  ];

  const bodyTokens = [
    { label: "body", className: "text-body", values: "14px / 18px / 400" },
    { label: "body-bold", className: "text-body-bold", values: "14px / 18px / 700" },
    { label: "body-low", className: "text-body-low", values: "14px / 16px / 400" },
    { label: "body-small", className: "text-body-small", values: "12px / 14px / 400" },
  ];

  const labelTokens = [
    { label: "label", className: "text-label", values: "12px / 14px / 400" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="h-[70px] w-full bg-white border-b border-grey-200">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-6 md:px-16 lg:px-20">
          <Link
            href="/"
            className="inline-flex shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2"
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
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-16 lg:px-20">
        <h1 className="text-heading-1 text-navy-500">Expeerly Designsystem</h1>
        <section className="mt-4 mb-6 rounded-lg border border-grey-200 p-5">
          <h2 className="text-heading-2 text-grey-700">Logos</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-grey-200 p-3">
              <p className="text-body-small text-grey-500">Logo</p>
              <div className="mt-2">
                <Image
                  src="/expeerly-logo.svg"
                  alt="Expeerly logo"
                  width={150}
                  height={40}
                  className="h-[40px] w-[150px]"
                />
              </div>
            </div>

            <div className="rounded-lg border border-grey-200 p-3">
              <p className="text-body-small text-grey-500">Negative</p>
              <div className="mt-2 rounded-md bg-grey-700 px-3 py-2">
                <Image
                  src="/expeerly-logo-negative.svg"
                  alt="Expeerly logo negative"
                  width={150}
                  height={40}
                  className="h-[32px] w-auto"
                />
              </div>
            </div>

            <div className="rounded-lg border border-grey-200 p-3">
              <p className="text-body-small text-grey-500">Icon</p>
              <div className="mt-2">
                <Image
                  src="/expeerly_reviewed_MINIMAL.svg"
                  alt="Expeerly icon"
                  width={78}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-grey-200 p-5">
          <h2 className="text-heading-2 text-grey-700">Color Tokens</h2>
          <div className="mt-4 grid gap-6">
            <div>
              <h3 className="text-heading-3 text-grey-700">Main Colors</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {mainColorTokens.map((token) => (
                  <ColorTokenSwatch key={token.name} name={token.name} bgClass={token.bgClass} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-heading-3 text-grey-700">Utility Colors</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {utilityColorTokens.map((token) => (
                  <ColorTokenSwatch key={token.name} name={token.name} bgClass={token.bgClass} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-grey-200 p-5">
          <h2 className="text-heading-2 text-grey-700">Typography Tokens</h2>
          <p className="mt-1 text-body text-grey-500">
            Font family: <span className="text-body-bold text-grey-700">Mulish</span> (
            <code>var(--font-mulish), system-ui, sans-serif</code>)
          </p>
          <div className="mt-4 grid gap-6">
            <div>
              <h3 className="text-heading-3 text-grey-700">Heading</h3>
              <div className="mt-3 grid gap-3">
                {headingTokens.map((token) => (
                  <div key={token.label} className="rounded-lg border border-grey-200 p-3">
                    <p className="text-body-small text-grey-500">
                      {token.label} - {token.values}
                    </p>
                    <p className={`${token.className} mt-1 text-grey-700`}>
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-heading-3 text-grey-700">Body</h3>
              <div className="mt-3 grid gap-3">
                {bodyTokens.map((token) => (
                  <div key={token.label} className="rounded-lg border border-grey-200 p-3">
                    <p className="text-body-small text-grey-500">
                      {token.label} - {token.values}
                    </p>
                    <p className={`${token.className} mt-1 text-grey-700`}>
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-heading-3 text-grey-700">Label</h3>
              <div className="mt-3 grid gap-3">
                {labelTokens.map((token) => (
                  <div key={token.label} className="rounded-lg border border-grey-200 p-3">
                    <p className="text-body-small text-grey-500">
                      {token.label} - {token.values}
                    </p>
                    <p className={`${token.className} mt-1 text-grey-700`}>
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-grey-200 p-5">
          <h2 className="text-heading-2 text-grey-700">Buttons</h2>
          <p className="mt-1 text-body text-grey-500">
            Hover and click buttons below to see interactive feedback states.
          </p>
          <div className="mt-4 grid gap-5">
            <div>
              <h3 className="text-heading-3 text-grey-700">Primary</h3>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <PrimaryPink>Primary Pink</PrimaryPink>
                <PrimaryPink size="small">Primary Pink Small</PrimaryPink>
                <PrimaryPinkExtraSmall>Primary Pink XS</PrimaryPinkExtraSmall>
              </div>
            </div>

            <div>
              <h3 className="text-heading-3 text-grey-700">Secondary</h3>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <SecondaryPink>Secondary Pink</SecondaryPink>
                <SecondaryPink size="small">Secondary Pink Small</SecondaryPink>
                <SecondaryPinkExtraSmall>Secondary Pink XS</SecondaryPinkExtraSmall>
              </div>
            </div>

            <div>
              <h3 className="text-heading-3 text-grey-700">Others</h3>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <DestructiveRed>Destructive Red</DestructiveRed>
                <CtaLinkPink>CTA Link Pink</CtaLinkPink>
                <AddNewButton>Add New</AddNewButton>
                <PrimaryPink>
                  <Spinner className="mr-2" />
                  Loading
                </PrimaryPink>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-grey-200 p-5">
          <h2 className="text-heading-2 text-grey-700">Atoms & Composites</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-grey-200 p-4">
              <h3 className="text-heading-3 text-grey-700">Avatar Atom</h3>
              <div className="mt-3 flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/avatar4.png" alt="Expeerly avatar" />
                  <AvatarFallback>EX</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="rounded-lg border border-grey-200 p-4">
              <h3 className="text-heading-3 text-grey-700">StatusPill Atom</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <StatusPill label="Published" variant="published" />
                <StatusPill label="Restricted" variant="restricted" />
                <StatusPill label="Draft" variant="draft" />
              </div>
            </div>

            <div className="rounded-lg border border-grey-200 p-4">
              <h3 className="text-heading-3 text-grey-700">InfoBox Composite</h3>
              <div className="mt-3">
                <InfoBox
                  header="Review Guidelines"
                  points={[
                    "Keep feedback specific and constructive.",
                    "Use clear language and actionable advice.",
                    "Highlight both strengths and improvements.",
                  ]}
                />
              </div>
            </div>

            <div className="rounded-lg border border-grey-200 p-4">
              <h3 className="text-heading-3 text-grey-700">Popover Composite</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <SecondaryPinkExtraSmall>Default</SecondaryPinkExtraSmall>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <p className="text-body-bold">Default Popover</p>
                    <p className="mt-1 text-body text-grey-500">
                      Example contextual content for the design system.
                    </p>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <SecondaryPinkExtraSmall>Success</SecondaryPinkExtraSmall>
                  </PopoverTrigger>
                  <PopoverContent align="start" variant="success">
                    <p className="text-body-bold">Success Popover</p>
                    <p className="mt-1 text-body text-grey-700">
                      Utility success styling with green tokens.
                    </p>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <SecondaryPinkExtraSmall>Error</SecondaryPinkExtraSmall>
                  </PopoverTrigger>
                  <PopoverContent align="start" variant="error">
                    <p className="text-body-bold">Error Popover</p>
                    <p className="mt-1 text-body text-grey-700">
                      Utility error styling with red tokens.
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-grey-200 p-5">
          <h2 className="text-heading-2 text-grey-700">Form Controls</h2>
          <div className="mt-4 grid gap-6">
            <div>
              <h3 className="text-heading-3 text-grey-700">Input Field</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">default</p>
                  <div className="mt-2">
                    <InputField label="Input" placeholder="Type here" hint="Helper text" />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">highlighted</p>
                  <div className="mt-2">
                    <InputField
                      label="Input"
                      placeholder="Type here"
                      state="highlighted"
                      hint="Helper text"
                    />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">prefilled</p>
                  <div className="mt-2">
                    <InputField
                      label="Input"
                      defaultValue="Prefilled value"
                      hint="Helper text"
                    />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">disabled</p>
                  <div className="mt-2">
                    <InputField label="Input" placeholder="Type here" disabled hint="Helper text" />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">error</p>
                  <div className="mt-2">
                    <InputField
                      label="Input"
                      placeholder="Type here"
                      state="error"
                      hint="Please correct this field."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-3 text-grey-700">Search Field</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">default</p>
                  <div className="mt-2">
                    <SearchField label="Search" placeholder="Search..." />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">highlighted</p>
                  <div className="mt-2">
                    <SearchField label="Search" placeholder="Search..." state="highlighted" />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">prefilled</p>
                  <div className="mt-2">
                    <SearchField label="Search" defaultValue="Sushi" />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">disabled</p>
                  <div className="mt-2">
                    <SearchField label="Search" placeholder="Search..." disabled />
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">error</p>
                  <div className="mt-2">
                    <SearchField
                      label="Search"
                      placeholder="Search..."
                      state="error"
                      hint="No result found."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-3 text-grey-700">Select Field</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">default</p>
                  <div className="mt-2">
                    <SelectField label="Select" placeholder="Choose an option">
                      <SelectItem value="one">Option One</SelectItem>
                      <SelectItem value="two">Option Two</SelectItem>
                      <SelectItem value="three">Option Three</SelectItem>
                    </SelectField>
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">highlighted</p>
                  <div className="mt-2">
                    <SelectField
                      label="Select"
                      placeholder="Choose an option"
                      state="highlighted"
                    >
                      <SelectItem value="one">Option One</SelectItem>
                      <SelectItem value="two">Option Two</SelectItem>
                      <SelectItem value="three">Option Three</SelectItem>
                    </SelectField>
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">selected</p>
                  <div className="mt-2">
                    <SelectField label="Select" defaultValue="two">
                      <SelectItem value="one">Option One</SelectItem>
                      <SelectItem value="two">Option Two</SelectItem>
                      <SelectItem value="three">Option Three</SelectItem>
                    </SelectField>
                  </div>
                </div>
                <div className="rounded-lg border border-grey-200 p-3">
                  <p className="text-body-small text-grey-500">disabled</p>
                  <div className="mt-2">
                    <SelectField label="Select" placeholder="Choose an option" disabled>
                      <SelectItem value="one">Option One</SelectItem>
                      <SelectItem value="two">Option Two</SelectItem>
                      <SelectItem value="three">Option Three</SelectItem>
                    </SelectField>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
