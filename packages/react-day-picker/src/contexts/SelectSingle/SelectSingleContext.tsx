import React from 'react';

import { DayPickerProps } from '../../types/DayPicker';
import {
  DayPickerSingleProps,
  isDayPickerSingle
} from '../../types/DayPickerSingle';
import { DayClickEventHandler } from '../../types/EventHandlers';

/** Represents the value of a [[SelectSingleContext]]. */
export interface SelectSingleContextValue {
  /** The day that has been selected. */
  selected: Date | undefined;
  /** Event handler to attach to the day button to enable the single select. */
  onDayClick?: DayClickEventHandler;
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
      selected: undefined
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

type SelectSingleProviderInternal = {
  initialProps: DayPickerSingleProps;
  children: React.ReactNode;
};

export function SelectSingleProviderInternal({
  initialProps,
  children
}: SelectSingleProviderInternal): JSX.Element {
  const onDayClick: DayClickEventHandler = (day, dayModifiers, e) => {
    if (dayModifiers.selected && !initialProps.required) {
      initialProps.onSelect?.(undefined, day, dayModifiers, e);
      return;
    }
    initialProps.onSelect?.(day, day, dayModifiers, e);
  };

  const contextValue: SelectSingleContextValue = {
    selected: initialProps.selected,
    onDayClick
  };
  return (
    <SelectSingleContext.Provider value={contextValue}>
      {children}
    </SelectSingleContext.Provider>
  );
}
