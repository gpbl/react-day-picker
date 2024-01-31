import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import type { CalendarDay } from '../../classes/CalendarDay';
import { useCalendar } from '../CalendarContext';
import { useDayPicker } from '../DayPickerContext';
import { useModifiers } from '../ModifiersContext';
import { getNextFocus } from './utils/getNextFocus';

export type MoveFocusBy =
  | 'day'
  | 'week'
  | 'startOfWeek'
  | 'endOfWeek'
  | 'month'
  | 'year';

export type MoveFocusDir = 'after' | 'before';

/** @category Contexts */
export interface FocusContext {
  /** The date that is currently focused. */
  focusedDay: CalendarDay | undefined;
  /**
   * The date that is target of the focus when tabbing into the month grid. The
   * focus target is the selected date first, then the today date, then the
   * first focusable date.
   */
  autoFocusTarget: CalendarDay | undefined;
  initiallyFocused: boolean;
  /** Focus a date. */
  focus: (day: CalendarDay | undefined) => void;
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
 * Access this context from the {@link useFocus} hook.
 */
const focusContext = createContext<FocusContext | undefined>(undefined);

/**
 * The provider for the {@link focusContext}.
 *
 * @category Contexts
 */
export function FocusProvider(props: { children: ReactNode }): JSX.Element {
  const { goToDay, isDayDisplayed } = useCalendar();

  const { autoFocus = false, ...dayPicker } = useDayPicker();
  const { modifiersMap } = useModifiers();

  const [focused, setFocused] = useState<CalendarDay | undefined>();
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();
  const [initiallyFocused, setInitiallyFocused] = useState(false);

  const autoFocusTarget =
    focused ?? (lastFocused && isDayDisplayed(lastFocused))
      ? lastFocused
      : modifiersMap.selected[0] ?? // autofocus the first selected day
        modifiersMap.today[0] ?? // autofocus today
        modifiersMap.focusable[0]; // otherwise autofocus the first focusable day;

  // Focus the focus target when autoFocus is passed in
  useEffect(() => {
    if (!autoFocus) return;
    if (!autoFocusTarget) return;
    if (!initiallyFocused) return;
    setInitiallyFocused(true);
    setFocused(autoFocusTarget);
  }, [autoFocus, autoFocusTarget, focused, initiallyFocused]);

  function blur() {
    setLastFocused(focused);
    setFocused(undefined);
  }

  function moveFocus(moveBy: MoveFocusBy, moveDir: MoveFocusDir) {
    if (!focused) return;
    const nextFocus = getNextFocus(moveBy, moveDir, focused, dayPicker);
    if (!nextFocus) return;

    goToDay(nextFocus);
    setFocused(nextFocus);
  }

  const value: FocusContext = {
    autoFocusTarget,
    initiallyFocused,
    focusedDay: focused,
    blur,
    focus: setFocused,
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
 * Hook to access the {@link FocusContext}. Use this hook to handle the focus
 * state of the elements.
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
