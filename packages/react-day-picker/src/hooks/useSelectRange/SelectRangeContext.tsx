import React from 'react';

import { differenceInCalendarDays, isAfter, isBefore } from 'date-fns';
import {
  DateRange,
  DayClickEventHandler,
  DayPickerProps,
  Matcher,
  ModifiersArray
} from 'types';

import { addToRange } from './utils/addToRange';

export interface SelectRange {
  selected: DateRange | undefined;
  handleDayClick: DayClickEventHandler;
  modifiers: {
    selected?: Matcher[];
    disabled?: Matcher[];
    range_start?: Matcher[];
    range_middle?: Matcher[];
    range_end?: Matcher[];
  };
}

export const SelectRangeContext = React.createContext<SelectRange | undefined>(
  undefined
);

/** Return the context for the controlled mode selection. */
export function SelectRangeProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  let initialSelected;
  let min: number | undefined, max: number | undefined;
  if (initialProps.mode === 'range') {
    initialSelected = initialProps.defaultSelected;
    min = initialProps.min;
    max = initialProps.max;
  }
  const [selected, setSelected] = React.useState<DateRange | undefined>(
    initialSelected
  );

  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
    initialProps.onDayClick?.(day, modifiers, e);
    if (initialProps.mode !== 'range') {
      return;
    }
    const newValue = addToRange(day, selected);
    if (
      (min || max) &&
      selected &&
      newValue?.to &&
      newValue.from &&
      newValue.from !== newValue.to
    ) {
      const diff = Math.abs(
        differenceInCalendarDays(newValue?.to, newValue?.from)
      );
      if (min && diff < min) {
        return;
      }
      if (max && diff >= max) {
        return;
      }
    }
    setSelected(newValue);
    initialProps.onSelect?.(newValue, day, modifiers, e);
  };

  const modifiers: ModifiersArray = {};
  if (selected) {
    modifiers.selected = [selected];
    if (selected.from) {
      modifiers.range_start = [selected.from];
      if (selected.to) {
        modifiers.range_middle = [
          {
            after: selected.from,
            before: selected.to
          }
        ];
        if (max || min) {
          modifiers.disabled = [
            (date: Date) => {
              if (
                max &&
                selected.to &&
                selected.from &&
                isBefore(date, selected.from)
              ) {
                const diff = differenceInCalendarDays(selected.to, date);
                if (diff >= max) {
                  return true;
                }
              }
              if (
                max &&
                selected.to &&
                selected.from &&
                isAfter(date, selected.to)
              ) {
                const diff = differenceInCalendarDays(date, selected.from);
                if (diff >= max) {
                  return true;
                }
              }
              if (min && selected.from && isBefore(date, selected.from)) {
                const diff = differenceInCalendarDays(selected.from, date);
                if (diff < min) {
                  return true;
                }
              }
              if (
                min &&
                selected.to &&
                selected.from &&
                isAfter(date, selected.to)
              ) {
                const diff = differenceInCalendarDays(date, selected.from);
                if (diff < min) {
                  return true;
                }
              }
              return false;
            }
          ];
        }
        modifiers.range_end = [selected.to];
      } else {
        modifiers.range_end = [selected.from];
      }
    }
  }

  return (
    <SelectRangeContext.Provider
      value={{ selected, handleDayClick, modifiers }}
    >
      {children}
    </SelectRangeContext.Provider>
  );
}
