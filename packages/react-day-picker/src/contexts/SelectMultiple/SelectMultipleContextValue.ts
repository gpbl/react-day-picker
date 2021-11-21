import { DayClickEventHandler } from '../../types';

import { SelectMultipleModifiers } from './SelectMultipleModifiers';

/** Represents the value of a [[SelectMultipleContext]]. */
export interface SelectMultipleContextValue {
  /** The days that have been selected. */
  selected: Date[] | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectMultipleModifiers;
  /** Event handler to attach to the day button to enable the multiple select. */
  handleDayClick?: DayClickEventHandler;
}
