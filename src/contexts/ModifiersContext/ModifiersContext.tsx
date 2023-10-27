import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { isSameDay, isSameMonth } from 'date-fns';

import type { DayPickerDay } from '../../contexts/CalendarContext';
import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useSelection } from '../../contexts/SelectionContext';
import type { InternalModifier, Modifiers } from '../../types';
import { dateMatchModifiers } from './utils/dateMatchModifiers';

/** A record with `data-*` attributes passed to {@link DayPicker}. */
export type DataAttributes = Record<string, unknown>;

/**
 * The {@link DayPickerProps} with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export interface ModifiersContext {
  getDayModifiers: (day: DayPickerDay) => Modifiers;
  days: Record<InternalModifier, DayPickerDay[]>;
}

export const modifiersContext = createContext<ModifiersContext | undefined>(
  undefined
);

/**
 * The provider for the {@link modifiersContext}, storing the state of the day modifiers.
 */
export function ModifiersProvider({ children }: { children: ReactNode }) {
  const { disabled, hidden, showOutsideDays, today, modifiers } =
    useDayPicker();
  const calendarDays = useCalendar().getDays();
  const selection = useSelection();

  const dayModifiers: Record<InternalModifier, DayPickerDay[]> = {
    outside: [],
    disabled: [],
    hidden: [],
    today: [],
    selected: [],
    range_start: [],
    range_middle: [],
    range_end: []
  };
  for (const day of calendarDays) {
    const { date, displayMonth } = day;

    // TODO: custom styles
    // const dayStateFromModifiers =
    //   modifiers &&
    //   Object.keys(modifiers).reduce((previousValue, modifier) => {
    //     const modifierValue = modifiers?.[modifier];
    //     previousValue[modifier] =
    //       modifierValue && dateMatchModifiers(date, modifierValue);
    //     return previousValue;
    //   }, {} as Record<CustomModifier, boolean>);

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
    const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled));
    const isSelected = Boolean(
      modifiers?.selected && dateMatchModifiers(date, modifiers.selected)
    );
    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden)) ||
      (!showOutsideDays && isOutside);

    if (isOutside) {
      dayModifiers.outside.push(day);
    }
    if (isDisabled) {
      dayModifiers.disabled.push(day);
    }
    if (isHidden) {
      dayModifiers.hidden.push(day);
    }
    if (selection?.isSelected(date) || isSelected) {
      dayModifiers.selected.push(day);
    }
    if (isSameDay(date, today)) {
      dayModifiers.today.push(day);
    }
  }

  const getDayModifiers = (day: DayPickerDay) => {
    const matchingModifiers: Modifiers = {
      outside: false,
      disabled: false,
      hidden: false,
      today: false,
      selected: false,
      range_start: false,
      range_middle: false,
      range_end: false
    };

    for (const modifierName in dayModifiers) {
      const daysWithModifier = dayModifiers[modifierName as InternalModifier];
      if (daysWithModifier.find((d) => d === day)) {
        matchingModifiers[modifierName] = true;
      }
    }

    return matchingModifiers;
  };

  const context = { days: dayModifiers, getDayModifiers };
  return (
    <modifiersContext.Provider value={context}>
      {children}
    </modifiersContext.Provider>
  );
}

/**
 * Use this hook to access to the DayPicker context within custom components. */
export function useModifiers() {
  const context = useContext(modifiersContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
