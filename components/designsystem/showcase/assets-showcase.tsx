import Image from "next/image";

type AssetCard = {
  title: string;
  description: string;
  src: string;
  alt: string;
  backgroundClassName: string;
  imageClassName: string;
};

const brandAssets: AssetCard[] = [
  {
    title: "Logo",
    description: "Primary Expeerly logo for white or transparent backgrounds.",
    src: "/expeerly-logo.svg",
    alt: "Expeerly logo",
    backgroundClassName: "bg-surface",
    imageClassName: "h-auto w-[180px]",
  },
  {
    title: "Inverse logo",
    description: "Negative logo for dark or high-contrast surfaces.",
    src: "/expeerly-logo-negative.svg",
    alt: "Expeerly inverse logo",
    backgroundClassName: "bg-tooltip",
    imageClassName: "h-auto w-[180px]",
  },
  {
    title: "Logo symbol",
    description: "Standalone brand symbol for compact placements.",
    src: "/expeerly_reviewed_MINIMAL.svg",
    alt: "Expeerly logo symbol",
    backgroundClassName: "bg-surface",
    imageClassName: "h-20 w-20",
  },
  {
    title: "Favicon",
    description: "Small app icon treatment based on the compact brand symbol.",
    src: "/expeerly_reviewed_MINIMAL.svg",
    alt: "Expeerly favicon",
    backgroundClassName: "bg-surface",
    imageClassName: "h-8 w-8",
  },
];

export function AssetsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {brandAssets.map((asset) => (
        <section key={asset.title} className="rounded-lg border border-border bg-surface p-5">
          <h2 className="text-title-2 text-foreground-title">{asset.title}</h2>
          <p className="mt-1 text-body-small text-foreground-muted">{asset.description}</p>
          <div
            className={`mt-4 flex min-h-40 items-center justify-center rounded-lg border border-border p-6 ${asset.backgroundClassName}`}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              width={220}
              height={100}
              className={asset.imageClassName}
            />
          </div>
          <code className="mt-3 block text-body-extra-small text-foreground-muted">{asset.src}</code>
        </section>
      ))}
    </div>
  );
}
