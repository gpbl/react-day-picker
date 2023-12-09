import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { isSameDay, isSameMonth } from 'date-fns';

import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useSelection } from '../../contexts/SelectionContext';
import { dateMatchModifiers } from './utils/dateMatchModifiers';
import { Day } from '../../classes';
import type { InternalModifier, Modifiers } from '../../types';

/** A record with `data-*` attributes passed to `DayPicker`. */
export type DataAttributes = Record<string, unknown>;

/**
 * The `DayPickerProps` with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
export interface ModifiersContext {
  getModifiers: (day: Day) => Modifiers;
  modifiers: Record<string, Day[]>;
}

export const modifiersContext = createContext<ModifiersContext | undefined>(
  undefined
);

/**
 * The provider for the `modifiersContext`, storing the state of the day modifiers.
 */
export function ModifiersProvider({ children }: { children: ReactNode }) {
  const dayPicker = useDayPicker();
  const calendar = useCalendar();
  const selection = useSelection();

  /** Modifiers that are set internally. */
  const internal: Record<InternalModifier, Day[]> = {
    outside: [],
    disabled: [],
    hidden: [],
    today: [],
    selected: [],
    excluded: [],
    range_start: [],
    range_middle: [],
    range_end: []
  };

  /** Custom modifiers that are coming from the `modifiers` props */
  const custom: Record<string, Day[]> = {};

  for (const day of calendar.days) {
    const { date, displayMonth } = day;
    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
    const isDisabled = Boolean(
      dayPicker.disabled && dateMatchModifiers(date, dayPicker.disabled)
    );

    const isSelected = Boolean(
      dayPicker.modifiers?.selected &&
        dateMatchModifiers(date, dayPicker.modifiers.selected)
    );

    const isHidden =
      Boolean(dayPicker.hidden && dateMatchModifiers(date, dayPicker.hidden)) ||
      (!dayPicker.showOutsideDays && isOutside);

    if (isOutside) {
      internal.outside.push(day);
    }
    if (isDisabled) {
      internal.disabled.push(day);
    }
    if (isHidden) {
      internal.hidden.push(day);
    }
    if (selection.isSelected(date) || isSelected) {
      internal.selected.push(day);
    }
    if (selection.isExcluded(date)) {
      internal.excluded.push(day);
    }
    if (isSameDay(date, dayPicker.today)) {
      internal.today.push(day);
    }

    // Custom modifiers
    if (dayPicker.modifiers) {
      Object.keys(dayPicker.modifiers).forEach((name) => {
        const modifierValue = dayPicker.modifiers?.[name];
        const isMatch = modifierValue
          ? dateMatchModifiers(date, modifierValue)
          : false;
        if (!isMatch) return;
        if (custom[name]) {
          custom[name].push(day);
        } else {
          custom[name] = [day];
        }
      });
    }
  }

  const getModifiers = (day: Day) => {
    const modifiers: Modifiers = {
      outside: false,
      disabled: false,
      hidden: false,
      today: false,
      selected: false,
      excluded: false,
      range_start: false,
      range_middle: false,
      range_end: false
    };

    for (const name in internal) {
      const daysWithModifier = internal[name as InternalModifier];
      modifiers[name] = daysWithModifier.some((d) => d.date === day.date);
    }

    for (const name in custom) {
      // This will override the internal modifiers with the same name, as intended
      modifiers[name] = custom[name].some((d) => d === day);
    }
    return modifiers;
  };

  const modifiers = { ...internal, ...custom };

  const value: ModifiersContext = { modifiers, getModifiers };

  return (
    <modifiersContext.Provider value={value}>
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
