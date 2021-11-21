import * as React from 'react';

import { DayClickEventHandler, Modifiers } from '../../types';

/** Represent the modifiers that are changed by the multiple selection. */
export type SelectMultipleModifiers = Pick<Modifiers, 'selected' | 'disabled'>;

/** Represents the value of a [[SelectMultipleContext]]. */
export interface SelectMultipleContextValue {
  /** The days that have been selected. */
  selected: Date[] | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectMultipleModifiers;
  /** Event handler to attach to the day button to enable the multiple select. */
  handleDayClick: DayClickEventHandler;
}

/**
 * The SelectMultiple context shares details about the selected days when in
 * multiple selection mode.
 *
 * Access this context from the [[useSelectMultiple]] hook.
 */
export const SelectMultipleContext = React.createContext<
  SelectMultipleContextValue | undefined
>(undefined);
