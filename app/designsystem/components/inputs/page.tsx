import type { Metadata } from "next";
import { InputsShowcase } from "@/components/designsystem/showcase/inputs-showcase";

export const metadata: Metadata = {
  title: "Inputs — Design system",
};

export default function DesignSystemInputsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Inputs</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Form molecules combine labels, controls, and helper text. States include default, highlighted,
        prefilled, disabled, and error.
      </p>
      <div className="mt-6">
        <InputsShowcase />
      </div>
    </>
  );
}
