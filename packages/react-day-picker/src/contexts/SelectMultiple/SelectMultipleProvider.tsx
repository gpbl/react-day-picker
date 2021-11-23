import * as React from 'react';
import { isSameDay } from 'date-fns';

import { useControlledValue } from '../../hooks/useControlledValue';
import {
  DayClickEventHandler,
  DayPickerProps,
  isDayPickerMultiple
} from '../../types';

import {
  SelectMultipleContext,
  SelectMultipleModifiers
} from './SelectMultipleContext';

/** Provides the values for the [[SelectMultipleContext]]. */
export function SelectMultipleProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  const [selectedDays, setSelectedDays] = useControlledValue<
    Date[] | undefined
  >(initialProps.defaultSelected, initialProps.selected);

  const modifiers: SelectMultipleModifiers = {
    selected: [],
    disabled: []
  };

  if (!isDayPickerMultiple(initialProps)) {
    const contextValue = { selected: undefined, modifiers };
    return (
      <SelectMultipleContext.Provider value={contextValue}>
        {children}
      </SelectMultipleContext.Provider>
    );
  }

  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
    if (!isDayPickerMultiple(initialProps)) {
      return;
    }
    initialProps.onDayClick?.(day, modifiers, e);

    const isMinSelected = Boolean(
      initialProps.min &&
        modifiers.selected &&
        selectedDays &&
        selectedDays.length === initialProps.min
    );
    if (isMinSelected) {
      return;
    }
    const isMaxSelected = Boolean(
      initialProps.max &&
        !modifiers.selected &&
        selectedDays &&
        selectedDays.length === initialProps.max
    );
    if (isMaxSelected) {
      return;
    }

    const days = selectedDays ? [...selectedDays] : [];
    if (modifiers.selected) {
      const index = days.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    setSelectedDays(days);
    initialProps.onSelect?.(days, day, modifiers, e);
  };

  if (selectedDays && isDayPickerMultiple(initialProps)) {
    modifiers.selected = selectedDays;
    modifiers.disabled = [
      function disableDay(day: Date) {
        const isMaxSelected =
          initialProps.max && selectedDays.length > initialProps.max - 1;
        const isSelected = selectedDays.some((selectedDay) =>
          isSameDay(selectedDay, day)
        );
        return Boolean(isMaxSelected && !isSelected);
      }
    ];
  }

  const contextValue = { selected: selectedDays, handleDayClick, modifiers };
  return (
    <SelectMultipleContext.Provider value={contextValue}>
      {children}
    </SelectMultipleContext.Provider>
  );
}
