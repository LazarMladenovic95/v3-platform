// Tailwind class merge utility — cn() helper using clsx + tailwind-merge.

import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "heading-1",
            "heading-2",
            "heading-3",
            "title-1",
            "title-2",
            "title-3",
            "title-4",
            "body-large",
            "body-large-bold",
            "body-regular",
            "body-regular-bold",
            "body-small",
            "body-small-bold",
            "body-extra-small",
            "body-extra-small-bold",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
