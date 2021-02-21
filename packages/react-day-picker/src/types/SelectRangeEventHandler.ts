import { DateRange } from './DateRange';
import { ModifiersStatus } from './ModifiersStatus';

export type SelectRangeEventHandler = (
  /** The current range of the selected days. */
  range: DateRange | undefined,
  /** The day that was selected (or clicked) triggering the event. */
  selectedDay: Date,
  /** The modifiers of the selected day. */
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
