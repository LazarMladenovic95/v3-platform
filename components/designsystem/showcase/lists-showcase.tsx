import { ContentListItem, OutlinePrimary } from "@/components/ui";

const listItems = [
  {
    title: "Expeerly reviewed",
    description: "A product or brand row with supporting text and a clear action.",
    image: "/expeerly_reviewed_MINIMAL.svg",
    action: "View details",
  },
  {
    title: "Brand asset",
    description: "Use list items for compact search results, product rows, or asset pickers.",
    image: "/expeerly-logo.svg",
    action: "Open",
  },
] as const;

export function ListsShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Image list item</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          List items combine a leading image or logo, title, description, and a trailing action button.
        </p>
        <div className="mt-4 overflow-hidden rounded-lg border border-border bg-surface">
          <ul className="divide-y divide-border">
            {listItems.map((item) => (
              <ContentListItem
                key={item.title}
                imageSrc={item.image}
                title={item.title}
                description={item.description}
                action={
                  <OutlinePrimary type="button" size="small">
                    {item.action}
                  </OutlinePrimary>
                }
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
