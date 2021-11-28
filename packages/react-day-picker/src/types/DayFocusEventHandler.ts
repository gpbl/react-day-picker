import { ModifierStatus } from './Modifiers';

/**
 * Represent the event handler when a day is focused.
 */
export type DayFocusEventHandler = (
  day: Date,
  modifiers: ModifierStatus,
  e: React.FocusEvent | React.KeyboardEvent
) => void;
