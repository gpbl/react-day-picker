import React, { type ReactElement, createContext, useContext } from "react";

import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";

import { DayFlag, SelectionState } from "../UI";
import { CalendarDay } from "../classes";
import { useMultiContext } from "../selection/multi";
import { useRangeContext } from "../selection/range";
import { useSingleContext } from "../selection/single";
import type {
  CustomModifiers,
  DayFlags,
  Modifiers,
  SelectionStates
} from "../types";
import { isDateInRange } from "../utils";
import { dateMatchModifiers } from "../utils/dateMatchModifiers";

import { useCalendarContext } from "./calendar";
import { usePropsContext } from "./props";

/** @private */
export const ModifiersContext = createContext<
  ModifiersContextValue | undefined
>(undefined);

/** Maps of all the modifiers with the calendar days. */
export type ModifiersContextValue = {
  /** List the days with custom modifiers passed via the `modifiers` prop. */
  customModifiers: Record<string, CalendarDay[]>;
  /** List the days with the internal modifiers. */
  dayFlags: Record<DayFlag, CalendarDay[]>;
  /** List the days with selection modifiers. */
  selectionStates: Record<SelectionState, CalendarDay[]>;
  /** Get the modifiers for a given day. */
  getModifiers: (day: CalendarDay) => Modifiers;
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
  const single = useSingleContext();
  const multi = useMultiContext();
  const range = useRangeContext();

  const internal: Record<DayFlag, CalendarDay[]> = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: [],
    [DayFlag.focusable]: []
  };

  const custom: Record<string, CalendarDay[]> = {};

  const selection: Record<SelectionState, CalendarDay[]> = {
    [SelectionState.range_end]: [],
    [SelectionState.range_middle]: [],
    [SelectionState.range_start]: [],
    [SelectionState.selected]: []
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

    // Add the selection modifiers
    if (mode === "single" && !isDisabled) {
      if (single.isSelected(day.date)) {
        selection[SelectionState.selected].push(day);
      }
    }
    if (mode === "multiple" && !isDisabled) {
      if (multi.isSelected(day.date)) {
        selection[SelectionState.selected].push(day);
      }
    }

    if (mode === "range" && !isDisabled) {
      if (range.isSelected(day.date)) {
        selection[SelectionState.selected].push(day);
        if (range.selected?.from && isSameDay(day.date, range.selected.from)) {
          if (range.selected?.to)
            selection[SelectionState.range_start].push(day);
        } else if (
          range.selected?.to &&
          isSameDay(day.date, range.selected.to)
        ) {
          selection[SelectionState.range_end].push(day);
        } else if (range.selected && isDateInRange(day.date, range.selected)) {
          selection[SelectionState.range_middle].push(day);
        }
      }
    }

    // Add custom modifiers
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
    // Initialize all the modifiers to false
    const dayFlags: DayFlags = {
      [DayFlag.focused]: false,
      [DayFlag.disabled]: false,
      [DayFlag.focusable]: false,
      [DayFlag.hidden]: false,
      [DayFlag.outside]: false,
      [DayFlag.today]: false
    };
    const selectionStates: SelectionStates = {
      [SelectionState.range_end]: false,
      [SelectionState.range_middle]: false,
      [SelectionState.range_start]: false,
      [SelectionState.selected]: false
    };
    const customModifiers: CustomModifiers = {};

    // Find the modifiers for the given day
    for (const name in internal) {
      const days = internal[name as DayFlag];
      dayFlags[name as DayFlag] = days.some((d) => d === day);
    }
    for (const name in selection) {
      const days = selection[name as SelectionState];
      selectionStates[name as SelectionState] = days.some((d) => d === day);
    }
    for (const name in custom) {
      customModifiers[name] = custom[name].some((d) => d === day);
    }

    return {
      ...selectionStates,
      ...dayFlags,
      // custom modifiers should override all the previous ones
      ...customModifiers
    };
  };

  return {
    dayFlags: internal,
    customModifiers: custom,
    selectionStates: selection,
    getModifiers
  };
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
