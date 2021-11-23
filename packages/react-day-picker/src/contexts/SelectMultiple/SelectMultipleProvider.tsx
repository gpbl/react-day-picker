import * as React from 'react';

import { isSameDay } from 'date-fns';

import { useControlledValue } from '../../hooks/useControlledValue';
import {
  DayClickEventHandler,
  DayPickerBase,
  DayPickerMultiple,
  DayPickerProps,
  isDayPickerMultiple
} from '../../types';
import {
  SelectMultipleContext,
  SelectMultipleContextValue,
  SelectMultipleModifiers
} from './SelectMultipleContext';

function SelectMultipleProviderInternal({
  initialProps,
  children
}: {
  initialProps: DayPickerBase & DayPickerMultiple;
  children: React.ReactNode;
}): JSX.Element {
  const [selectedDays, setSelectedDays] = useControlledValue(
    initialProps.defaultSelected,
    initialProps.selected
  );

  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
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

  const modifiers: SelectMultipleModifiers = {
    selected: [],
    disabled: []
  };

  if (selectedDays) {
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

type SelectMultipleProviderProps = {
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
