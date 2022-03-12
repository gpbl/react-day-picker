import React, { createContext, ReactNode } from 'react';

import { isSameDay } from 'date-fns';

import { DayPickerProps } from 'types/DayPicker';
import {
  DayPickerMultipleProps,
  isDayPickerMultiple
} from 'types/DayPickerMultiple';
import { DayClickEventHandler } from 'types/EventHandlers';
import { InternalModifier, Modifiers } from 'types/Modifiers';

/** Represent the modifiers that are changed by the multiple selection. */
export type SelectMultipleModifiers = Pick<
  Modifiers,
  InternalModifier.Disabled
>;

/** Represents the value of a [[SelectMultipleContext]]. */
export interface SelectMultipleContextValue {
  /** The days that have been selected. */
  selected: Date[] | undefined;
  /** The modifiers for the corresponding selection. */
  modifiers: SelectMultipleModifiers;
  /** Event handler to attach to the day button to enable the multiple select. */
  onDayClick?: DayClickEventHandler;
}

/**
 * The SelectMultiple context shares details about the selected days when in
 * multiple selection mode.
 *
 * Access this context from the [[useSelectMultiple]] hook.
 */
export const SelectMultipleContext = createContext<
  SelectMultipleContextValue | undefined
>(undefined);

export type SelectMultipleProviderProps = {
  initialProps: DayPickerProps;
  children: ReactNode;
};

/** Provides the values for the [[SelectMultipleContext]]. */
export function SelectMultipleProvider(
  props: SelectMultipleProviderProps
): JSX.Element {
  if (!isDayPickerMultiple(props.initialProps)) {
    const emptyContextValue: SelectMultipleContextValue = {
      selected: undefined,
      modifiers: {
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

type SelectMultipleProviderInternalProps = {
  initialProps: DayPickerMultipleProps;
  children: ReactNode;
};

export function SelectMultipleProviderInternal({
  initialProps,
  children
}: SelectMultipleProviderInternalProps): JSX.Element {
  const onDayClick: DayClickEventHandler = (day, activeModifiers, e) => {
    initialProps.onDayClick?.(day, activeModifiers, e);

    const isMinSelected = Boolean(
      activeModifiers.selected &&
        initialProps.min &&
        initialProps.selected &&
        initialProps.selected.length === initialProps.min
    );
    if (isMinSelected) {
      return;
    }

    const isMaxSelected = Boolean(
      !activeModifiers.selected &&
        initialProps.max &&
        initialProps.selected &&
        initialProps.selected.length === initialProps.max
    );
    if (isMaxSelected) {
      return;
    }

    const selectedDays = initialProps.selected
      ? [...initialProps.selected]
      : [];

    if (activeModifiers.selected) {
      const index = selectedDays.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      selectedDays.splice(index, 1);
    } else {
      selectedDays.push(day);
    }
    initialProps.onSelect?.(selectedDays, day, activeModifiers, e);
  };

  const modifiers: SelectMultipleModifiers = {
    disabled: []
  };

  if (initialProps.selected) {
    const disableDay = (day: Date) => {
      const isMaxSelected =
        initialProps.max &&
        initialProps.selected &&
        initialProps.selected.length > initialProps.max - 1;
      const isSelected = initialProps.selected?.some((selectedDay) =>
        isSameDay(selectedDay, day)
      );
      return Boolean(isMaxSelected && !isSelected);
    };
    modifiers.disabled = [disableDay];
  }

  const contextValue = {
    selected: initialProps.selected,
    onDayClick,
    modifiers
  };

  return (
    <SelectMultipleContext.Provider value={contextValue}>
      {children}
    </SelectMultipleContext.Provider>
  );
}
