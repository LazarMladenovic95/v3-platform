export const ui = {
  breadcrumbs: {
    ariaLabel: "Breadcrumb",
  },
  dateField: {
    openCalendar: "Open calendar",
    placeholder: "YYYY-MM-DD",
  },
  fileUpload: {
    bytes: {
      kilobytes: "{size} KB",
      megabytes: "{size} MB",
    },
    uploading: "Uploading",
    prompt: "Tap to upload or drag and drop",
    selectMultiple: "Select one or more files.",
    selectSingle: "Select one file.",
    accepted: "Accepted: {accept}",
    maxSize: "Max size: {maxSize}",
    clear: "Clear",
    errors: {
      invalidType: "{name} is not an accepted file type.",
      oversized: "{name} is larger than {maxSize}.",
    },
  },
  progress: {
    ariaLabel: "Progress",
  },
  pagination: {
    ariaLabel: "Pagination",
    previousPage: "Previous page",
    nextPage: "Next page",
    page: "Page {n}",
  },
  calendar: {
    previousMonth: "Previous month",
    nextMonth: "Next month",
    weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const,
  },
  dialog: {
    close: "Close dialog",
  },
  alert: {
    close: "Close alert",
  },
  avatarGroup: {
    ariaLabel: "Avatar group",
  },
  tag: {
    removeAriaLabel: "Remove {label}",
  },
} as const;
