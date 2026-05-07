// Molecule button with plus icon for "add new" actions.
import * as React from "react";
import { Plus } from "lucide-react";
import { PrimaryPink } from "../atoms/button/PrimaryPink";

export interface AddNewButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AddNewButton({ children, ...props }: AddNewButtonProps) {
  return (
    <PrimaryPink {...props}>
      <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
      {children}
    </PrimaryPink>
  );
}
