import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { format } from "date-fns";

import { DayFlag } from "../UI";
import type { CalendarDay } from "../classes";
import { getNextFocus } from "../helpers/getNextFocus";
import type { MoveFocusBy, MoveFocusDir, Mode } from "../types";

import { useCalendar } from "./useCalendar";
import { useModifiers } from "./useModifiers";
import { useProps } from "./useProps";

const FocusContext = createContext<FocusContextValue | undefined>(undefined);

export type FocusContextValue = {
  /** The date that is currently focused. */
  focused: CalendarDay | undefined;
  /**
   * The date that is target of the focus when tabbing into the month grid. The
   * focus target is the selected date first, then the today date, then the
   * first focusable date.
   *
   * @private
   */
  autoFocusTarget: CalendarDay | undefined;
  /**
   * True if the focus is set by the autoFocus prop.
   *
   * @private
   */
  initiallyFocused: boolean;

  /** Focus the given day. */
  setFocused: (day: CalendarDay | undefined) => void;

  /**
   * Set the last focused day.
   *
   * @private
   */
  setLastFocused: (day: CalendarDay | undefined) => void;

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

function useFocusContextValue(): FocusContextValue {
  const { goToDay, isDayDisplayed, isInteractive } = useCalendar();

  const props = useProps();
  const { autoFocus } = props;
  const {
    dayFlags: internal,
    selectionStates: selection,
    getModifiers
  } = useModifiers();

  const [focused, setFocused] = useState<CalendarDay | undefined>();
  const [lastFocused, setLastFocused] = useState<CalendarDay | undefined>();
  const [initiallyFocused, setInitiallyFocused] = useState(false);

  const today = internal.today[0];

  let autoFocusTarget: CalendarDay | undefined;

  const isValidFocusTarget = (day: CalendarDay) => {
    return isDayDisplayed(day) && !getModifiers(day)[DayFlag.disabled];
  };

  if (isInteractive) {
    if (focused) {
      autoFocusTarget = focused;
    } else if (lastFocused) {
      autoFocusTarget = lastFocused;
    } else if (
      selection.selected[0] &&
      isValidFocusTarget(selection.selected[0])
    ) {
      autoFocusTarget = selection.selected[0];
    } else if (today && isValidFocusTarget(today)) {
      autoFocusTarget = today;
    } else if (
      !internal.disabled[0] &&
      isValidFocusTarget(internal.disabled[0])
    ) {
      // autoFocusTarget = internal.focusable[0];
    }
  }

  useEffect(() => {
    if (!focused) return;

    const dataDay = format(focused.date, "yyyy-MM-dd");
    const dataMonth = format(focused.displayMonth, "yyyy-MM");

    const dayCell = window.document.querySelector(
      `[data-day="${dataDay}"][data-month="${dataMonth}"]`
    ) as HTMLDivElement | null;

    dayCell?.focus();
  }, [focused]);

  // Focus the focus target when autoFocus is passed in
  useEffect(() => {
    if (!autoFocus) return;
    if (!autoFocusTarget) return;
    if (!initiallyFocused) return;
    // TODO: bug here?
    setInitiallyFocused(true);
    setFocused(autoFocusTarget);
  }, [autoFocus, autoFocusTarget, focused, initiallyFocused]);

  const blur = () => {
    setLastFocused(focused);
    setFocused(undefined);
  };

  function moveFocus(moveBy: MoveFocusBy, moveDir: MoveFocusDir) {
    if (!focused) return;
    const nextFocus = getNextFocus(moveBy, moveDir, focused, props);
    if (!nextFocus) return;

    goToDay(nextFocus);
    setFocused(nextFocus);
  }

  const contextValue: FocusContextValue = {
    autoFocusTarget,
    initiallyFocused,
    setFocused,
    focused,
    setLastFocused,
    blur,
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

  return contextValue;
}

/** @private */
export function FocusContextProvider<
  ModeType extends Mode | undefined = undefined,
  IsRequired extends boolean = false
>({ children }: { children: ReactNode }) {
  const focusContextValue = useFocusContextValue();

  return (
    <FocusContext.Provider value={focusContextValue}>
      {children}
    </FocusContext.Provider>
  );
}

/**
 * Share the focused day and the methods to move the focus.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function useFocus() {
  const propsContext = useContext(FocusContext);
  if (!propsContext) {
    throw new Error(
      "useFocusContext() must be used within a FocusContextProvider"
    );
  }
  return propsContext;
}
