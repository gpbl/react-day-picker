import React from 'react';

import {
  subMonths,
  addMonths,
  isSameMonth,
  addDays,
  getDaysInMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  addWeeks,
  addYears,
  subYears
} from 'date-fns';

import { useDayPicker } from '../DayPicker';
import { useNavigation } from '../Navigation';

/** Represents the value of the [[NavigationContext]]. */
export type FocusContextValue = [
  /** The day currently focused */
  focusedDay: Date | undefined,
  setters: {
    /** Focus the specified day. */
    focus: (day: Date) => void;
    /** Blur the focused day */
    blur: () => void;
    /** Focus the day after the focused day. */
    focusDayAfter: () => void;
    /** Focus the day before the focused day. */
    focusDayBefore: () => void;
    /** Focus the day in the week before the focused day. */
    focusWeekBeforeDay: () => void;
    /** Focus the day in the week after the focused day. */
    focusWeekAfterDay: () => void;
    /* Focus the same day of the previous month*/
    focusMonthBefore: () => void;
    /* Focus the same day of the next month*/
    focusMonthAfter: () => void;
    /* Focus the same day of the month of the previous year*/
    focusYearBefore: () => void;
    /* Focus the same day of the month of the next following year*/
    focusYearAfter: () => void;
    /* Focus the first day of the same week */
    focusFirstDayOfWeek: () => void;
    /* Focus the last day of the same week */
    focusLastDayOfWeek: () => void;
  }
];

/**
 * The Focus context shares details about the focused day for the keyboard navigation.
 *
 * Access this context from the [[useFocus]] hook.
 */
export const FocusContext = React.createContext<FocusContextValue | undefined>(
  undefined
);

/** The provider for the [[FocusContext]]. */
export function FocusProvider({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [focusedDay, setDay] = React.useState<Date | undefined>();
  const { goToMonth, displayMonths, previousMonth, nextMonth } =
    useNavigation();
  const { numberOfMonths } = useDayPicker();

  const blur = () => setDay(undefined);
  const focus = (date: Date) => setDay(date);

  const switchMonth = (date: Date, offset: number) => {
    if (displayMonths.some((m) => isSameMonth(date, m))) return;
    if (offset < 0) {
      goToMonth(addMonths(date, 1 + offset));
    } else {
      goToMonth(date);
    }
  };

  const focusDayBefore = () => {
    if (!focusedDay) return;
    const before = addDays(focusedDay, -1);
    focus(before);
    switchMonth(before, numberOfMonths * -1);
  };
  const focusDayAfter = () => {
    if (!focusedDay) return;
    const after = addDays(focusedDay, 1);
    focus(after);
    switchMonth(after, numberOfMonths);
  };
  const focusWeekBeforeDay = () => {
    if (!focusedDay) return;
    const up = addWeeks(focusedDay, -1);
    focus(up);
    switchMonth(up, numberOfMonths * -1);
  };
  const focusWeekAfterDay = () => {
    if (!focusedDay) return;
    const down = addWeeks(focusedDay, 1);
    focus(down);
    switchMonth(down, numberOfMonths);
  };

  const focusFirstDayOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = addDays(
      startOfWeek(addDays(focusedDay, -1), {
        weekStartsOn: 0
      }),
      1
    );
    switchMonth(dayToFocus, numberOfMonths);
    focus(dayToFocus);
  };

  const focusLastDayOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = addDays(
      endOfWeek(addDays(focusedDay, -1), {
        weekStartsOn: 0
      }),
      1
    );
    switchMonth(dayToFocus, numberOfMonths);
    focus(dayToFocus);
  };

  const focusMonthBefore = (): void => {
    if (!focusedDay) return;

    const month = subMonths(focusedDay, 1);
    switchMonth(month, numberOfMonths);
    const switchDay = Boolean(getDaysInMonth(month) < focusedDay.getDate());

    focus(
      !switchDay
        ? month
        : addDays(
            startOfWeek(addWeeks(startOfMonth(month), 3)),
            focusedDay.getDay()
          )
    );
  };

  const focusMonthAfter = () => {
    if (!focusedDay) return;

    const month = addMonths(focusedDay, 1);
    switchMonth(month, numberOfMonths);
    const switchDay = Boolean(getDaysInMonth(month) < focusedDay.getDate());

    focus(
      !switchDay
        ? month
        : addDays(
            startOfWeek(addWeeks(startOfMonth(month), 3)),
            focusedDay.getDay()
          )
    );
  };

  const focusYearBefore = () => {
    if (!focusedDay) return;

    const month = subMonths(focusedDay, 12);
    switchMonth(month, numberOfMonths);
    const switchDay = Boolean(getDaysInMonth(month) < focusedDay.getDate());

    focus(
      !switchDay
        ? month
        : addDays(
            startOfWeek(addWeeks(startOfMonth(month), 3)),
            focusedDay.getDay()
          )
    );
  };

  const focusYearAfter = () => {
    if (!focusedDay) return;

    const month = addMonths(focusedDay, 12);
    switchMonth(month, numberOfMonths);
    const switchDay = Boolean(getDaysInMonth(month) < focusedDay.getDate());

    focus(
      !switchDay
        ? month
        : addDays(
            startOfWeek(addWeeks(startOfMonth(month), 3)),
            focusedDay.getDay()
          )
    );
  };

  const setters = {
    blur,
    focus,
    focusDayAfter,
    focusDayBefore,
    focusWeekAfterDay,
    focusWeekBeforeDay,
    focusMonthBefore,
    focusMonthAfter,
    focusYearBefore,
    focusYearAfter,
    focusFirstDayOfWeek,
    focusLastDayOfWeek
  };

  return (
    <FocusContext.Provider value={[focusedDay, setters]}>
      {children}
    </FocusContext.Provider>
  );
}
