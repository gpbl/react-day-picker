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

  /** Check if the given day is the focus target when entering the calendar. */
  isFocusTarget: (day: CalendarDay) => boolean;

  /** Focus the given day. */
  setFocused: (day: CalendarDay | undefined) => void;

  /** Set the last focused day. */
  setLastFocused: (day: CalendarDay | undefined) => void;

  /** Blur the focused day. */
  blur: () => void;

  moveFocus: (moveBy: MoveFocusBy, moveDir: MoveFocusDir) => void;
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
    moveFocus
  };

  return useFocus;
}
