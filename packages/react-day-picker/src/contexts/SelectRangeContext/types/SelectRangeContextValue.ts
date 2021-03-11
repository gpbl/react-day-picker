import { DateRange, DayClickEventHandler, Matcher } from 'types';

/** Represents the value of a [[SelectRangeContext]]. */
export interface SelectRangeContextValue {
  /** The range of days that has been selected. */
  selected: DateRange | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: {
    selected?: Matcher[];
    disabled?: Matcher[];
    range_start?: Matcher[];
    range_middle?: Matcher[];
    range_end?: Matcher[];
  };
  /** Event handler to attach to the day button to enable the range select. */
  handleDayClick: DayClickEventHandler;
  /** Whether DayPicker is in range selection mode.  */
  isRangeMode: boolean;
}
