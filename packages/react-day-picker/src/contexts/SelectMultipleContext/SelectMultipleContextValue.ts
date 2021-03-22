import { DayClickEventHandler, Matcher } from 'types';

/** Represents the value of a [[SelectMultipleContext]]. */
export interface SelectMultipleContextValue {
  /** The days that have been selected. */
  selected: Date[] | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: {
    selected?: Matcher[];
    disabled?: Matcher[];
  };
  /** Event handler to attach to the day button to enable the multiple select. */
  handleDayClick: DayClickEventHandler;
  /** Whether DayPicker is in multiple selection mode.  */
  isMultipleMode: boolean;
}
