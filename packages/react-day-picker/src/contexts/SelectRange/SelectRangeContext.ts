import * as React from 'react';

import { DateRange, DayClickEventHandler } from '../../types';

import { Modifiers } from '../../types';

/** Represent the modifiers that are changed by the range selection. */
export type SelectRangeModifiers = Pick<
  Modifiers,
  'selected' | 'range_start' | 'range_end' | 'range_middle' | 'disabled'
>;

/** Represents the value of a [[SelectRangeContext]]. */
export interface SelectRangeContextValue {
  /** The range of days that has been selected. */
  selected: DateRange | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectRangeModifiers;
  /** Event handler to attach to the day button to enable the range select. */
  handleDayClick?: DayClickEventHandler;
}

/**
 * The SelectRange context shares details about the selected days when in
 * range selection mode.
 *
 * Access this context from the [[useSelectRange]] hook.
 */
export const SelectRangeContext = React.createContext<
  SelectRangeContextValue | undefined
>(undefined);
