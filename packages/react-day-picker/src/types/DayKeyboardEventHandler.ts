import { ModifiersStatus } from './ModifiersStatus';

/**
 * Represent the event handler when a day gets a keyboard event.
 */
export type DayKeyboardEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.KeyboardEvent
) => void;
