import { ModifiersStatus } from './ModifiersStatus';

/**
 * Represent the event handler when a day gets a touch event.
 */
export type DayTouchEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.TouchEvent
) => void;
