import React from 'react';
import { isSameDay } from 'date-fns';
import { DayClickEventHandler, DayPickerMultipleProps } from '../../types';
import {
  SelectMultipleContext,
  SelectMultipleModifiers
} from './SelectMultipleContext';

type SelectMultipleProviderInternalProps = {
  initialProps: DayPickerMultipleProps;
  children: React.ReactNode;
};

export function SelectMultipleProviderInternal({
  initialProps,
  children
}: SelectMultipleProviderInternalProps): JSX.Element {
  const { selected } = initialProps;
  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
    initialProps.onDayClick?.(day, modifiers, e);

    const isMinSelected = Boolean(
      initialProps.min &&
        modifiers.selected &&
        selected &&
        selected.length === initialProps.min
    );
    if (isMinSelected) {
      return;
    }
    const isMaxSelected = Boolean(
      initialProps.max &&
        !modifiers.selected &&
        selected &&
        selected.length === initialProps.max
    );
    if (isMaxSelected) {
      return;
    }

    const days = selected ? [...selected] : [];
    if (modifiers.selected) {
      const index = days.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    initialProps.onSelect?.(days, day, modifiers, e);
  };

  const modifiers: SelectMultipleModifiers = {
    selected: [],
    disabled: []
  };

  if (selected) {
    modifiers.selected = selected;
    modifiers.disabled = [
      function disableDay(day: Date) {
        const isMaxSelected =
          initialProps.max &&
          selected &&
          selected.length > initialProps.max - 1;
        const isSelected = selected?.some((selectedDay) =>
          isSameDay(selectedDay, day)
        );
        return Boolean(isMaxSelected && !isSelected);
      }
    ];
  }

  const contextValue = { selected, handleDayClick, modifiers };

  return (
    <SelectMultipleContext.Provider value={contextValue}>
      {children}
    </SelectMultipleContext.Provider>
  );
}
