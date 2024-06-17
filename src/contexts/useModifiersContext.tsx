import React, { type ReactElement, createContext, useContext } from "react";

import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";

import { SelectionModifier } from "../UI";
import { CalendarDay } from "../classes";
import type {
  DayModifiers,
  InternalModifier,
  SelectionModifiers
} from "../types";
import { dateMatchModifiers } from "../utils/dateMatchModifiers";

import { useCalendarContext } from "./useCalendarContext";
import { usePropsContext } from "./usePropsContext";
import { useSelection } from "./useSelection";

/**
 * Holds all the modifiers used in the the calendar.
 *
 * Use the Modifiers context in custom component by calling the
 * {@link useModifiers} hook.
 */

export const ModifiersContext = createContext<
  ModifiersContextValue | undefined
>(undefined);

/** Maps of all the modifiers with the calendar days. */
export type ModifiersContextValue = {
  /** List the days with custom modifiers passed via the `modifiers` prop. */
  custom: Record<string, CalendarDay[]>;
  /** List the days with the internal modifiers. */
  internal: Record<InternalModifier, CalendarDay[]>;
  /** List the days with selection modifiers. */
  selection: Record<SelectionModifier, CalendarDay[]>;
  /** Get the modifiers for a given day. */
  getModifiers: (day: CalendarDay) => DayModifiers;
};

function useModifiers(): ModifiersContextValue {
  const {
    disabled,
    hidden,
    modifiers,
    mode,
    onDayClick,
    showOutsideDays,
    today
  } = usePropsContext();

  const calendar = useCalendarContext();

  const { getSelectionModifiers } = useSelection();

  /** Modifiers that are set internally. */
  const internal: Record<InternalModifier, CalendarDay[]> = {
    focused: [],
    outside: [],
    disabled: [],
    hidden: [],
    today: [],
    focusable: []
  };

  /** Custom modifiers that are coming from the `modifiers` props */
  const custom: Record<string, CalendarDay[]> = {};

  /** Modifiers that are coming from the selection */
  const selection: Record<SelectionModifier, CalendarDay[]> = {
    [SelectionModifier.range_end]: [],
    [SelectionModifier.range_middle]: [],
    [SelectionModifier.range_start]: [],
    [SelectionModifier.selected]: []
  };

  for (const day of calendar.days) {
    const { date, displayMonth } = day;

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));

    const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled));

    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden)) ||
      (!showOutsideDays && isOutside);

    const isElementInteractive = mode || onDayClick !== undefined;

    const isFocusable = isElementInteractive && !isDisabled && !isHidden;

    const isToday = isSameDay(date, today);

    if (isOutside) internal.outside.push(day);
    if (isDisabled) internal.disabled.push(day);
    if (isHidden) internal.hidden.push(day);
    if (isFocusable) internal.focusable.push(day);
    if (isToday) internal.today.push(day);

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

    // Add the selection modifiers
    const selectionModifiers = getSelectionModifiers(day);
    for (const name in selectionModifiers) {
      if (!isDisabled && selectionModifiers[name as SelectionModifier]) {
        selection[name as SelectionModifier].push(day);
      }
    }
  }

  const getModifiers = (day: CalendarDay) => {
    const dayModifiers: DayModifiers = {
      focused: false,
      disabled: false,
      focusable: false,
      hidden: false,
      outside: false,
      today: false
    };

    for (const name in internal) {
      const days = internal[name as InternalModifier];
      dayModifiers[name] = days.some((d) => d === day);
    }

    const selectionModifiers: SelectionModifiers = {
      [SelectionModifier.range_end]: false,
      [SelectionModifier.range_middle]: false,
      [SelectionModifier.range_start]: false,
      [SelectionModifier.selected]: false
    };

    for (const name in selection) {
      const days = selection[name as SelectionModifier];
      selectionModifiers[name as SelectionModifier] = days.some(
        (d) => d === day
      );
    }

    const customModifiers: Record<string, boolean> = {};
    for (const name in custom) {
      customModifiers[name] = custom[name].some((d) => d === day);
    }

    return {
      ...selectionModifiers,
      ...dayModifiers,
      ...customModifiers
    };
  };

  return { internal, custom, selection, getModifiers };
}

/**
 * Provide the shared props to the DayPicker components. Must be used as root of
 * the other providers.
 *
 * @private
 */
export function ModifiersContextProvider({
  children
}: {
  children: ReactElement;
}) {
  const modifiers = useModifiers();

  return (
    <ModifiersContext.Provider value={modifiers}>
      {children}
    </ModifiersContext.Provider>
  );
}

/** @group Contexts */
export function useModifiersContext() {
  const modifiersContext = useContext(ModifiersContext);
  if (!modifiersContext) {
    throw new Error(
      "useModifiersContext() must be used within a ModifiersContextProvider"
    );
  }
  return modifiersContext;
}
