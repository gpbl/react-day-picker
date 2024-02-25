import type { ReactNode } from "react";
import { createContext, useContext } from "react";

import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";

import { CalendarDay } from "../../classes";
import { useCalendar } from "../../contexts/CalendarContext";
import { useDayPicker } from "../../contexts/DayPickerContext";
import { useSelection } from "../../contexts/SelectionContext";
import type { InternalModifier, Modifiers, ModifiersMap } from "../../types";
import { dateMatchModifiers } from "./utils/dateMatchModifiers";

/** A record with `data-*` attributes passed to `<DayPicker />`. */
export type DataAttributes = Record<`data-${string}`, unknown>;

/** Access the modifiers of the calendar. */
export interface ModifiersContext {
  /** Return the modifiers of the specified day. */
  getModifiers: (day: CalendarDay) => Modifiers;
  /** A map of all the modifiers. */
  modifiersMap: ModifiersMap;
}

const modifiersContext = createContext<ModifiersContext | undefined>(undefined);

/** @private */
export function ModifiersProvider({ children }: { children: ReactNode }) {
  const dayPicker = useDayPicker();
  const calendar = useCalendar();
  const selection = useSelection();

  /** Modifiers that are set internally. */
  const internal: Record<InternalModifier, CalendarDay[]> = {
    outside: [],
    disabled: [],
    hidden: [],
    today: [],
    focusable: [],
    selected: [],
    excluded: [],
    range_start: [],
    range_middle: [],
    range_end: [],
  };

  /** Custom modifiers that are coming from the `modifiers` props */
  const custom: Record<string, CalendarDay[]> = {};

  for (const day of calendar.days) {
    const { date, displayMonth } = day;

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));

    const isDisabled = Boolean(
      dayPicker.disabled && dateMatchModifiers(date, dayPicker.disabled),
    );

    const isSelected =
      selection.isSelected(date) ||
      Boolean(
        dayPicker.modifiers?.selected &&
          dateMatchModifiers(date, dayPicker.modifiers.selected),
      );

    const isHidden =
      Boolean(dayPicker.hidden && dateMatchModifiers(date, dayPicker.hidden)) ||
      (!dayPicker.showOutsideDays && isOutside);

    const isExcluded = selection.isExcluded(date);

    const isFocusable = !isDisabled && !isHidden && !isExcluded;

    const isToday = isSameDay(date, dayPicker.today);

    if (isOutside) internal.outside.push(day);
    if (isDisabled) internal.disabled.push(day);
    if (isHidden) internal.hidden.push(day);
    if (isFocusable) internal.focusable.push(day);
    if (isSelected) internal.selected.push(day);
    if (isExcluded) internal.excluded.push(day);
    if (isToday) internal.today.push(day);

    // Now add custom modifiers
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

  const getModifiers = (day: CalendarDay) => {
    const modifiers: Modifiers = {
      disabled: false,
      excluded: false,
      focusable: false,
      hidden: false,
      outside: false,
      range_end: false,
      range_middle: false,
      range_start: false,
      selected: false,
      today: false,
    };

    for (const name in internal) {
      const daysWithModifier = internal[name as InternalModifier];
      modifiers[name] = daysWithModifier.some((d) => d === day);
    }

    for (const name in custom) {
      // This will override the internal modifiers with the same name, as intended
      modifiers[name] = custom[name].some((d) => d === day);
    }
    return modifiers;
  };

  const modifiersMap: ModifiersMap = { ...internal, ...custom };

  const value: ModifiersContext = { modifiersMap, getModifiers };

  return (
    <modifiersContext.Provider value={value}>
      {children}
    </modifiersContext.Provider>
  );
}

/**
 * Use this hook to access the {@link ModifiersContext} from custom components.
 *
 * @group Custom Components Hooks
 * @see http://localhost:2001/docs/custom-components
 */
export function useModifiers(): ModifiersContext {
  const context = useContext(modifiersContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
