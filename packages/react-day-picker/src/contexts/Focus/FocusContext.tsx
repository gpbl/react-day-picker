import React, { createContext, ReactNode, useState } from 'react';

import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addWeeks from 'date-fns/addWeeks';
import addYears from 'date-fns/addYears';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

import { useDayPicker } from 'contexts/DayPicker';

import { useModifiers } from '../Modifiers';
import { useNavigation } from '../Navigation';
import { getInitialFocusTarget } from './utils/getInitialFocusTarget';

/** Represents the value of the {@link FocusContext}. */
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
 * Access this context from the {@link useFocusContext} hook.
 */
export const FocusContext = createContext<FocusContextValue | undefined>(
  undefined
);

/** The provider for the {@link FocusContext}. */
export function FocusProvider(props: { children: ReactNode }): JSX.Element {
  const navigation = useNavigation();
  const modifiers = useModifiers();

  const [focusedDay, setFocusedDay] = useState<Date | undefined>();
  const [lastFocused, setLastFocused] = useState<Date | undefined>();

  const initialFocusTarget = getInitialFocusTarget(
    navigation.displayMonths,
    modifiers
  );

  const { weekStartsOn } = useDayPicker();

  // TODO: cleanup and test obscure code below
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
    navigation.goToDate(before, focusedDay);
  };
  const focusDayAfter = () => {
    if (!focusedDay) return;
    const after = addDays(focusedDay, 1);
    focus(after);
    navigation.goToDate(after, focusedDay);
  };
  const focusWeekBefore = () => {
    if (!focusedDay) return;
    const up = addWeeks(focusedDay, -1);
    focus(up);
    navigation.goToDate(up, focusedDay);
  };
  const focusWeekAfter = () => {
    if (!focusedDay) return;
    const down = addWeeks(focusedDay, 1);
    focus(down);
    navigation.goToDate(down, focusedDay);
  };

  const focusStartOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = startOfWeek(focusedDay, { weekStartsOn });
    navigation.goToDate(dayToFocus, focusedDay);
    focus(dayToFocus);
  };

  const focusEndOfWeek = (): void => {
    if (!focusedDay) return;
    const dayToFocus = endOfWeek(focusedDay, { weekStartsOn });
    navigation.goToDate(dayToFocus, focusedDay);
    focus(dayToFocus);
  };

  const focusMonthBefore = (): void => {
    if (!focusedDay) return;

    const monthBefore = addMonths(focusedDay, -1);
    navigation.goToDate(monthBefore, focusedDay);
    focus(monthBefore);
  };

  const focusMonthAfter = () => {
    if (!focusedDay) return;
    const monthAfter = addMonths(focusedDay, 1);
    navigation.goToDate(monthAfter, focusedDay);
    focus(monthAfter);
  };

  const focusYearBefore = () => {
    if (!focusedDay) return;

    const yearBefore = addYears(focusedDay, -1);
    navigation.goToDate(yearBefore, focusedDay);
    focus(yearBefore);
  };

  const focusYearAfter = () => {
    if (!focusedDay) return;

    const yearAfter = addYears(focusedDay, 1);
    navigation.goToDate(yearAfter, focusedDay);
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
