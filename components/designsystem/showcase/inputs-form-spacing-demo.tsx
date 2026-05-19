"use client";

import {
  DateField,
  InputField,
  OutlinePrimary,
  SelectField,
  SelectItem,
  TextareaField,
} from "@/components/ui";

/** Design-system demo: stacked fields with 32px vertical gap (`gap-8`). */
export function InputsFormSpacingDemo() {
  return (
    <form
      className="flex max-w-md flex-col gap-8"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputField label="Full name" placeholder="Jane Doe" hint="Required for this example." />
      <InputField label="Email" type="email" placeholder="you@example.com" hint="We never share your email." />
      <DateField label="Start date" hint="Pick a date." />
      <SelectField label="Region" placeholder="Choose a region">
        <SelectItem value="na">North America</SelectItem>
        <SelectItem value="eu">Europe</SelectItem>
        <SelectItem value="apac">Asia Pacific</SelectItem>
      </SelectField>
      <TextareaField label="Notes" placeholder="Optional context" hint="Keep it brief." rows={3} />
      <div>
        <OutlinePrimary type="submit" size="medium">
          Submit
        </OutlinePrimary>
      </div>
    </form>
  );
}
