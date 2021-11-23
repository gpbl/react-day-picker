import * as React from 'react';

import { differenceInCalendarDays, isAfter, isBefore } from 'date-fns';

import { useControlledValue } from '../../hooks/useControlledValue';
import {
  DateRange,
  DayClickEventHandler,
  DayPickerProps,
  isDayPickerRange
} from '../../types';

import { SelectRangeContext, SelectRangeModifiers } from './SelectRangeContext';
import { addToRange } from './utils/addToRange';

/** Provides the values for the [[SelectRangeProvider]]. */
export function SelectRangeProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  const [selected, setSelected] = useControlledValue<DateRange | undefined>(
    initialProps.defaultSelected,
    initialProps.selected
  );

  const modifiers: SelectRangeModifiers = {
    selected: [],
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };

  if (!isDayPickerRange(initialProps)) {
    const contextValue = { selected: undefined, modifiers };
    return (
      <SelectRangeContext.Provider value={contextValue}>
        {children}
      </SelectRangeContext.Provider>
    );
  }

  const min = initialProps.min;
  const max = initialProps.max;

  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
    initialProps.onDayClick?.(day, modifiers, e);
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
  const contextValue = { selected, handleDayClick, modifiers };
  return (
    <SelectRangeContext.Provider value={contextValue}>
      {children}
    </SelectRangeContext.Provider>
  );
}
