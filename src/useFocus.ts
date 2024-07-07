import { useEffect, useState } from "react";

import { format } from "date-fns";

import { DayFlag } from "./UI.js";
import type { CalendarDay } from "./classes/index.js";
import { getNextFocus } from "./helpers/getNextFocus.js";
import type {
  MoveFocusBy,
  MoveFocusDir,
  DateLib,
  DayPickerProps
} from "./types/index.js";
import { UseCalendar } from "./useCalendar.js";
import { UseModifiers } from "./useModifiers.js";

export type UseFocus = {
  /** The date that is currently focused. */
  focused: CalendarDay | undefined;
  /** The date that is target of the focus when tabbing into the month grid. */
  // focusTarget: CalendarDay | undefined;

  isFocusTarget: (day: CalendarDay) => boolean;

  /** Focus the given day. */
  setFocused: (day: CalendarDay | undefined) => void;

  /** Set the last focused day. */
  setLastFocused: (day: CalendarDay | undefined) => void;

  /** Blur the focused day. */
  blur: () => void;
  /** Focus the day after the focused day. */
  focusDayAfter: () => void;
  /** Focus the day before the focused day. */
  focusDayBefore: () => void;
  /** Focus the day in the week before the focused day. */
  focusWeekBefore: () => void;
  /** Focus the day in the week after the focused day. */
  focusWeekAfter: () => void;
  /* Focus the day in the month before the focused day. */
  focusMonthBefore: () => void;
  /* Focus the day in the month after the focused day. */
  focusMonthAfter: () => void;
  /* Focus the day in the year before the focused day. */
  focusYearBefore: () => void;
  /* Focus the day in the year after the focused day. */
  focusYearAfter: () => void;
  /* Focus the day at the start of the week of the focused day. */
  focusStartOfWeek: () => void;
  /* Focus the day at the end of the week of focused day. */
  focusEndOfWeek: () => void;
};

/** @private */
export function useFocus(
  props: Pick<
    DayPickerProps,
    | "autoFocus"
    | "disabled"
    | "hidden"
    | "modifiers"
    | "numberOfMonths"
    | "locale"
    | "ISOWeek"
    | "weekStartsOn"
  >,
  calendar: UseCalendar,
  modifiers: UseModifiers,
  dateLib: DateLib
): UseFocus {
  const { getModifiers } = modifiers;

  const [focusedDay, setFocused] = useState<CalendarDay | undefined>();
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();

  useEffect(() => {
    if (focusedDay) {
      getDayCell(focusedDay, (props.numberOfMonths ?? 1) > 1)?.focus();
    }
  }, [focusedDay, props.numberOfMonths]);

  const blur = () => {
    setLastFocused(focusedDay);
    setFocused(undefined);
  };

  let focusTarget: CalendarDay | undefined;

  calendar.days.map((day) => {
    const m = getModifiers(day);
    if (m[DayFlag.disabled]) return;
    if (m[DayFlag.hidden]) return;
    if (m[DayFlag.outside]) return;

    if (m[DayFlag.focused]) {
      focusTarget = day;
      return;
    }
    if (lastFocused?.isEqualTo(day)) {
      focusTarget = day;
      return;
    }

    if (m[DayFlag.today]) {
      focusTarget = day;
      return;
    }

    if (!focusTarget && dateLib.isSameDay(day.date, calendar.months[0].date)) {
      focusTarget = day;
      return;
    }
  });

  const moveFocus = (moveBy: MoveFocusBy, moveDir: MoveFocusDir) => {
    if (!focusedDay) return;
    const nextFocus = getNextFocus(
      moveBy,
      moveDir,
      focusedDay,
      calendar.navigationStartMonth,
      calendar.navigationEndMonth,
      props,
      dateLib
    );
    if (!nextFocus) return;

    calendar.goToDay(nextFocus);
    setFocused(nextFocus);
  };

  const isFocusTarget = (day: CalendarDay) => {
    return Boolean(focusTarget?.isEqualTo(day));
  };

  const useFocus: UseFocus = {
    // focusTarget,
    // initiallyFocused,
    isFocusTarget,
    setFocused,
    focused: focusedDay,
    setLastFocused,
    blur,
    focusDayAfter: () => moveFocus("day", "after"),
    focusDayBefore: () => moveFocus("day", "before"),
    focusWeekAfter: () => moveFocus("week", "after"),
    focusWeekBefore: () => moveFocus("week", "before"),
    focusMonthBefore: () => moveFocus("month", "before"),
    focusMonthAfter: () => moveFocus("month", "after"),
    focusYearBefore: () => moveFocus("year", "before"),
    focusYearAfter: () => moveFocus("year", "after"),
    focusStartOfWeek: () => moveFocus("startOfWeek", "before"),
    focusEndOfWeek: () => moveFocus("endOfWeek", "after")
  };

  return useFocus;
}

/**
 * Get the day cell element for the given day from the data-day and data-month
 * attribute.
 *
 * @private
 */
function getDayCell(focused: CalendarDay, multipleMonths: boolean) {
  const dataDay = format(focused.date, "yyyy-MM-dd");
  const dataMonth = format(focused.displayMonth, "yyyy-MM");
  let selector = `[data-day="${dataDay}"]`;
  if (multipleMonths) {
    selector += `[data-month="${dataMonth}"]`;
  }
  const dayCell = window.document.querySelector(
    `${selector} button`
  ) as HTMLButtonElement | null;
  return dayCell;
}
