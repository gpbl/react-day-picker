import * as React from 'react';

import {
  DayClickEventHandler,
  DayPickerBase,
  DayPickerProps,
  DayPickerSingle,
  isDayPickerSingle
} from '../../types';
import { useControlledValue } from '../../hooks/useControlledValue';

import {
  SelectSingleContext,
  SelectSingleModifiers
} from './SelectSingleContext';

/** Provides the values for the [[SelectSingleProvider]]. */
export function SelectSingleProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  if (!isDayPickerSingle(initialProps)) {
    return (
      <SelectSingleContext.Provider value={EMPTY_SELECT_SINGLE_CONTEXT}>
        {children}
      </SelectSingleContext.Provider>
    );
  }
  return (
    <SelectSingleProviderInternal
      initialProps={initialProps}
      children={children}
    />
  );
}

const EMPTY_SELECT_SINGLE_CONTEXT = {
  selected: undefined,
  modifiers: { selected: [] }
};

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

  return (
    <SelectSingleContext.Provider
      value={{ selected, handleDayClick, modifiers }}
    >
      {children}
    </SelectSingleContext.Provider>
  );
}
