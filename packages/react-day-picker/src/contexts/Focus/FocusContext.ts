import * as React from 'react';

/** Represents the value of the [[NavigationContext]]. */
export type FocusContextValue = [
  /** The day currently focused */
  focusedDay: Date | undefined,
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
