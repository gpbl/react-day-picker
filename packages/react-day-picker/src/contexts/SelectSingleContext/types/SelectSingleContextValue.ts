import { DayClickEventHandler, Matcher } from 'types';

/** Represents the value of a [[SelectSingleContext]]. */
export interface SelectSingleContextValue {
  /** The day that has been selected. */
  selected: Date | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: {
    selected?: Matcher[];
    disabled?: Matcher[];
  };
  /** Whether DayPicker is in single selection mode. */
  isSingleMode: boolean;
  /** Event handler to attach to the day button to enable the single select. */
  handleDayClick: DayClickEventHandler;
}
