import React, { type ReactElement, createContext, useContext } from "react";

import { DayFlag, SelectionState } from "../UI";
import { CalendarDay } from "../classes";
import { useMulti } from "../selection/useMulti";
import { useRange } from "../selection/useRange";
import { useSingle } from "../selection/useSingle";
import type {
  CustomModifiers,
  DayFlags,
  Modifiers,
  SelectionStates
} from "../types";
import { isDateInRange } from "../utils";
import { dateMatchModifiers } from "../utils/dateMatchModifiers";

import { useCalendar } from "./useCalendar";
import { useProps } from "./useProps";

/** @private */
const ModifiersContext = createContext<ModifiersContextValue | undefined>(
  undefined
);

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

function useModifiersContextValue(): ModifiersContextValue {
  const { dateLib, disabled, hidden, modifiers, mode, showOutsideDays, today } =
    useProps();

  const calendar = useCalendar();
  const single = useSingle();
  const multi = useMulti();
  const range = useRange();

  const { isSameDay, isSameMonth } = dateLib;
  const internal: Record<DayFlag, CalendarDay[]> = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: []
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

    const isDisabled = Boolean(
      disabled && dateMatchModifiers(date, disabled, dateLib)
    );

    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) ||
      (!showOutsideDays && isOutside);

    const isToday = isSameDay(date, today);

    if (isOutside) internal.outside.push(day);
    if (isDisabled) internal.disabled.push(day);
    if (isHidden) internal.hidden.push(day);
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
        } else if (
          range.selected &&
          isDateInRange(day.date, range.selected, dateLib)
        ) {
          selection[SelectionState.range_middle].push(day);
        }
      }
    }

    // Add custom modifiers
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers?.[name];
        const isMatch = modifierValue
          ? dateMatchModifiers(date, modifierValue, dateLib)
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

/** @private */
export function ModifiersContextProvider({
  children
}: {
  children: ReactElement;
}) {
  const modifiers = useModifiersContextValue();

  return (
    <ModifiersContext.Provider value={modifiers}>
      {children}
    </ModifiersContext.Provider>
  );
}

/**
 * Access to the modifiers for the days in the calendar.
 *
 * @group Hooks
 */
export function useModifiers() {
  const modifiersContext = useContext(ModifiersContext);
  if (!modifiersContext) {
    throw new Error(
      "useModifiersContext() must be used within a ModifiersContextProvider"
    );
  }
  return modifiersContext;
}
