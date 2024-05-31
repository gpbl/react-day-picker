import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { DayModifier } from "react-day-picker/UI";

import type { CalendarDay } from "../classes";
import { getNextFocus } from "../helpers/getNextFocus";

import { useCalendar } from "./calendar";
import { useModifiers } from "./modifiers";
import { useProps } from "./props";

export type MoveFocusBy =
  | "day"
  | "week"
  | "startOfWeek"
  | "endOfWeek"
  | "month"
  | "year";

export type MoveFocusDir = "after" | "before";

/**
 * Share the focused day and the methods to move the focus.
 *
 * Access this context from the {@link useFocus} hook.
 *
 * @group Contexts
 */
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

const focusContext = createContext<FocusContext | undefined>(undefined);

/** @private */
export function FocusProvider({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  const { goToDay, isDayDisplayed, days, isInteractive } = useCalendar();

  const { autoFocus = false, ...props } = useProps();
  const { calendarModifiers, getModifiers } = useModifiers();

  const [focused, setFocused] = useState<CalendarDay | undefined>();
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();
  const [initiallyFocused, setInitiallyFocused] = useState(false);

  const today = calendarModifiers.today[0];

  let autoFocusTarget: CalendarDay | undefined;

  const isValidFocusTarget = (day: CalendarDay) => {
    return isDayDisplayed(day) && !getModifiers(day)[DayModifier.disabled];
  };

  if (isInteractive) {
    if (focused) {
      autoFocusTarget = focused;
    } else if (lastFocused) {
      autoFocusTarget = lastFocused;
    } else if (
      calendarModifiers.selected[0] &&
      isValidFocusTarget(calendarModifiers.selected[0])
    ) {
      autoFocusTarget = calendarModifiers.selected[0];
    } else if (today && isValidFocusTarget(today)) {
      autoFocusTarget = today;
    } else if (calendarModifiers.focusable[0]) {
      autoFocusTarget = calendarModifiers.focusable[0];
    }
  }

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
    const nextFocus = getNextFocus(moveBy, moveDir, focused, props);
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
    focusDayAfter: () => moveFocus("day", "after"),
    focusDayBefore: () => moveFocus("day", "before"),
    focusWeekAfter: () => moveFocus("week", "after"),
    focusWeekBefore: () => moveFocus("week", "before"),
    focusMonthBefore: () => moveFocus("month", "before"),
    focusMonthAfter: () => moveFocus("month", "after"),
    focusYearBefore: () => moveFocus("year", "before"),
    focusYearAfter: () => moveFocus("year", "after"),
    focusStartOfWeek: () => moveFocus("startOfWeek", "before"),
    focusEndOfWeek: () => moveFocus("endOfWeek", "after")
  };

  return (
    <focusContext.Provider value={value}>{children}</focusContext.Provider>
  );
}

/**
 * Share the focused day and the methods to move the focus.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function useFocus(): FocusContext {
  const context = useContext(focusContext);
  if (!context) {
    throw new Error("useFocus must be used within a FocusProvider");
  }
  return context;
}
