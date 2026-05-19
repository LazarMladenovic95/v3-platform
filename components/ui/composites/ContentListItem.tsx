import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export interface ContentListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function ContentListItem({
  imageSrc,
  imageAlt = "",
  title,
  description,
  action,
  className,
  ...props
}: ContentListItemProps) {
  return (
    <li
      className={cn(
        "flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
      {...props}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted p-2">
          <Image src={imageSrc} alt={imageAlt} width={56} height={56} className="max-h-10 w-auto max-w-full" />
        </div>
        <div className="min-w-0">
          <Heading as="h3" variant="title-bold">
            {title}
          </Heading>
          <Text variant="body-small-muted" className="mt-1">
            {description}
          </Text>
        </div>
      </div>
      {action && <div className="self-start sm:self-center">{action}</div>}
    </li>
  );
}
