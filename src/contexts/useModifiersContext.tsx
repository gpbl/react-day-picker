import React, { type ReactElement, createContext, useContext } from "react";

import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";

import { CalendarDay } from "../classes";
import type { DayModifiers, InternalModifier } from "../types";
import { dateMatchModifiers } from "../utils/dateMatchModifiers";

import { useCalendarContext } from "./useCalendarContext";
import { usePropsContext } from "./usePropsContext";

/**
 * Holds all the modifiers used in the the calendar.
 *
 * Use the Modifiers context in custom component by calling the
 * {@link useModifiers} hook.
 *
 * @group Contexts
 */

export const ModifiersContext = createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ModifiersContextValue | undefined
>(undefined);

/** Maps of all the modifiers with the calendar days. */
export type ModifiersContextValue = {
  /** List the custom modifiers passed via the `modifiers` props. */
  custom: Record<string, CalendarDay[]>;
  /** List the internal modifiers. */
  internal: Record<InternalModifier, CalendarDay[]>;
  /** Get the modifiers for a given day. */
  getDayModifiers: (day: CalendarDay) => DayModifiers;
};

function useModifiers() {
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

  for (const day of calendar.days) {
    const { date, displayMonth } = day;

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));

    const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled));

    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden)) ||
      (!showOutsideDays && isOutside);

    const isInteractive = !mode || onDayClick !== undefined;

    const isFocusable = isInteractive && !isDisabled && !isHidden;

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
  }

  const getDayModifiers = (day: CalendarDay) => {
    const modifiers: DayModifiers = {
      focused: false,
      disabled: false,
      focusable: false,
      hidden: false,
      outside: false,
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

  return { internal, custom, getDayModifiers };
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

export function useModifiersContext() {
  const modifiersContext = useContext(ModifiersContext);
  if (!modifiersContext) {
    throw new Error(
      "useModifiersContext() must be used within a ModifiersContextProvider"
    );
  }
  return modifiersContext;
}
