"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { formatUiDate, getWeekdayLabels, t } from "@/lib/i18n";
import { Icon } from "../atoms/Icon";
import { IconButton } from "../atoms/button/IconButton";
import { Text } from "../atoms/Text";

export type DateRangeValue = {
  start?: string;
  end?: string;
};

type CalendarPickerProps = {
  mode?: "single";
  value?: string;
  defaultVisibleMonth?: string;
  min?: string;
  max?: string;
  onSelect?: (value: string) => void;
};

type RangeCalendarPickerProps = {
  mode: "range";
  value?: DateRangeValue;
  defaultVisibleMonth?: string;
  min?: string;
  max?: string;
  onSelect?: (value: DateRangeValue) => void;
};

function parseDateString(value?: string): Date | undefined {
  if (!value) return undefined;

  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return undefined;

  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return undefined;
  }

  return date;
}

export function formatDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function formatDisplayDate(value?: string): string {
  const date = parseDateString(value);

  return date
    ? formatUiDate(date, { month: "long", day: "numeric", year: "numeric" })
    : "";
}

export function isValidDateString(value?: string): boolean {
  return Boolean(parseDateString(value));
}

export function compareDateStrings(a?: string, b?: string): number {
  if (!a && !b) return 0;
  if (!a) return -1;
  if (!b) return 1;

  return a.localeCompare(b);
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, months: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + months, 1);
}

function buildMonthDays(month: Date): Array<Date | null> {
  const firstDay = startOfMonth(month);
  const leadingEmptyDays = firstDay.getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const days: Array<Date | null> = Array.from({ length: leadingEmptyDays }, () => null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(new Date(month.getFullYear(), month.getMonth(), day));
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}

function isDisabledDate(dateString: string, min?: string, max?: string): boolean {
  return Boolean(
    (min && compareDateStrings(dateString, min) < 0) ||
      (max && compareDateStrings(dateString, max) > 0),
  );
}

function isRangeBoundary(dateString: string, value?: DateRangeValue): boolean {
  return dateString === value?.start || dateString === value?.end;
}

function isInRange(dateString: string, value?: DateRangeValue): boolean {
  if (!value?.start || !value.end) return false;

  return (
    compareDateStrings(dateString, value.start) > 0 &&
    compareDateStrings(dateString, value.end) < 0
  );
}

function initialVisibleMonth(value?: string, defaultVisibleMonth?: string): Date {
  return startOfMonth(parseDateString(value) ?? parseDateString(defaultVisibleMonth) ?? new Date());
}

function CalendarHeader({
  visibleMonth,
  onPrevious,
  onNext,
}: {
  visibleMonth: Date;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <IconButton
        type="button"
        variant="ghost-neutral"
        size="small"
        aria-label={t("ui.calendar.previousMonth")}
        icon={<Icon name="chevron-left" />}
        onClick={onPrevious}
      />
      <Text
        as="p"
        variant="body-small"
        className="font-bold text-foreground-title"
      >
        {formatUiDate(visibleMonth, { month: "long", year: "numeric" })}
      </Text>
      <IconButton
        type="button"
        variant="ghost-neutral"
        size="small"
        aria-label={t("ui.calendar.nextMonth")}
        icon={<Icon name="chevron-right" />}
        onClick={onNext}
      />
    </div>
  );
}

function WeekdayHeader() {
  return (
    <div className="grid grid-cols-7 gap-0.5">
      {getWeekdayLabels().map((weekday) => (
        <div
          key={weekday}
          className="flex h-8 items-center justify-center text-body-extra-small-bold text-foreground-muted"
        >
          {weekday}
        </div>
      ))}
    </div>
  );
}

function DayGrid({
  visibleMonth,
  selectedDate,
  selectedRange,
  min,
  max,
  onSelect,
}: {
  visibleMonth: Date;
  selectedDate?: string;
  selectedRange?: DateRangeValue;
  min?: string;
  max?: string;
  onSelect: (dateString: string) => void;
}) {
  return (
    <div className="mt-1 grid grid-cols-7 gap-0.5" role="grid">
      {buildMonthDays(visibleMonth).map((date, index) => {
        if (!date) {
          return <div key={`empty-${index}`} className="h-9" />;
        }

        const dateString = formatDateString(date);
        const disabled = isDisabledDate(dateString, min, max);
        const selected = selectedDate === dateString || isRangeBoundary(dateString, selectedRange);
        const inRange = isInRange(dateString, selectedRange);

        return (
          <button
            key={dateString}
            type="button"
            role="gridcell"
            disabled={disabled}
            aria-selected={selected}
            aria-label={formatUiDate(date, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            onClick={() => onSelect(dateString)}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md text-body-small transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
              selected
                ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                : inRange
                  ? "bg-surface-active text-foreground-body hover:bg-surface-active"
                  : "text-foreground-body hover:bg-surface-hover",
              disabled &&
                "cursor-not-allowed bg-transparent text-foreground-disabled opacity-60 hover:bg-transparent",
            )}
          >
            {date.getDate()}
          </button>
        );
      })}
    </div>
  );
}

export function CalendarPicker({
  mode = "single",
  value,
  defaultVisibleMonth,
  min,
  max,
  onSelect,
}: CalendarPickerProps) {
  const [visibleMonth, setVisibleMonth] = React.useState(() =>
    initialVisibleMonth(value, defaultVisibleMonth),
  );

  return (
    <div className="w-[280px] rounded-lg bg-surface text-foreground-body">
      <CalendarHeader
        visibleMonth={visibleMonth}
        onPrevious={() => setVisibleMonth((current) => addMonths(current, -1))}
        onNext={() => setVisibleMonth((current) => addMonths(current, 1))}
      />
      <WeekdayHeader />
      <DayGrid
        visibleMonth={visibleMonth}
        selectedDate={mode === "single" ? value : undefined}
        min={min}
        max={max}
        onSelect={(dateString) => onSelect?.(dateString)}
      />
    </div>
  );
}

export function RangeCalendarPicker({
  mode,
  value,
  defaultVisibleMonth,
  min,
  max,
  onSelect,
}: RangeCalendarPickerProps) {
  const [visibleMonth, setVisibleMonth] = React.useState(() =>
    initialVisibleMonth(value?.start ?? value?.end, defaultVisibleMonth),
  );

  function selectRangeDate(dateString: string) {
    if (!value?.start || value.end || compareDateStrings(dateString, value.start) < 0) {
      onSelect?.({ start: dateString });
      return;
    }

    onSelect?.({ start: value.start, end: dateString });
  }

  return (
    <div className="w-[280px] rounded-lg bg-surface text-foreground-body" data-mode={mode}>
      <CalendarHeader
        visibleMonth={visibleMonth}
        onPrevious={() => setVisibleMonth((current) => addMonths(current, -1))}
        onNext={() => setVisibleMonth((current) => addMonths(current, 1))}
      />
      <WeekdayHeader />
      <DayGrid
        visibleMonth={visibleMonth}
        selectedRange={value}
        min={min}
        max={max}
        onSelect={selectRangeDate}
      />
    </div>
  );
}
