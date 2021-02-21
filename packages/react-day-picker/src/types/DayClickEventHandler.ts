import { ModifiersStatus } from './ModifiersStatus';

/**
 * Represent the event handler when a day is clicked.
 */
export type DayClickEventHandler = (
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
