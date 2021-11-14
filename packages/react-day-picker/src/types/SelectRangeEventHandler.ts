import { DateRange, ModifierStatus } from '../types';

/** Represent the event handler when selecting a range of days. */
export type SelectRangeEventHandler = (
  /** The current range of the selected days. */
  range: DateRange | undefined,
  /** The day that was selected (or clicked) triggering the event. */
  selectedDay: Date,
  /** The modifiers of the selected day. */
  modifiers: ModifierStatus,
  e: React.MouseEvent
) => void;
