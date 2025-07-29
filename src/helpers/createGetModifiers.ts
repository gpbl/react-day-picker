import type { CalendarDay, DateLib } from "../classes/index.js";
import type { DayPickerProps, Modifiers } from "../types/index.js";
import { DayFlag } from "../UI.js";
import { dateMatchModifiers } from "../utils/dateMatchModifiers.js";

/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */
export function createGetModifiers(
  days: CalendarDay[],
  props: DayPickerProps,
  navStart: Date | undefined,
  navEnd: Date | undefined,
  dateLib: DateLib,
) {
  const {
    disabled,
    hidden,
    modifiers,
    showOutsideDays,
    broadcastCalendar,
    today,
  } = props;

  const {
    isSameDay,
    isSameMonth,
    startOfMonth,
    isBefore,
    endOfMonth,
    isAfter,
  } = dateLib;

  const computedNavStart = navStart && startOfMonth(navStart);
  const computedNavEnd = navEnd && endOfMonth(navEnd);

  const internalModifiersMap: Record<DayFlag, CalendarDay[]> = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: [],
  };

  const customModifiersMap: Record<string, CalendarDay[]> = {};

  for (const day of days) {
    const { date, displayMonth } = day;

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));

    const isBeforeNavStart = Boolean(
      computedNavStart && isBefore(date, computedNavStart),
    );

    const isAfterNavEnd = Boolean(
      computedNavEnd && isAfter(date, computedNavEnd),
    );

    const isDisabled = Boolean(
      disabled && dateMatchModifiers(date, disabled, dateLib),
    );

    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) ||
      isBeforeNavStart ||
      isAfterNavEnd ||
      // Broadcast calendar will show outside days as default
      (!broadcastCalendar && !showOutsideDays && isOutside) ||
      (broadcastCalendar && showOutsideDays === false && isOutside);

    const isToday = isSameDay(date, today ?? dateLib.today());

    if (isOutside) internalModifiersMap.outside.push(day);
    if (isDisabled) internalModifiersMap.disabled.push(day);
    if (isHidden) internalModifiersMap.hidden.push(day);
    if (isToday) internalModifiersMap.today.push(day);

    // Add custom modifiers
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers?.[name];
        const isMatch = modifierValue
          ? dateMatchModifiers(date, modifierValue, dateLib)
          : false;
        if (!isMatch) return;
        if (customModifiersMap[name]) {
          customModifiersMap[name].push(day);
        } else {
          customModifiersMap[name] = [day];
        }
      });
    }
  }

  return (day: CalendarDay): Modifiers => {
    // Initialize all the modifiers to false
    const dayFlags: Record<DayFlag, boolean> = {
      [DayFlag.focused]: false,
      [DayFlag.disabled]: false,
      [DayFlag.hidden]: false,
      [DayFlag.outside]: false,
      [DayFlag.today]: false,
    };
    const customModifiers: Modifiers = {};

    // Find the modifiers for the given day
    for (const name in internalModifiersMap) {
      const days = internalModifiersMap[name as DayFlag];
      dayFlags[name as DayFlag] = days.some((d) => d === day);
    }
    for (const name in customModifiersMap) {
      customModifiers[name] = customModifiersMap[name].some((d) => d === day);
    }

    return {
      ...dayFlags,
      // custom modifiers should override all the previous ones
      ...customModifiers,
    };
  };
}
