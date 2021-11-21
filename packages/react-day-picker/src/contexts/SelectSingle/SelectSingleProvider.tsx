import * as React from 'react';

import {
  DayClickEventHandler,
  DayPickerProps,
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
  const [selected, setSelected] = useControlledValue<Date | undefined>(
    initialProps.defaultSelected,
    initialProps.selected
  );

  const modifiers: SelectSingleModifiers = { selected: [] };

  if (!isDayPickerSingle(initialProps)) {
    const contextValue = { selected: undefined, modifiers };
    return (
      <SelectSingleContext.Provider value={contextValue}>
        {children}
      </SelectSingleContext.Provider>
    );
  }

  if (selected) {
    modifiers.selected = [selected];
  }

  const handleDayClick: DayClickEventHandler = (day, dayModifiers, e) => {
    if (!isDayPickerSingle(initialProps)) return;

    if (dayModifiers.selected && !initialProps.required) {
      setSelected(undefined);
      initialProps.onSelect?.(undefined, day, dayModifiers, e);
      return;
    }
    setSelected(day);
    initialProps.onSelect?.(day, day, dayModifiers, e);
  };

  const contextValue = { selected, handleDayClick, modifiers };
  return (
    <SelectSingleContext.Provider value={contextValue}>
      {children}
    </SelectSingleContext.Provider>
  );
}
