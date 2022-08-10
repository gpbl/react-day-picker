import React, { createContext, ReactNode, useState } from 'react';

import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addWeeks from 'date-fns/addWeeks';
import addYears from 'date-fns/addYears';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import max from 'date-fns/max';
import min from 'date-fns/min';
import isSameDay from 'date-fns/isSameDay';

import { useDayPicker } from 'contexts/DayPicker';

import { useModifiers } from '../Modifiers';
import { useNavigation } from '../Navigation';
import { getInitialFocusTarget } from './utils/getInitialFocusTarget';

/** Represents the value of the {@link NavigationContext}. */
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

  const { fromDate, toDate, weekStartsOn } = useDayPicker();

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

  const moveFocus = (addFn: typeof addDays, after: boolean) => {
    if (!focusedDay) return;
    let newFocusedDay = addFn(focusedDay, after ? 1 : -1);
    if (!after && fromDate) {
      newFocusedDay = max([fromDate, newFocusedDay]);
    }
    if (after && toDate) {
      newFocusedDay = min([toDate, newFocusedDay]);
    }
    if (isSameDay(focusedDay, newFocusedDay)) return;
    navigation.goToDate(newFocusedDay, focusedDay);
    focus(newFocusedDay);
  };

  const focusDayBefore = () => moveFocus(addDays, false);
  const focusDayAfter = () => moveFocus(addDays, true);
  const focusWeekBefore = () => moveFocus(addWeeks, false);
  const focusWeekAfter = () => moveFocus(addWeeks, true);
  const focusStartOfWeek = () =>
    moveFocus((date) => startOfWeek(date, { weekStartsOn }), false);
  const focusEndOfWeek = () =>
    moveFocus((date) => endOfWeek(date, { weekStartsOn }), true);
  const focusMonthBefore = () => moveFocus(addMonths, false);
  const focusMonthAfter = () => moveFocus(addMonths, true);
  const focusYearBefore = () => moveFocus(addYears, false);
  const focusYearAfter = () => moveFocus(addYears, true);

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
