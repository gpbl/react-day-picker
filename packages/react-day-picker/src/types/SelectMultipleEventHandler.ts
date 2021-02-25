import { ModifierStatus } from './ModifierStatus';

/**
 * Represent the event handler when multiple days are selected (empty array when
 * the no days are selected).
 */
export type SelectMultipleEventHandler = (
  /** The selected days */
  days: Date[],
  /** The day that was selected (or clicked) triggering the event. */
  selectedDay: Date,
  /** The day that was clicked */
  modifiers: ModifierStatus,
  e: React.MouseEvent
) => void;
