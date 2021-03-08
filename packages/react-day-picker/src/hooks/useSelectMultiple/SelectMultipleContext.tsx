import React from 'react';

import { isSameDay } from 'date-fns';
import {
  DayClickEventHandler,
  DayPickerProps,
  Matcher,
  ModifiersArray
} from 'types';

export interface SelectMultiple {
  selected: Date[] | undefined;
  handleDayClick: DayClickEventHandler;
  modifiers: {
    selected?: Matcher[];
    disabled?: Matcher[];
  };
}

export const SelectMultipleContext = React.createContext<
  SelectMultiple | undefined
>(undefined);

/** Return the context for the controlled mode selection. */
export function SelectMultipleProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  let initialSelected;
  if (initialProps.mode === 'multiple') {
    initialSelected = initialProps.defaultSelected;
  }
  const [selectedDays, setSelectedDays] = React.useState<Date[] | undefined>(
    initialSelected || undefined
  );

  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
    if (initialProps.mode !== 'multiple') {
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

  const modifiers: ModifiersArray = {};
  if (selectedDays && initialProps.mode === 'multiple') {
    modifiers.selected = selectedDays;
    console.log('here', 'selected');
    modifiers.disabled = [
      function XY(day: Date) {
        const isMaxSelected =
          initialProps.max && selectedDays.length > initialProps.max - 1;
        const isSelected = selectedDays.some((selectedDay) =>
          isSameDay(selectedDay, day)
        );
        console.log('isSelected', isSelected);
        console.log('isMaxSelected', isMaxSelected);
        return Boolean(isMaxSelected && !isSelected);
      }
    ];
  }

  return (
    <SelectMultipleContext.Provider
      value={{ selected: selectedDays, handleDayClick, modifiers }}
    >
      {children}
    </SelectMultipleContext.Provider>
  );
}
