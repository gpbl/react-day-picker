import React from 'react';

import { differenceInCalendarDays, isAfter, isBefore } from 'date-fns';

import {
  DateRange,
  DayClickEventHandler,
  DayPickerProps,
  DayPickerRangeProps,
  isDayPickerRange,
  Modifiers
} from '../../types';
import { addToRange } from './utils/addToRange';

/** Represent the modifiers that are changed by the range selection. */
export type SelectRangeModifiers = Pick<
  Modifiers,
  'selected' | 'range_start' | 'range_end' | 'range_middle' | 'disabled'
>;

/** Represents the value of a [[SelectRangeContext]]. */
export interface SelectRangeContextValue {
  /** The range of days that has been selected. */
  selected: DateRange | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectRangeModifiers;
  /** Event handler to attach to the day button to enable the range select. */
  onDayClick?: DayClickEventHandler;
}

/**
 * The SelectRange context shares details about the selected days when in
 * range selection mode.
 *
 * Access this context from the [[useSelectRange]] hook.
 */
export const SelectRangeContext = React.createContext<
  SelectRangeContextValue | undefined
>(undefined);

type SelectRangeProviderProps = {
  initialProps: DayPickerProps;
  children: React.ReactNode;
};

/** Provides the values for the [[SelectRangeProvider]]. */
export function SelectRangeProvider(
  props: SelectRangeProviderProps
): JSX.Element {
  if (!isDayPickerRange(props.initialProps)) {
    const emptyContextValue: SelectRangeContextValue = {
      selected: undefined,
      modifiers: {
        selected: [],
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return (
      <SelectRangeContext.Provider value={emptyContextValue}>
        {props.children}
      </SelectRangeContext.Provider>
    );
  }
  return (
    <SelectRangeProviderInternal
      initialProps={props.initialProps}
      children={props.children}
    />
  );
}

type SelectRangeProviderInternalProps = {
  initialProps: DayPickerRangeProps;
  children: React.ReactNode;
};

export function SelectRangeProviderInternal({
  initialProps,
  children
}: SelectRangeProviderInternalProps): JSX.Element {
  const { selected } = initialProps;
  const min = initialProps.min;
  const max = initialProps.max;

  const onDayClick: DayClickEventHandler = (day, modifiers, e) => {
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
    initialProps.onSelect?.(newValue, day, modifiers, e);
  };

  const modifiers: SelectRangeModifiers = {
    selected: [],
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
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
  return (
    <SelectRangeContext.Provider value={{ selected, onDayClick, modifiers }}>
      {children}
    </SelectRangeContext.Provider>
  );
}
