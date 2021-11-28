import { ModifierStatus } from './Modifiers';

/**
 * Represent the event handler when a day gets a touch event.
 */
export type DayTouchEventHandler = (
  day: Date,
  modifiers: ModifierStatus,
  e: React.TouchEvent
) => void;
