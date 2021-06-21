import { DateRange, DayClickEventHandler } from 'types';

import { SelectRangeModifiers } from './SelectRangeModifiers';

/** Represents the value of a [[SelectRangeContext]]. */
export interface SelectRangeContextValue {
  /** The range of days that has been selected. */
  selected: DateRange | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectRangeModifiers;
  /** Event handler to attach to the day button to enable the range select. */
  handleDayClick: DayClickEventHandler;
}
