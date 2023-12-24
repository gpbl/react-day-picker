import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { getNextFocus } from './utils/getNextFocus';
import { useCalendar } from '../CalendarContext';
import { useDayPicker } from '../DayPickerContext';
import { useModifiers } from '../ModifiersContext';

import type { CalendarDay } from '../../classes/CalendarDay';

export type MoveFocusBy =
  | 'day'
  | 'week'
  | 'startOfWeek'
  | 'endOfWeek'
  | 'month'
  | 'year';

export type MoveFocusDir = 'after' | 'before';

export interface FocusContext {
  /** The date that is currently focused. */
  focusedDay: CalendarDay | undefined;
  /**
   * The date that is target of the focus when tabbing into the month grid.
   * The focus target is the selected date first, then the today date, then the
   * first focusable date.
   */
  focusTarget: CalendarDay | undefined;
  /** Focus a date. */
  focus: (day: CalendarDay) => void;
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
  const { goToDay, isDayDisplayed } = useCalendar();

  const { autoFocus = false, ...dayPicker } = useDayPicker();

  const [focused, setFocused] = useState<CalendarDay | undefined>();
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();
  const [initiallyFocused, setInitiallyFocused] = useState(false);

  const { modifiersMap } = useModifiers();

  const autoFocusTarget =
    modifiersMap.selected[0] ?? // autofocus the first selected day
    modifiersMap.today[0] ?? // autofocus today
    modifiersMap.focusable[0]; // otherwise autofocus the first focusable day

  const focusTarget =
    focused ?? (lastFocused && isDayDisplayed(lastFocused))
      ? lastFocused
      : autoFocusTarget;

  function blur() {
    setLastFocused(focused);
    setFocused(undefined);
  }

  function focus(day: CalendarDay) {
    setFocused(day);
  }

  function moveFocus(moveBy: MoveFocusBy, moveDir: MoveFocusDir) {
    if (!focused) return;
    const nextFocus = getNextFocus(moveBy, moveDir, focused, dayPicker);
    if (!nextFocus) return;

    goToDay(nextFocus);
    // focus(nextFocus); // TODO: and here we get lost: should be a Day, but is a Date
  }

  // Focus the focus target when autoFocus is passed in
  useEffect(() => {
    if (!autoFocus) return;
    if (!focusTarget) return;
    if (!initiallyFocused) return;

    setInitiallyFocused(true);
    focus(focusTarget);
  }, [autoFocus, focusTarget, initiallyFocused]);

  const value: FocusContext = {
    focusTarget,
    focusedDay: focused,
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

/** @deprecated Use {@link useFocus} instead. */
export const useFocusContext = useFocus;
