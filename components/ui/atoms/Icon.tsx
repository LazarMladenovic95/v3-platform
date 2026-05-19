import { cn } from "@/lib/utils";
import { iconComponents, type IconName, type IconSvgProps } from "../icons";

export type { IconName };

const sizeClasses = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
} as const;

export interface IconProps extends Omit<IconSvgProps, "ref"> {
  name: IconName;
  size?: keyof typeof sizeClasses;
}

export function Icon({
  name,
  size = "md",
  className,
  strokeWidth = 2,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  ...props
}: IconProps) {
  const Component = iconComponents[name];

  return (
    <Component
      className={cn(sizeClasses[size], className)}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      aria-hidden={props["aria-hidden"] ?? true}
      {...props}
    />
  );
}
