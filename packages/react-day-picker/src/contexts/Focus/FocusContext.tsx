import React, { createContext, ReactNode, useState } from 'react';

import isSameDay from 'date-fns/isSameDay';

import { useDayPicker } from 'contexts/DayPicker';

import { useModifiers } from '../Modifiers';
import { useNavigation } from '../Navigation';
import { getInitialFocusTarget } from './utils/getInitialFocusTarget';
import {
  getNextFocus,
  MoveFocusBy,
  MoveFocusDirection
} from './utils/getNextFocus';

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

  const dayPicker = useDayPicker();

  const moveFocus = (moveBy: MoveFocusBy, direction: MoveFocusDirection) => {
    if (!focusedDay) return;
    const nextFocused = getNextFocus(
      focusedDay,
      moveBy,
      direction,
      dayPicker,
      modifiers
    );
    if (isSameDay(focusedDay, nextFocused)) return undefined;
    navigation.goToDate(nextFocused, focusedDay);
    focus(nextFocused);
  };

  const value: FocusContextValue = {
    focusedDay,
    focusTarget,
    blur,
    focus,
    focusDayAfter: () => moveFocus('day', 'after'),
    focusDayBefore: () => moveFocus('day', 'before'),
    focusWeekAfter: () => moveFocus('week', 'after'),
    focusWeekBefore: () => moveFocus('week', 'before'),
    focusMonthBefore: () => moveFocus('month', 'before'),
    focusMonthAfter: () => moveFocus('month', 'after'),
    focusYearBefore: () => moveFocus('year', 'before'),
    focusYearAfter: () => moveFocus('year', 'after'),
    focusStartOfWeek: () => moveFocus('startOfWeek', 'before'),
    focusEndOfWeek: () => moveFocus('endOfWeek', 'after')
  };

  return (
    <FocusContext.Provider value={value}>
      {props.children}
    </FocusContext.Provider>
  );
}
