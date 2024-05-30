import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";

import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";

import type { CalendarDay } from "../classes";
import type {
  DayModifiers,
  InternalModifier,
  CalendarModifiers
} from "../types";
import { dateMatchModifiers } from "../utils/dateMatchModifiers";

import { useCalendar } from "./calendar";
import { useProps } from "./props";
import { useSelection } from "./selection";

/**
 * Holds all the modifiers used in the the calendar.
 *
 * Use the Modifiers context in custom component by calling the
 * {@link useModifiers} hook.
 *
 * @group Contexts
 */
export interface ModifiersContext {
  /** Return the modifiers of the specified day. */
  getModifiers: (day: CalendarDay) => DayModifiers;
  /** A map of all the modifiers used by the calendar. */
  calendarModifiers: CalendarModifiers;
}

const modifiersContext = createContext<ModifiersContext | undefined>(undefined);

/** @private */
export function ModifiersProvider({ children }: { children: ReactNode }) {
  const {
    disabled,
    hidden,
    modifiers,
    mode,
    onDayClick,
    showOutsideDays,
    today
  } = useProps();
  const calendar = useCalendar();
  const selection = useSelection();

  /** Modifiers that are set internally. */
  const internal: Record<InternalModifier, CalendarDay[]> = {
    focused: [],
    outside: [],
    disabled: [],
    hidden: [],
    today: [],
    focusable: [],
    selected: [],
    range_start: [],
    range_middle: [],
    range_end: []
  };

  /** Custom modifiers that are coming from the `modifiers` props */
  const custom: Record<string, CalendarDay[]> = {};

  for (const day of calendar.days) {
    const { date, displayMonth } = day;

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));

    const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled));

    const isSelected =
      !isDisabled &&
      (selection.isSelected(date) ||
        Boolean(
          modifiers?.selected && dateMatchModifiers(date, modifiers.selected)
        ));

    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden)) ||
      (!showOutsideDays && isOutside);

    const isInteractive =
      mode !== "default" || (mode === "default" && onDayClick !== undefined);

    const isFocusable = isInteractive && !isDisabled && !isHidden;

    const isToday = isSameDay(date, today);

    const isStartOfRange = selection.isStartOfRange(date);
    const isEndOfRange = selection.isEndOfRange(date);
    const isMiddleOfRange = selection.isMiddleOfRange(date);

    if (isOutside) internal.outside.push(day);
    if (isDisabled) internal.disabled.push(day);
    if (isHidden) internal.hidden.push(day);
    if (isFocusable) internal.focusable.push(day);
    if (isSelected) internal.selected.push(day);
    if (isToday) internal.today.push(day);
    if (isStartOfRange) internal.range_start.push(day);
    if (isEndOfRange) internal.range_end.push(day);
    if (isMiddleOfRange) internal.range_middle.push(day);

    // Now add custom modifiers
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers?.[name];
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
    const modifiers: DayModifiers = {
      focused: false,
      disabled: false,
      focusable: false,
      hidden: false,
      outside: false,
      range_end: false,
      range_middle: false,
      range_start: false,
      selected: false,
      today: false
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

  const calendarModifiers: CalendarModifiers = { ...internal, ...custom };

  const value: ModifiersContext = {
    calendarModifiers,
    getModifiers
  };

  return (
    <modifiersContext.Provider value={value}>
      {children}
    </modifiersContext.Provider>
  );
}

/**
 * Access the modifiers used by the calendar.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function useModifiers(): ModifiersContext {
  const context = useContext(modifiersContext);
  if (!context)
    throw new Error(`useProps must be used within a PropsProvider.`);

  return context;
}
