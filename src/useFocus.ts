import { useState } from "react";

import type { CalendarDay } from "./classes/index.js";
import { calculateFocusTarget } from "./helpers/calculateFocusTarget.js";
import { getNextFocus } from "./helpers/getNextFocus.js";
import type {
  MoveFocusBy,
  MoveFocusDir,
  DateLib,
  DayPickerProps,
  Mode
} from "./types/index.js";
import { UseCalendar } from "./useCalendar.js";
import { UseModifiers } from "./useModifiers.js";
import { UseSelection } from "./useSelection.js";

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
  selection: UseSelection<{ mode: Mode }>,
  dateLib: DateLib
): UseFocus {
  const { getModifiers } = modifiers;
  const { autoFocus } = props;
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();

  const focusTarget = calculateFocusTarget(
    calendar,
    getModifiers,
    selection.isSelected,
    lastFocused
  );
  const [focusedDay, setFocused] = useState<CalendarDay | undefined>(
    autoFocus ? focusTarget : undefined
  );

  const blur = () => {
    setLastFocused(focusedDay);
    setFocused(undefined);
  };

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
