// Molecule button with plus icon for "add new" actions.
import * as React from "react";
import { Plus } from "lucide-react";
import { PrimaryPink } from "../atoms/button/PrimaryPink";

export type AddNewButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AddNewButton({ children, ...props }: AddNewButtonProps) {
  return (
    <PrimaryPink iconLeft={<Plus className="h-4 w-4" />} {...props}>
      {children}
    </PrimaryPink>
  );
}
