import { ModifierStatus } from './Modifiers';

/**
 * Represent the event handler when a day gets a keyboard event.
 */
export type DayKeyboardEventHandler = (
  day: Date,
  modifiers: ModifierStatus,
  e: React.KeyboardEvent
) => void;
