import React, { createContext, ReactNode, useState } from 'react';

import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfWeek,
  startOfWeek
} from 'date-fns';

import { useModifiers } from '../Modifiers';
import { useNavigation } from '../Navigation';
import { getInitialFocusTarget } from './utils/getInitialFocusTarget';

/** Represents the value of the [[NavigationContext]]. */
export type FocusContextValue = {
  /** The day currently focused. */
  focusedDay: Date | undefined;
  /** Day that will be focused.  */
  focusTarget: Date | undefined;
  /** Focus a day. */
  focus: (day: Date) => void;
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

/**
 * The Focus context shares details about the focused day for the keyboard
 *
 * Access this context from the [[useFocus]] hook.
 */
export const FocusContext = createContext<FocusContextValue | undefined>(
  undefined
);

/** The provider for the [[FocusContext]]. */
export function FocusProvider(props: { children: ReactNode }): JSX.Element {
  const navigation = useNavigation();
  const modifiers = useModifiers();

  const [focusedDay, setFocusedDay] = useState<Date | undefined>();
  const [lastFocused, setLastFocused] = useState<Date | undefined>();

  const initialFocusTarget = getInitialFocusTarget(
    navigation.displayMonths,
    modifiers
  );

  const focusTarget =
    focusedDay ?? (lastFocused && navigation.isDateDisplayed(lastFocused))
      ? lastFocused
      : initialFocusTarget;

  const blur = () => {
    setLastFocused(focusedDay);
    setFocusedDay(undefined);
  };
  const focus = (date: Date) => {
    setFocusedDay(date);
  };

  const focusDayBefore = () => {
    if (!focusedDay) return;
    const before = addDays(focusedDay, -1);
    focus(before);
    navigation.goToDate(before, -1);
  };
  const focusDayAfter = () => {
    if (!focusedDay) return;
    const after = addDays(focusedDay, 1);
    focus(after);
    navigation.goToDate(after, 1);
  };
  const focusWeekBefore = () => {
    if (!focusedDay) return;
    const up = addWeeks(focusedDay, -1);
    focus(up);
    navigation.goToDate(up, -1);
  };
  const focusWeekAfter = () => {
    if (!focusedDay) return;
    const down = addWeeks(focusedDay, 1);
    focus(down);
    navigation.goToDate(down, 1);
  };

  const focusStartOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = startOfWeek(focusedDay);
    navigation.goToDate(dayToFocus, 1);
    focus(dayToFocus);
  };

  const focusEndOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = endOfWeek(focusedDay);
    navigation.goToDate(dayToFocus, 1);
    focus(dayToFocus);
  };

  const focusMonthBefore = (): void => {
    if (!focusedDay) return;

    const monthBefore = addMonths(focusedDay, -1);
    navigation.goToDate(monthBefore, -1);
    focus(monthBefore);
  };

  const focusMonthAfter = () => {
    if (!focusedDay) return;
    const monthAfter = addMonths(focusedDay, 1);
    navigation.goToDate(monthAfter, 1);
    focus(monthAfter);
  };

  const focusYearBefore = () => {
    if (!focusedDay) return;

    const yearBefore = addYears(focusedDay, -1);
    navigation.goToDate(yearBefore, -1);
    focus(yearBefore);
  };

  const focusYearAfter = () => {
    if (!focusedDay) return;

    const yearAfter = addYears(focusedDay, 1);
    navigation.goToDate(yearAfter, 1);
    focus(yearAfter);
  };

  const value: FocusContextValue = {
    focusedDay,
    focusTarget,
    blur,
    focus,
    focusDayAfter,
    focusDayBefore,
    focusWeekAfter,
    focusWeekBefore,
    focusMonthBefore,
    focusMonthAfter,
    focusYearBefore,
    focusYearAfter,
    focusStartOfWeek,
    focusEndOfWeek
  };

  return (
    <FocusContext.Provider value={value}>
      {props.children}
    </FocusContext.Provider>
  );
}
