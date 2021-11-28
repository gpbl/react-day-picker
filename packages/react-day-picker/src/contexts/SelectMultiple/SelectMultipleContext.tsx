import React from 'react';
import { isDayPickerMultiple } from '../../types/DayPickerMultiple';
import { DayPickerProps } from '../../types/DayPicker';

import { DayClickEventHandler } from '../../types/EventHandlers';
import { Modifiers } from '../../types/Modifiers';
import { SelectMultipleProviderInternal } from './SelectMultipleProviderInternal';

/** Represent the modifiers that are changed by the multiple selection. */
export type SelectMultipleModifiers = Pick<Modifiers, 'selected' | 'disabled'>;

/** Represents the value of a [[SelectMultipleContext]]. */
export interface SelectMultipleContextValue {
  /** The days that have been selected. */
  selected: Date[] | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectMultipleModifiers;
  /** Event handler to attach to the day button to enable the multiple select. */
  handleDayClick?: DayClickEventHandler;
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

export type SelectMultipleProviderProps = {
  initialProps: DayPickerProps;
  children: React.ReactNode;
};

/** Provides the values for the [[SelectMultipleContext]]. */
export function SelectMultipleProvider(
  props: SelectMultipleProviderProps
): JSX.Element {
  if (!isDayPickerMultiple(props.initialProps)) {
    const emptyContextValue: SelectMultipleContextValue = {
      selected: undefined,
      modifiers: {
        selected: [],
        disabled: []
      }
    };
    return (
      <SelectMultipleContext.Provider value={emptyContextValue}>
        {props.children}
      </SelectMultipleContext.Provider>
    );
  }
  return (
    <SelectMultipleProviderInternal
      initialProps={props.initialProps}
      children={props.children}
    />
  );
}
