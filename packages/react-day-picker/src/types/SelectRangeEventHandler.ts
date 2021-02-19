import { DateRange } from './DateRange';
import { ModifiersStatus } from './ModifiersStatus';

export type SelectRangeEventHandler = (
  range: DateRange | undefined,
  day: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;
