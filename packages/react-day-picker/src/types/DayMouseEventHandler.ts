import { ModifierStatus } from './Modifiers';

/**
 * Represent the event handler when a day gets a mouse event.
 */
export type DayMouseEventHandler = (
  day: Date,
  modifiers: ModifierStatus,
  e: React.MouseEvent
) => void;
