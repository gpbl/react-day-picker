import { ModifiersStatus } from './ModifiersStatus';

/**
 * Represent the event handler when a day is focused.
 */
export type DayFocusEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.FocusEvent | React.KeyboardEvent
) => void;
