// Molecule button with plus icon for "add new" actions.
import * as React from "react";
import { Icon } from "../atoms/Icon";
import { PrimaryPink } from "../atoms/button/PrimaryPink";

export type AddNewButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AddNewButton({ children, ...props }: AddNewButtonProps) {
  return (
    <PrimaryPink iconLeft={<Icon name="plus" />} {...props}>
      {children}
    </PrimaryPink>
  );
}
