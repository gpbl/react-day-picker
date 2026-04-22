import { useState } from "react";

import type { CalendarDay, DateLib } from "./classes/index.js";
import { calculateFocusTarget } from "./helpers/calculateFocusTarget.js";
import { getNextFocus } from "./helpers/getNextFocus.js";
import type {
  DayPickerProps,
  Modifiers,
  MoveFocusBy,
  MoveFocusDir,
} from "./types/index.js";
import type { Calendar } from "./useCalendar.js";

export type UseFocus = {
  /** The date that is currently focused. */
  focused: CalendarDay | undefined;

  /** Check if the given day is the focus target when entering the calendar. */
  isFocusTarget: (day: CalendarDay) => boolean;

  /** Focus the given day. */
  setFocused: (day: CalendarDay | undefined) => void;

  /** Blur the focused day. */
  blur: () => void;

  /** Move the current focus to the next day according to the given direction. */
  moveFocus: (moveBy: MoveFocusBy, moveDir: MoveFocusDir) => void;
};

/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */
export function useFocus<T extends DayPickerProps>(
  props: T,
  calendar: Calendar,
  getModifiers: (day: CalendarDay) => Modifiers,
  isSelected: (date: Date) => boolean,
  dateLib: DateLib,
): UseFocus {
  const { autoFocus } = props;
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();

  const focusTarget = calculateFocusTarget(
    calendar.days,
    getModifiers,
    isSelected || (() => false),
    lastFocused,
  );
  const [focusedDay, setFocused] = useState<CalendarDay | undefined>(
    autoFocus ? focusTarget : undefined,
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
      calendar.navStart,
      calendar.navEnd,
      props,
      dateLib,
    );
    if (!nextFocus) return;

    if (props.disableNavigation) {
      const isNextInCalendar = calendar.days.some((day) =>
        day.isEqualTo(nextFocus),
      );
      if (!isNextInCalendar) {
        return;
      }
    }

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
    blur,
    moveFocus,
  };

  return useFocus;
}
