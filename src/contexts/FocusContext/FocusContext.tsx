import { createContext, ReactNode, useContext, useState } from 'react';

import { useModifiers } from '../ModifiersContext';
import { useCalendar } from '../CalendarContext';
import { useDayPicker } from '../DayPickerContext';
import { getNextFocus } from './utils/getNextFocus';

export type MoveFocusBy =
  | 'day'
  | 'week'
  | 'startOfWeek'
  | 'endOfWeek'
  | 'month'
  | 'year';

export type MoveFocusDir = 'after' | 'before';

export interface FocusContext {
  /** The day currently focused. */
  focusedDate: Date | undefined;
  /** Day that will be focused.  */
  focusTarget: Date | undefined;
  /** Focus a date. */
  focus: (date: Date) => void;
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
}

/**
 * The Focus context shares details about the focused day for the keyboard
 *
 * Access this context from the {@link useFocus} hook.
 */
export const focusContext = createContext<FocusContext | undefined>(undefined);

/** The provider for the {@link focusContext}. */
export function FocusProvider(props: { children: ReactNode }): JSX.Element {
  const { days, goToDate, isDateDisplayed } = useCalendar();
  const { getModifiers } = useModifiers();

  const dayPicker = useDayPicker();

  const initialFocused = days.find((day) => {
    const modifiers = getModifiers(day);
    if (!modifiers.focusable) return false;
    if (modifiers.selected || modifiers.today) return true;
    return modifiers.focusable;
  })?.date;

  const [focused, setFocused] = useState<Date | undefined>();
  const [lastFocused, setLastFocused] = useState<Date | undefined>(focused);

  const focusTarget =
    focused ?? (lastFocused && isDateDisplayed(lastFocused))
      ? lastFocused
      : initialFocused;

  function blur() {
    setLastFocused(focused);
    setFocused(undefined);
  }

  function focus(date: Date) {
    setFocused(date);
  }

  function moveFocus(moveBy: MoveFocusBy, moveDir: MoveFocusDir) {
    if (!focused) return;
    const nextFocus = getNextFocus(moveBy, moveDir, focused, dayPicker);
    if (nextFocus) {
      goToDate(nextFocus, focused);
      focus(nextFocus);
    }
  }

  const value: FocusContext = {
    focusTarget,
    focusedDate: focused,
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
    <focusContext.Provider value={value}>
      {props.children}
    </focusContext.Provider>
  );
}

/**
 * Hook to access the {@link FocusContext}. Use this hook to handle the
 * focus state of the elements.
 *
 * This hook is meant to be used inside internal or custom components.
 */
export function useFocus(): FocusContext {
  const context = useContext(focusContext);
  if (!context) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
}
