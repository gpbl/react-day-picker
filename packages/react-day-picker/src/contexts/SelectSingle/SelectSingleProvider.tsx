import * as React from 'react';

import { useControlledValue } from '../../hooks/useControlledValue';
import {
  DayClickEventHandler,
  DayPickerBase,
  DayPickerProps,
  DayPickerSingle,
  isDayPickerSingle
} from '../../types';
import { SelectSingleContextValue } from './';
import {
  SelectSingleContext,
  SelectSingleModifiers
} from './SelectSingleContext';

export function SelectSingleProviderInternal({
  initialProps,
  children
}: {
  initialProps: DayPickerBase & DayPickerSingle;
  children: React.ReactNode;
}): JSX.Element {
  const [selected, setSelected] = useControlledValue(
    initialProps.defaultSelected,
    initialProps.selected
  );

  const handleDayClick: DayClickEventHandler = (day, dayModifiers, e) => {
    if (dayModifiers.selected && !initialProps.required) {
      setSelected(undefined);
      initialProps.onSelect?.(undefined, day, dayModifiers, e);
      return;
    }
    setSelected(day);
    initialProps.onSelect?.(day, day, dayModifiers, e);
  };

  const modifiers: SelectSingleModifiers = { selected: [] };

  if (selected) {
    modifiers.selected = [selected];
  }

  const contextValue: SelectSingleContextValue = {
    selected,
    handleDayClick,
    modifiers
  };
  return (
    <SelectSingleContext.Provider value={contextValue}>
      {children}
    </SelectSingleContext.Provider>
  );
}

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
