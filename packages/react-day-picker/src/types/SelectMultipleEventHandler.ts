import { ModifierStatus } from './Modifiers';

/** Represent the event handler when selecting multiple days. */
export type SelectMultipleEventHandler = (
  /** The selected days */
  days: Date[] | undefined,
  /** The day that was clicked triggering the event. */
  selectedDay: Date,
  /** The day that was clicked */
  modifiers: ModifierStatus,
  /** The mouse event that triggered this event. */
  e: React.MouseEvent
) => void;
