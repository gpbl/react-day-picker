import React from 'react';

import { DayPickerProps } from '../../types/DayPicker';
import { isDayPickerSingle } from '../../types/DayPickerSingle';
import { DayClickEventHandler } from '../../types/EventHandlers';
import { Modifiers } from '../../types/Modifiers';
import { SelectSingleProviderInternal } from './SelectSingleProviderInternal';

/** Represent the modifiers that are changed by the single selection. */

export type SelectSingleModifiers = Pick<Modifiers, 'selected'>;

/** Represents the value of a [[SelectSingleContext]]. */
export interface SelectSingleContextValue {
  /** The day that has been selected. */
  selected: Date | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectSingleModifiers;
  /** Event handler to attach to the day button to enable the single select. */
  handleDayClick?: DayClickEventHandler;
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

type SelectSingleProviderProps = {
  initialProps: DayPickerProps;
  children: React.ReactNode;
};

/** Provides the values for the [[SelectSingleProvider]]. */
export function SelectSingleProvider(
  props: SelectSingleProviderProps
): JSX.Element {
  if (!isDayPickerSingle(props.initialProps)) {
    const emptyContextValue: SelectSingleContextValue = {
      selected: undefined,
      modifiers: { selected: [] }
    };
    return (
      <SelectSingleContext.Provider value={emptyContextValue}>
        {props.children}
      </SelectSingleContext.Provider>
    );
  }
  return (
    <SelectSingleProviderInternal
      initialProps={props.initialProps}
      children={props.children}
    />
  );
}
