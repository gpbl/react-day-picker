import { DayClickEventHandler } from '../../types';

import { SelectSingleModifiers } from './SelectSingleModifiers';

/** Represents the value of a [[SelectSingleContext]]. */
export interface SelectSingleContextValue {
  /** The day that has been selected. */
  selected: Date | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectSingleModifiers;
  /** Event handler to attach to the day button to enable the single select. */
  handleDayClick: DayClickEventHandler;
}
