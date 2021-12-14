import React from 'react';

import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfWeek,
  isSameMonth,
  startOfWeek
} from 'date-fns';

import { useDayPicker } from '../DayPicker';
import { useModifiers } from '../Modifiers';
import { useNavigation } from '../Navigation/useNavigation';
import { getInitialFocusTarget } from './getInitialFocusTarget';

/** Represents the value of the [[NavigationContext]]. */
export type FocusContextValue = [
  /** The day currently focused */
  focusedDay: Date | undefined,
  /** The day that is the target of focus in the day grid (tabIndex = 0) */
  focusTarget: Date | undefined,
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
    /* Focus the day in the previous month. */
    focusMonthBefore: () => void;
    /* Focus the day in the next month. */
    focusMonthAfter: () => void;
    /* Focus the day in the previous year. */
    focusYearBefore: () => void;
    /* Focus the day in the next year. */
    focusYearAfter: () => void;
    /* Focus the day at the start of the week. */
    focusStartOfWeek: () => void;
    /* Focus the day at the end of the week. */
    focusEndOfWeek: () => void;
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
  const { goToMonth, displayMonths } = useNavigation();
  const { numberOfMonths } = useDayPicker();

  const modifiersContext = useModifiers();

  const initialFocusTarget = getInitialFocusTarget(
    displayMonths,
    modifiersContext
  );

  const [lastFocusedDay, setLastFocusedDay] = React.useState<
    Date | undefined
  >();

  const isWithinDisplayMonths = (date: Date) =>
    displayMonths.some((displayMonth) => isSameMonth(date, displayMonth));

  const focusTarget =
    focusedDay ?? (lastFocusedDay && isWithinDisplayMonths(lastFocusedDay))
      ? lastFocusedDay
      : initialFocusTarget;

  const blur = () => {
    setLastFocusedDay(focusedDay);
    setDay(undefined);
  };
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

  const focusStartOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = startOfWeek(focusedDay);
    switchMonth(dayToFocus, numberOfMonths);
    focus(dayToFocus);
  };

  const focusEndOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = endOfWeek(focusedDay);
    switchMonth(dayToFocus, numberOfMonths);
    focus(dayToFocus);
  };

  const focusMonthBefore = (): void => {
    if (!focusedDay) return;

    const monthBefore = addMonths(focusedDay, -1);
    switchMonth(monthBefore, numberOfMonths);
    focus(monthBefore);
  };

  const focusMonthAfter = () => {
    if (!focusedDay) return;
    const monthAfter = addMonths(focusedDay, 1);
    switchMonth(monthAfter, numberOfMonths);
    focus(monthAfter);
  };

  const focusYearBefore = () => {
    if (!focusedDay) return;

    const yearBefore = addYears(focusedDay, -1);
    switchMonth(yearBefore, numberOfMonths);
    focus(yearBefore);
  };

  const focusYearAfter = () => {
    if (!focusedDay) return;

    const yearAfter = addYears(focusedDay, 1);
    switchMonth(yearAfter, numberOfMonths);
    focus(yearAfter);
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
    focusStartOfWeek,
    focusEndOfWeek
  };

  return (
    <FocusContext.Provider value={[focusedDay, focusTarget, setters]}>
      {children}
    </FocusContext.Provider>
  );
}
