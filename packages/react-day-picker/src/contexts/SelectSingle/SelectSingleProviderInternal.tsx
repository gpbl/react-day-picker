import React from 'react';
import { DayClickEventHandler, DayPickerSingleProps } from '../../types';
import { SelectSingleContextValue } from './';
import {
  SelectSingleContext,
  SelectSingleModifiers
} from './SelectSingleContext';

type SelectSingleProviderInternal = {
  initialProps: DayPickerSingleProps;
  children: React.ReactNode;
};

export function SelectSingleProviderInternal({
  initialProps,
  children
}: SelectSingleProviderInternal): JSX.Element {
  const handleDayClick: DayClickEventHandler = (day, dayModifiers, e) => {
    if (dayModifiers.selected && !initialProps.required) {
      initialProps.onSelect?.(undefined, day, dayModifiers, e);
      return;
    }
    initialProps.onSelect?.(day, day, dayModifiers, e);
  };

  const modifiers: SelectSingleModifiers = { selected: [] };

  if (initialProps.selected) {
    modifiers.selected = [initialProps.selected];
  }

  const contextValue: SelectSingleContextValue = {
    selected: initialProps.selected,
    handleDayClick,
    modifiers
  };
  return (
    <SelectSingleContext.Provider value={contextValue}>
      {children}
    </SelectSingleContext.Provider>
  );
}
