"use client";

import { useEffect, useRef, useState } from "react";

function rgbToHex(rgb: string): string {
  const match = rgb.match(/\d+/g);
  if (!match || match.length < 3) return rgb;
  const [r, g, b] = match.slice(0, 3).map((v) => Number(v));
  return `#${[r, g, b]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

type ColorTokenSwatchProps = {
  name: string;
  bgClass: string;
};

export function ColorTokenSwatch({ name, bgClass }: ColorTokenSwatchProps) {
  const swatchRef = useRef<HTMLDivElement>(null);
  const [hex, setHex] = useState<string>("-");

  useEffect(() => {
    if (!swatchRef.current) return;
    const bg = getComputedStyle(swatchRef.current).backgroundColor;
    setHex(rgbToHex(bg));
  }, []);

  return (
    <div className="rounded-lg border border-border bg-surface p-3">
      <div ref={swatchRef} className={`h-12 rounded-md ${bgClass}`} />
      <p className="mt-2 text-body-regular-bold text-foreground-body">{name}</p>
      <p className="text-body-regular text-foreground-muted">{hex}</p>
    </div>
  );
}
