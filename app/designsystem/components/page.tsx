import type { Metadata } from "next";
import {
  AddNewButton,
  Avatar,
  AvatarFallback,
  AvatarImage,
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
  title: "Components — Design system",
};

export default function DesignSystemComponentsPage() {
  return (
    <>
      <h1 className="text-heading-3 text-foreground-title">Components</h1>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-1 text-foreground-title">Buttons</h2>
        <p className="mt-1 text-body-regular text-foreground-muted">
          Hover and click buttons below to see interactive feedback states.
        </p>
        <div className="mt-4 grid gap-5">
          <div>
            <h3 className="text-title-3 text-foreground-title">Primary</h3>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <PrimaryPink>Primary Pink</PrimaryPink>
              <PrimaryPink size="small">Primary Pink Small</PrimaryPink>
              <PrimaryPinkExtraSmall>Primary Pink XS</PrimaryPinkExtraSmall>
            </div>
          </div>
          <div>
            <h3 className="text-title-3 text-foreground-title">Secondary</h3>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <SecondaryPink>Secondary Pink</SecondaryPink>
              <SecondaryPink size="small">Secondary Pink Small</SecondaryPink>
              <SecondaryPinkExtraSmall>Secondary Pink XS</SecondaryPinkExtraSmall>
            </div>
          </div>
          <div>
            <h3 className="text-title-3 text-foreground-title">Others</h3>
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

      <section className="mt-6 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-1 text-foreground-title">Atoms & composites</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-title-3 text-foreground-title">Avatar atom</h3>
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
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-title-3 text-foreground-title">StatusPill atom</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <StatusPill label="Published" variant="published" />
              <StatusPill label="Restricted" variant="restricted" />
              <StatusPill label="Draft" variant="draft" />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-title-3 text-foreground-title">InfoBox composite</h3>
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
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-title-3 text-foreground-title">Popover composite</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <SecondaryPinkExtraSmall>Default</SecondaryPinkExtraSmall>
                </PopoverTrigger>
                <PopoverContent align="start">
                  <p className="text-body-regular-bold">Default Popover</p>
                  <p className="mt-1 text-body-regular text-foreground-muted">
                    Example contextual content for the design system.
                  </p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <SecondaryPinkExtraSmall>Success</SecondaryPinkExtraSmall>
                </PopoverTrigger>
                <PopoverContent align="start" variant="success">
                  <p className="text-body-regular-bold">Success Popover</p>
                  <p className="mt-1 text-body-regular text-foreground-body">
                    Utility success styling with green tokens.
                  </p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <SecondaryPinkExtraSmall>Error</SecondaryPinkExtraSmall>
                </PopoverTrigger>
                <PopoverContent align="start" variant="error">
                  <p className="text-body-regular-bold">Error Popover</p>
                  <p className="mt-1 text-body-regular text-foreground-body">
                    Utility error styling with red tokens.
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-1 text-foreground-title">Form controls</h2>
        <div className="mt-4 grid gap-6">
          <div>
            <h3 className="text-title-3 text-foreground-title">Input field</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">default</p>
                <div className="mt-2">
                  <InputField label="Input" placeholder="Type here" hint="Helper text" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">highlighted</p>
                <div className="mt-2">
                  <InputField label="Input" placeholder="Type here" state="highlighted" hint="Helper text" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">prefilled</p>
                <div className="mt-2">
                  <InputField label="Input" defaultValue="Prefilled value" hint="Helper text" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">disabled</p>
                <div className="mt-2">
                  <InputField label="Input" placeholder="Type here" disabled hint="Helper text" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">error</p>
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
            <h3 className="text-title-3 text-foreground-title">Search field</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">default</p>
                <div className="mt-2">
                  <SearchField label="Search" placeholder="Search..." />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">highlighted</p>
                <div className="mt-2">
                  <SearchField label="Search" placeholder="Search..." state="highlighted" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">prefilled</p>
                <div className="mt-2">
                  <SearchField label="Search" defaultValue="Sushi" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">disabled</p>
                <div className="mt-2">
                  <SearchField label="Search" placeholder="Search..." disabled />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">error</p>
                <div className="mt-2">
                  <SearchField label="Search" placeholder="Search..." state="error" hint="No result found." />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-title-3 text-foreground-title">Select field</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">default</p>
                <div className="mt-2">
                  <SelectField label="Select" placeholder="Choose an option">
                    <SelectItem value="one">Option One</SelectItem>
                    <SelectItem value="two">Option Two</SelectItem>
                    <SelectItem value="three">Option Three</SelectItem>
                  </SelectField>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">highlighted</p>
                <div className="mt-2">
                  <SelectField label="Select" placeholder="Choose an option" state="highlighted">
                    <SelectItem value="one">Option One</SelectItem>
                    <SelectItem value="two">Option Two</SelectItem>
                    <SelectItem value="three">Option Three</SelectItem>
                  </SelectField>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">selected</p>
                <div className="mt-2">
                  <SelectField label="Select" defaultValue="two">
                    <SelectItem value="one">Option One</SelectItem>
                    <SelectItem value="two">Option Two</SelectItem>
                    <SelectItem value="three">Option Three</SelectItem>
                  </SelectField>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <p className="text-body-extra-small text-foreground-muted">disabled</p>
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
    </>
  );
}
