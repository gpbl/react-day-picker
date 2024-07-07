import { DayFlag, SelectionState } from "./UI.js";
import { CalendarDay } from "./classes/index.js";
import type {
  CustomModifiers,
  DateLib,
  DayFlags,
  DayPickerProps,
  Modifiers,
  SelectionStates
} from "./types/index.js";
import type { UseCalendar } from "./useCalendar.js";
import { dateMatchModifiers } from "./utils/dateMatchModifiers.js";

/** The hook to get the modifiers state for a single day */
export type UseModifiers = {
  /** List the days with custom modifiers passed via the `modifiers` prop. */
  customModifiers: Record<string, CalendarDay[]>;
  /** List the days with the internal modifiers. */
  dayFlags: Record<DayFlag, CalendarDay[]>;
  /** List the days with selection modifiers. */
  selectionStates: Record<SelectionState, CalendarDay[]>;
  /** Get the modifiers for a given day. */
  getModifiers: (day: CalendarDay) => Modifiers;
};

/** @private */
export function useModifiers(
  props: Pick<
    DayPickerProps,
    "disabled" | "hidden" | "modifiers" | "showOutsideDays" | "today"
  >,
  calendar: UseCalendar,
  dateLib: DateLib
): UseModifiers {
  // const single = useSingle();
  // const multi = useMulti();
  // const range = useRange();

  const { disabled, hidden, modifiers, showOutsideDays, today } = props;

  const { isSameDay, isSameMonth, Date } = dateLib;
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

    const isToday = isSameDay(date, today ?? new Date());

    if (isOutside) internal.outside.push(day);
    if (isDisabled) internal.disabled.push(day);
    if (isHidden) internal.hidden.push(day);
    if (isToday) internal.today.push(day);

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
