import * as React from 'react';

import { DayClickEventHandler } from '../../types';

import { Modifiers } from '../../types';

/** Represent the modifiers that are changed by the single selection. */

export type SelectSingleModifiers = Pick<Modifiers, 'selected'>;

/** Represents the value of a [[SelectSingleContext]]. */
export interface SelectSingleContextValue {
  /** The day that has been selected. */
  selected: Date | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectSingleModifiers;
  /** Event handler to attach to the day button to enable the single select. */
  handleDayClick: DayClickEventHandler;
}

/**
 * The SelectSingle context shares details about the selected days when in
 * single selection mode.
 *
 * Access this context from the [[useSelectSingle]] hook.
 */
export const SelectSingleContext = React.createContext<
  SelectSingleContextValue | undefined
>(undefined);
