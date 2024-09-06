import { DayFlag, SelectionState } from "./UI.js";
import { CalendarDay } from "./classes/index.js";
import type { DateLib, DayPickerProps, Modifiers } from "./types/index.js";
import { dateMatchModifiers } from "./utils/dateMatchModifiers.js";

/**
 * Return a function to get the modifiers for a given day.
 *
 * @private
 */
export function useGetModifiers(
  days: CalendarDay[],
  props: DayPickerProps,
  dateLib: DateLib
) {
  const { disabled, hidden, modifiers, showOutsideDays, today } = props;

  const { isSameDay, isSameMonth, Date } = dateLib;

  const internalModifiers: Record<DayFlag, CalendarDay[]> = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: []
  };

  const selectionModifiers: Record<SelectionState, CalendarDay[]> = {
    [SelectionState.range_end]: [],
    [SelectionState.range_middle]: [],
    [SelectionState.range_start]: [],
    [SelectionState.selected]: []
  };

  const customModifiersMap: Record<string, CalendarDay[]> = {};

  for (const day of days) {
    const { date, displayMonth } = day;

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));

    const isDisabled = Boolean(
      disabled && dateMatchModifiers(date, disabled, dateLib)
    );

    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) ||
      (!showOutsideDays && isOutside);

    const isToday = isSameDay(date, today ?? new Date());

    if (isOutside) internalModifiers.outside.push(day);
    if (isDisabled) internalModifiers.disabled.push(day);
    if (isHidden) internalModifiers.hidden.push(day);
    if (isToday) internalModifiers.today.push(day);

    // Add custom modifiers
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers?.[name];
        const isMatch = modifierValue
          ? dateMatchModifiers(date, modifierValue, dateLib)
          : false;
        if (!isMatch) return;
        if (customModifiersMap[name]) customModifiersMap[name].push(day);
        else customModifiersMap[name] = [day];
      });
    }
  }

  return (day: CalendarDay) => {
    // Initialize all the modifiers to false
    const dayFlags: Record<DayFlag, boolean> = {
      [DayFlag.focused]: false,
      [DayFlag.disabled]: false,
      [DayFlag.hidden]: false,
      [DayFlag.outside]: false,
      [DayFlag.today]: false
    };
    const selectionStates: Record<SelectionState, boolean> = {
      [SelectionState.range_end]: false,
      [SelectionState.range_middle]: false,
      [SelectionState.range_start]: false,
      [SelectionState.selected]: false
    };
    const customModifiers: Modifiers = {};

    // Find the modifiers for the given day
    for (const name in internalModifiers) {
      const days = internalModifiers[name as DayFlag];
      dayFlags[name as DayFlag] = days.some((d) => d === day);
    }
    for (const name in selectionModifiers) {
      const days = selectionModifiers[name as SelectionState];
      selectionStates[name as SelectionState] = days.some((d) => d === day);
    }
    for (const name in customModifiers) {
      customModifiers[name] = customModifiersMap[name].some((d) => d === day);
    }

    return {
      ...selectionStates,
      ...dayFlags,
      // custom modifiers should override all the previous ones
      ...customModifiers
    } as Modifiers;
  };
}
