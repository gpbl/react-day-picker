import { ModifiersStatus } from './ModifiersStatus';

/**
 * Represent the event handler when a day gets a mouse event.
 */
export type DayMouseEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
