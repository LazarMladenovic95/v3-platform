import {
  CheckboxField,
  FilterPanel,
  OutlineNeutral,
  OutlinePrimary,
  PrimaryPink,
  SelectField,
  SelectItem,
  Tag,
  ToggleField,
} from "@/components/ui";

export function FiltersAndSortingShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Filter panel</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use filter panels when people need to narrow a larger collection by status, type, or metadata.
        </p>

        <div className="mt-4 max-w-lg">
          <FilterPanel
            title="Filters"
            description="Refine the products shown below."
            headerAction={
              <OutlineNeutral type="button" size="small">
                Reset
              </OutlineNeutral>
            }
            footer={
              <>
                <OutlinePrimary type="button" size="small">
                  Cancel
                </OutlinePrimary>
                <PrimaryPink type="button" size="small">
                  Apply filters
                </PrimaryPink>
              </>
            }
          >
            <SelectField label="Status" defaultValue="verified">
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="needs-review">Needs review</SelectItem>
            </SelectField>

            <div className="grid gap-3">
              <p className="text-body-small-bold text-foreground-title">Review type</p>
              <CheckboxField label="Video reviews" defaultChecked />
              <CheckboxField label="Photo reviews" />
              <CheckboxField label="Text reviews" />
            </div>

            <ToggleField
              label="Only show active campaigns"
              hint="Hide archived or paused campaigns from the result set."
              defaultChecked
            />
          </FilterPanel>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Sorting controls</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Sorting controls should make the active order clear and keep the most common options easy to scan.
        </p>

        <div className="mt-4 max-w-sm">
          <div className="rounded-lg border border-border bg-surface p-4 shadow-sm">
            <SelectField label="Sort by" defaultValue="newest" hideLabel>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="rating-high">Highest rating</SelectItem>
              <SelectItem value="rating-low">Lowest rating</SelectItem>
            </SelectField>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Applied filters</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Applied filters should be visible, removable, and paired with a clear reset action.
        </p>

        <div className="mt-4 rounded-lg border border-border bg-surface-muted p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <Tag label="Verified" />
              <Tag label="Video reviews" />
              <Tag label="Active campaigns" />
            </div>
            <OutlineNeutral type="button" size="small">
              Clear all
            </OutlineNeutral>
          </div>
        </div>
      </section>
    </div>
  );
}
