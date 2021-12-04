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
    goToMonth(dayToFocus);
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
    goToMonth(dayToFocus);
    focus(dayToFocus);
  };

  interface FocusOptions {
    unit: 'month' | 'year';
    direction: 'backwards' | 'forward';
  }

  const focusByUnit = (opts: FocusOptions): void => {
    if (!focusedDay) return;

    const { unit, direction } = opts;
    let navigationFunction: (date: Date | number, amount: number) => Date;

    switch (unit) {
      case 'month':
        switch (direction) {
          case 'forward':
            navigationFunction = addMonths;
            break;
          case 'backwards':
            navigationFunction = subMonths;
            break;
        }
        break;
      case 'year':
        switch (direction) {
          case 'forward':
            navigationFunction = addYears;
            break;
          case 'backwards':
            navigationFunction = subYears;
            break;
        }
    }

    const month = navigationFunction(focusedDay, 1);
    goToMonth(month);

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

  const focusMonthBefore = () => {
    focusByUnit({
      direction: 'backwards',
      unit: 'month'
    });
  };

  const focusMonthAfter = () => {
    focusByUnit({
      direction: 'forward',
      unit: 'month'
    });
  };

  const focusYearBefore = () => {
    focusByUnit({
      direction: 'backwards',
      unit: 'year'
    });
  };

  const focusYearAfter = () => {
    focusByUnit({
      direction: 'forward',
      unit: 'year'
    });
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
