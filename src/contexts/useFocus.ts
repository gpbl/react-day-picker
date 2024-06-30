import React, { useEffect, useState } from "react";

import { format } from "date-fns";

import { DayFlag } from "../UI.js";
import type { CalendarDay } from "../classes/index.js";
import { getNextFocus } from "../helpers/getNextFocus.js";
import type {
  MoveFocusBy,
  MoveFocusDir,
  DateLib,
  DayPickerProps
} from "../types/index.js";

import { UseCalendar } from "./useCalendar.js";
import { UseModifiers } from "./useModifiers.js";

export type UseFocus = {
  /** The date that is currently focused. */
  focused: CalendarDay | undefined;
  /**
   * The date that is target of the focus when tabbing into the month grid. The
   * focus target is the selected date first, then the today date, then the
   * first focusable date.
   *
   * @private
   */
  autoFocusTarget: CalendarDay | undefined;
  /**
   * True if the focus is set by the autoFocus prop.
   *
   * @private
   */
  initiallyFocused: boolean;

  /** Focus the given day. */
  setFocused: (day: CalendarDay | undefined) => void;

  /**
   * Set the last focused day.
   *
   * @private
   */
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

export function useFocus(
  props: Pick<
    DayPickerProps,
    | "autoFocus"
    | "disabled"
    | "hidden"
    | "modifiers"
    | "locale"
    | "ISOWeek"
    | "weekStartsOn"
  >,
  calendar: UseCalendar,
  modifiers: UseModifiers,
  dateLib: DateLib
): UseFocus {
  const { goToDay, isDayDisplayed } = calendar;

  const { autoFocus } = props;
  const {
    dayFlags: internal,
    selectionStates: selection,
    getModifiers
  } = modifiers;

  const [focused, setFocused] = useState<CalendarDay | undefined>();
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();
  const [initiallyFocused, setInitiallyFocused] = useState(false);

  const today = internal.today[0];

  let autoFocusTarget: CalendarDay | undefined;

  const isValidFocusTarget = (day: CalendarDay) => {
    return isDayDisplayed(day) && !getModifiers(day)[DayFlag.disabled];
  };

  // if (isInteractive) {
  // if (focused) {
  //   autoFocusTarget = focused;
  // } else if (lastFocused) {
  //   autoFocusTarget = lastFocused;
  // } else if (
  //   selection.selected[0] &&
  //   isValidFocusTarget(selection.selected[0])
  // ) {
  //   autoFocusTarget = selection.selected[0];
  // } else if (
  //   !internal.disabled[0] &&
  //   isValidFocusTarget(internal.disabled[0])
  // ) {
  //   // autoFocusTarget = internal.focusable[0];
  // }
  // }

  useEffect(() => {
    if (!focused) return;

    const dataDay = format(focused.date, "yyyy-MM-dd");
    const dataMonth = format(focused.displayMonth, "yyyy-MM");

    const dayCell = window.document.querySelector(
      `[data-day="${dataDay}"][data-month="${dataMonth}"]`
    ) as HTMLDivElement | null;

    dayCell?.focus();
  }, [focused]);

  // Focus the focus target when autoFocus is passed in
  useEffect(() => {
    if (!autoFocus) return;
    if (!autoFocusTarget) return;
    if (!initiallyFocused) return;
    // TODO: bug here?
    setInitiallyFocused(true);
    setFocused(autoFocusTarget);
  }, [autoFocus, autoFocusTarget, focused, initiallyFocused]);

  const blur = () => {
    setLastFocused(focused);
    setFocused(undefined);
  };

  function moveFocus(moveBy: MoveFocusBy, moveDir: MoveFocusDir) {
    if (!focused) return;
    const nextFocus = getNextFocus(
      moveBy,
      moveDir,
      focused,
      calendar.calendarStartMonth,
      calendar.calendarEndMonth,
      props,
      dateLib
    );
    if (!nextFocus) return;

    goToDay(nextFocus);
    setFocused(nextFocus);
  }

  const contextValue: UseFocus = {
    autoFocusTarget,
    initiallyFocused,
    setFocused,
    focused,
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

  return contextValue;
}
