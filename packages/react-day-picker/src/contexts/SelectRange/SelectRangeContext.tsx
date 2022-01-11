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

const createOnDayClick =
  (
    initialProps: DayPickerRangeProps,
    selected?: DateRange
  ): DayClickEventHandler =>
  (day, modifiers, e) => {
    initialProps.onDayClick?.(day, modifiers, e);
    const newValue = addToRange(day, selected);
    const min = initialProps.min;
    const max = initialProps.max;

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

export const createDisabled =
  (from: Date, to: Date, min?: number, max?: number) => (date: Date) => {
    if (max && isBefore(date, from)) {
      const diff = differenceInCalendarDays(to, date);
      if (diff >= max) {
        return true;
      }
    }
    if (max && isAfter(date, to)) {
      const diff = differenceInCalendarDays(date, from);
      if (diff >= max) {
        return true;
      }
    }
    if (min && isBefore(date, to) && isAfter(date, from)) {
      const diff = differenceInCalendarDays(date, from);
      if (diff < min) {
        return true;
      }
    }
    if (min && isBefore(date, from)) {
      const diff = differenceInCalendarDays(to, date);
      if (diff < min) {
        return true;
      }
    }
    if (min && isAfter(date, to)) {
      const diff = differenceInCalendarDays(date, from);
      if (diff < min) {
        return true;
      }
    }
    return false;
  };

type SelectRangeProviderInternalProps = {
  initialProps: DayPickerRangeProps;
  children: ReactNode;
};

export function SelectRangeProviderInternal({
  initialProps,
  children
}: SelectRangeProviderInternalProps): JSX.Element {
  const { selected, min, max } = initialProps;

  const onDayClick: DayClickEventHandler = createOnDayClick(
    initialProps,
    selected
  );

  const modifiers: SelectRangeModifiers = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };

  if (selected) {
    if (selected.from) {
      const from = selected.from;
      const to = selected.to || selected.from;
      modifiers.range_start = [from];
      modifiers.range_middle = [
        {
          after: from,
          before: to
        }
      ];
      if (max || min) {
        modifiers.disabled = [createDisabled(from, to, min, max)];
      }
      modifiers.range_end = [to];
    }
  }
  return (
    <SelectRangeContext.Provider value={{ selected, onDayClick, modifiers }}>
      {children}
    </SelectRangeContext.Provider>
  );
}
