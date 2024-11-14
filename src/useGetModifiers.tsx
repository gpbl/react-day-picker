import { TZDate } from "@date-fns/tz";

import { DayFlag } from "./UI.js";
import type { CalendarDay, DateLib } from "./classes/index.js";
import type { DayPickerProps, Modifiers } from "./types/index.js";
import { dateMatchModifiers } from "./utils/dateMatchModifiers.js";

/**
 * Return a function to get the modifiers for a given day.
 *
 * NOTE: this is not an hook, but a factory for `getModifiers`.
 *
 * @private
 */
export function useGetModifiers(
  days: CalendarDay[],
  props: DayPickerProps,
  dateLib: DateLib
) {
  const { disabled, hidden, modifiers, showOutsideDays, today } = props;

  const { isSameDay, isSameMonth } = dateLib;

  const dayFlagsMap: Record<DayFlag, CalendarDay[]> = {
    [DayFlag.focused]: [],
    [DayFlag.outside]: [],
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.today]: []
  };

  const modifiersMap: Record<string, CalendarDay[]> = {};

  for (const day of days) {
    const { date, displayMonth } = day;

    const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));

    const isDisabled = Boolean(
      disabled && dateMatchModifiers(date, disabled, dateLib)
    );

    const isHidden =
      Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) ||
      (!showOutsideDays && isOutside);

    const isToday = isSameDay(
      date,
      today ??
        (props.timeZone
          ? TZDate.tz(props.timeZone)
          : dateLib.Date
            ? new dateLib.Date()
            : new Date())
    );

    if (isOutside) dayFlagsMap.outside.push(day);
    if (isDisabled) dayFlagsMap.disabled.push(day);
    if (isHidden) dayFlagsMap.hidden.push(day);
    if (isToday) dayFlagsMap.today.push(day);

    // Add custom modifiers
    if (modifiers) {
      Object.keys(modifiers).forEach((name) => {
        const modifierValue = modifiers?.[name];
        const isMatch = modifierValue
          ? dateMatchModifiers(date, modifierValue, dateLib)
          : false;
        if (!isMatch) return;
        if (modifiersMap[name]) {
          modifiersMap[name].push(day);
        } else {
          modifiersMap[name] = [day];
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
      [DayFlag.today]: false
    };
    const customModifiers: Modifiers = {};

    // Find the modifiers for the given day
    for (const name in dayFlagsMap) {
      const days = dayFlagsMap[name as DayFlag];
      dayFlags[name as DayFlag] = days.some((d) => d === day);
    }
    for (const name in modifiersMap) {
      customModifiers[name] = modifiersMap[name].some((d) => d === day);
    }

    return {
      ...dayFlags,
      // custom modifiers should override all the previous ones
      ...customModifiers
    };
  };
}
