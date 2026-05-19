import {
  CheckboxField,
  DateField,
  DateRangeField,
  FileUploadField,
  InputField,
  RadioGroupField,
  SearchField,
  SelectField,
  SelectItem,
  TextareaField,
  ToggleField,
} from "@/components/ui";

import { InputsFormSpacingDemo } from "./inputs-form-spacing-demo";

export function InputsShowcase() {
  return (
    <>
      <section className="mb-6 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Form field spacing</h2>
        <p className="mt-2 max-w-2xl text-body-regular text-foreground-muted">
          Stack fields in a column with <span className="font-mono text-body-small">gap-8</span> (32px)
          between each control block.
        </p>
        <div className="mt-4">
          <InputsFormSpacingDemo />
        </div>
      </section>
      <section className="rounded-lg border border-border bg-surface p-5">
      <div className="grid gap-6">
        <div>
          <h2 className="text-title-2 text-foreground-title">Input field</h2>
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
          <h2 className="text-title-2 text-foreground-title">Date field</h2>
          <p className="mt-1 text-body-small text-foreground-muted">
            Custom token-styled calendar popover for single dates and date ranges.
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">default</p>
              <div className="mt-2">
                <DateField label="Start date" hint="Helper text" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">highlighted</p>
              <div className="mt-2">
                <DateField label="Start date" state="highlighted" hint="Helper text" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">prefilled</p>
              <div className="mt-2">
                <DateField label="Start date" defaultValue="2026-05-14" hint="Helper text" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">min / max</p>
              <div className="mt-2">
                <DateField label="Due date" min="2026-01-01" max="2026-12-31" hint="Within 2026" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled</p>
              <div className="mt-2">
                <DateField label="Start date" defaultValue="2026-05-14" disabled hint="Helper text" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">error</p>
              <div className="mt-2">
                <DateField label="Start date" state="error" hint="Please choose a valid date." />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-2 text-foreground-title">Date range field</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">default</p>
              <div className="mt-2">
                <DateRangeField label="Campaign dates" hint="Choose a start and end date." />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">prefilled</p>
              <div className="mt-2">
                <DateRangeField
                  label="Campaign dates"
                  defaultValue={{ start: "2026-05-14", end: "2026-05-21" }}
                  hint="One week selected."
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">min / max</p>
              <div className="mt-2">
                <DateRangeField
                  label="Campaign dates"
                  min="2026-01-01"
                  max="2026-12-31"
                  hint="Within 2026"
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled</p>
              <div className="mt-2">
                <DateRangeField
                  label="Campaign dates"
                  defaultValue={{ start: "2026-05-14", end: "2026-05-21" }}
                  disabled
                  hint="Helper text"
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">error</p>
              <div className="mt-2">
                <DateRangeField
                  label="Campaign dates"
                  state="error"
                  hint="Please choose a valid date range."
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-2 text-foreground-title">Search field</h2>
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
          <h2 className="text-title-2 text-foreground-title">Upload field</h2>
          <p className="mt-1 text-body-small text-foreground-muted">
            Upload fields support click-to-select, drag and drop, and clearing selected files.
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">single file</p>
              <div className="mt-2">
                <FileUploadField
                  label="Upload image"
                  accept="image/*"
                  maxSizeBytes={2_000_000}
                  hint="Use this for one image, logo, or document."
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">multiple files</p>
              <div className="mt-2">
                <FileUploadField
                  label="Upload documents"
                  accept="image/*,.pdf,.doc,.docx"
                  multiple
                  maxSizeBytes={10_000_000}
                  hint="Use this when several images or documents can be added."
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">error</p>
              <div className="mt-2">
                <FileUploadField
                  label="Upload product photo"
                  accept="image/*"
                  state="error"
                  error="Upload a JPG or PNG under 2 MB."
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">uploading</p>
              <div className="mt-2">
                <FileUploadField
                  label="Upload campaign brief"
                  accept=".pdf,.doc,.docx"
                  state="loading"
                  progress={64}
                  hint="Shows upload progress while files are processing."
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-2 text-foreground-title">Textarea field</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">default</p>
              <div className="mt-2">
                <TextareaField label="Description" placeholder="Type here" hint="Helper text" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">highlighted</p>
              <div className="mt-2">
                <TextareaField label="Description" placeholder="Type here" state="highlighted" hint="Helper text" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">prefilled</p>
              <div className="mt-2">
                <TextareaField
                  label="Description"
                  defaultValue="A few sentences of feedback go here."
                  hint="Helper text"
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled</p>
              <div className="mt-2">
                <TextareaField label="Description" placeholder="Type here" disabled hint="Helper text" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">error</p>
              <div className="mt-2">
                <TextareaField
                  label="Description"
                  placeholder="Type here"
                  state="error"
                  hint="Please correct this field."
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-2 text-foreground-title">Checkbox</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">unchecked</p>
              <div className="mt-2">
                <CheckboxField label="Remember me" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">checked</p>
              <div className="mt-2">
                <CheckboxField label="Remember me" defaultChecked />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">indeterminate</p>
              <div className="mt-2">
                <CheckboxField label="Select all" checked="indeterminate" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">with hint</p>
              <div className="mt-2">
                <CheckboxField label="Subscribe" hint="We send a digest once a week." />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled</p>
              <div className="mt-2">
                <CheckboxField label="Remember me" disabled />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled · checked</p>
              <div className="mt-2">
                <CheckboxField label="Remember me" defaultChecked disabled />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-2 text-foreground-title">Toggle</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">off</p>
              <div className="mt-2">
                <ToggleField label="Email notifications" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">on</p>
              <div className="mt-2">
                <ToggleField label="Email notifications" defaultChecked />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">with hint</p>
              <div className="mt-2">
                <ToggleField
                  label="Auto-tag verified products"
                  hint="Apply verified metadata after product matching."
                  defaultChecked
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled</p>
              <div className="mt-2">
                <ToggleField label="Email notifications" disabled />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled · on</p>
              <div className="mt-2">
                <ToggleField label="Email notifications" defaultChecked disabled />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-2 text-foreground-title">Radio group</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">default</p>
              <div className="mt-2">
                <RadioGroupField
                  label="Plan"
                  defaultValue="basic"
                  options={[
                    { value: "basic", label: "Basic" },
                    { value: "pro", label: "Pro" },
                    { value: "enterprise", label: "Enterprise" },
                  ]}
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">with hints</p>
              <div className="mt-2">
                <RadioGroupField
                  label="Visibility"
                  defaultValue="public"
                  options={[
                    { value: "public", label: "Public", hint: "Anyone with the link can view" },
                    { value: "restricted", label: "Restricted", hint: "Only invited members" },
                  ]}
                />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-body-extra-small text-foreground-muted">disabled</p>
              <div className="mt-2">
                <RadioGroupField
                  label="Plan"
                  defaultValue="basic"
                  disabled
                  options={[
                    { value: "basic", label: "Basic" },
                    { value: "pro", label: "Pro" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-title-2 text-foreground-title">Select field</h2>
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
