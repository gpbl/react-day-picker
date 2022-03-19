import React, { createContext, ReactNode } from 'react';

import { differenceInCalendarDays, isAfter, isBefore } from 'date-fns';

import { DayPickerProps } from 'types/DayPicker';
import { DayPickerRangeProps, isDayPickerRange } from 'types/DayPickerRange';
import { DayClickEventHandler } from 'types/EventHandlers';
import { DateRange } from 'types/Matchers';
import { InternalModifier, Modifiers } from 'types/Modifiers';

import { addToRange } from './utils/addToRange';

/** Represent the modifiers that are changed by the range selection. */
export type SelectRangeModifiers = Pick<
  Modifiers,
  | InternalModifier.Disabled
  | InternalModifier.RangeEnd
  | InternalModifier.RangeMiddle
  | InternalModifier.RangeStart
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
export const SelectRangeContext = createContext<
  SelectRangeContextValue | undefined
>(undefined);

type SelectRangeProviderProps = {
  initialProps: DayPickerProps;
  children: ReactNode;
};

/** Provides the values for the [[SelectRangeProvider]]. */
export function SelectRangeProvider(
  props: SelectRangeProviderProps
): JSX.Element {
  if (!isDayPickerRange(props.initialProps)) {
    const emptyContextValue: SelectRangeContextValue = {
      selected: undefined,
      modifiers: {
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
  children: ReactNode;
};

export function SelectRangeProviderInternal({
  initialProps,
  children
}: SelectRangeProviderInternalProps): JSX.Element {
  const { selected } = initialProps;
  const { from: selectedFrom, to: selectedTo } = selected || {};
  const min = initialProps.min;
  const max = initialProps.max;

  const onDayClick: DayClickEventHandler = (day, activeModifiers, e) => {
    initialProps.onDayClick?.(day, activeModifiers, e);
    const range = addToRange(day, selected);
    if (
      (min || max) &&
      selected &&
      range?.to &&
      range.from &&
      range.from !== range.to
    ) {
      const diff = Math.abs(differenceInCalendarDays(range?.to, range?.from));
      if ((min && diff < min) || (max && diff >= max)) {
        return;
      }
    }
    initialProps.onSelect?.(range, day, activeModifiers, e);
  };

  const modifiers: SelectRangeModifiers = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };

  if (selectedFrom) {
    modifiers.range_start = [selectedFrom];
    if (!selectedTo) {
      modifiers.range_end = [selectedFrom];
    } else {
      modifiers.range_end = [selectedTo];
      modifiers.range_middle = [
        {
          after: selectedFrom,
          before: selectedTo
        }
      ];
    }
  }

  if (min && selectedFrom && selectedTo) {
    modifiers.disabled.push((date: Date) => {
      return (
        (isBefore(date, selectedFrom) &&
          differenceInCalendarDays(selectedFrom, date) < min) ||
        (isAfter(date, selectedTo) &&
          differenceInCalendarDays(date, selectedFrom) < min)
      );
    });
  }

  if (max && selectedFrom && selectedTo) {
    modifiers.disabled.push((date: Date) => {
      return (
        (isBefore(date, selectedFrom) &&
          differenceInCalendarDays(selectedTo, date) >= max) ||
        (isAfter(date, selectedTo) &&
          differenceInCalendarDays(date, selectedFrom) >= max)
      );
    });
  }

  return (
    <SelectRangeContext.Provider value={{ selected, onDayClick, modifiers }}>
      {children}
    </SelectRangeContext.Provider>
  );
}
