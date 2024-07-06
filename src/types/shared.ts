/* eslint-disable @typescript-eslint/ban-types */
import type { CSSProperties } from "react";

import { UI, DayFlag, RootFlag, ChevronFlag, SelectionState } from "../UI.js";
import * as components from "../components/custom-components.js";
import {
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatMonthDropdown,
  formatWeekdayName,
  formatWeekNumber,
  formatYearCaption,
  formatYearDropdown
} from "../formatters/index.js";
import {
  labelDayButton,
  labelNav,
  labelGrid,
  labelMonthDropdown,
  labelNext,
  labelPrevious,
  labelWeekday,
  labelWeekNumber,
  labelWeekNumberHeader,
  labelYearDropdown
} from "../labels/index.js";
import { dateLib } from "../lib/index.js";

/**
 * Selection modes supported by DayPicker.
 *
 * - `single`: use DayPicker to select single days.
 * - `multiple`: allow selecting multiple days.
 * - `range`: use DayPicker to select a range of days.
 *
 * @see https://daypicker.dev/next/using-daypicker/selection-modes
 */
export type Mode = "single" | "multiple" | "range";

/**
 * The components that can be changed using the `components` prop.
 *
 * @see https://github.com/gpbl/react-day-picker/blob/main/src/components/custom-components.ts
 */
export type CustomComponents = {
  [key in keyof typeof components]?: (typeof components)[key];
};

export type DateLib = typeof dateLib;

/** Represent a map of formatters used to render localized content. */
export type Formatters = {
  /** Format the caption of a month grid. */
  formatCaption: typeof formatCaption;
  /** @deprecated Use {@link Formatters.formatCaption} instead. */
  formatMonthCaption: typeof formatMonthCaption;
  /** Format the label in the month dropdown. */
  formatMonthDropdown: typeof formatMonthDropdown;
  /** @deprecated Use {@link Formatters.formatYearDropdown} instead. */
  formatYearCaption: typeof formatYearCaption;
  /** Format the label in the year dropdown. */
  formatYearDropdown: typeof formatYearDropdown;
  /** Format the day in the day cell. */
  formatDay: typeof formatDay;
  /** Format the week number. */
  formatWeekNumber: typeof formatWeekNumber;
  /** Format the week day name in the header */
  formatWeekdayName: typeof formatWeekdayName;
};

/** Map of functions to translate ARIA labels for the relative elements. */
export type Labels = {
  /** Return the label for the month dropdown. */
  labelNav: typeof labelNav;
  /** Return the label for the month dropdown. */
  labelGrid: typeof labelGrid;
  /** Return the label for the month dropdown. */
  labelMonthDropdown: typeof labelMonthDropdown;
  /** Return the label for the year dropdown. */
  labelYearDropdown: typeof labelYearDropdown;
  /** Return the label for the next month button. */
  labelNext: typeof labelNext;
  /** Return the label for the previous month button. */
  labelPrevious: typeof labelPrevious;
  /** Return the label for the day cell. */
  labelDay: typeof labelDayButton;
  /** Return the label for the weekday. */
  labelWeekday: typeof labelWeekday;
  /** Return the label for the week number. */
  labelWeekNumber: typeof labelWeekNumber;
  /**
   * Return the label for the column of the week number.
   *
   * @since 9.0.0
   */
  labelWeekNumberHeader: typeof labelWeekNumberHeader;
};

/**
 * A value or a function that matches a specific day.
 *
 * Matchers can be of different types:
 *
 * ```tsx
 * // will always match the day
 * const booleanMatcher: Matcher = true;
 *
 * // will match the today's date
 * const dateMatcher: Matcher = new Date();
 *
 * // will match the days in the array
 * const arrayMatcher: Matcher = [
 *   new Date(2019, 1, 2),
 *   new Date(2019, 1, 4)
 * ];
 *
 * // will match days after the 2nd of February 2019
 * const afterMatcher: DateAfter = { after: new Date(2019, 1, 2) };
 * // will match days before the 2nd of February 2019 }
 * const beforeMatcher: DateBefore = { before: new Date(2019, 1, 2) };
 *
 * // will match Sundays
 * const dayOfWeekMatcher: DayOfWeek = {
 *   dayOfWeek: 0
 * };
 *
 * // will match the included days, except the two dates
 * const intervalMatcher: DateInterval = {
 *   after: new Date(2019, 1, 2),
 *   before: new Date(2019, 1, 5)
 * };
 *
 * // will match the included days, including the two dates
 * const rangeMatcher: DateRange = {
 *   from: new Date(2019, 1, 2),
 *   to: new Date(2019, 1, 5)
 * };
 *
 * // will match when the function return true
 * const functionMatcher: Matcher = (day: Date) => {
 *   return day.getMonth() === 2; // match when month is March
 * };
 * ```
 */
export type Matcher =
  | boolean
  | ((date: Date) => boolean)
  | Date
  | Date[]
  | DateRange
  | DateBefore
  | DateAfter
  | DateInterval
  | DayOfWeek;

/**
 * A matcher to match a day falling after the specified date, with the date not
 * included.
 */
export type DateAfter = { after: Date };

/**
 * A matcher to match a day falling before the specified date, with the date not
 * included.
 */
export type DateBefore = { before: Date };

/**
 * A matcher to match a day falling before and/or after two dates, where the
 * dates are not included.
 */
export type DateInterval = { before: Date; after: Date };

/**
 * A matcher to match a range of dates. The range can be open. Differently from
 * {@link DateInterval}, the dates here are included.
 */
export type DateRange = { from: Date | undefined; to?: Date | undefined };

/**
 * A matcher to match a date being one of the specified days of the week (`0-6`,
 * where `0` is Sunday).
 */
export type DayOfWeek = { dayOfWeek: number[] };

/** A record with `data-*` attributes passed to `<DayPicker />`. */
export type DataAttributes = Record<`data-${string}`, unknown>;

/**
 * The event handler triggered when interacting with a day.
 *
 * @template EventType - The event type that triggered the day event.
 */
export type DayEventHandler<EventType> = (
  /** The date that has triggered the event. */
  date: Date,
  /** The modifiers belonging to the date. */
  modifiers: Modifiers,
  /** The DOM event that triggered this event. */
  e: EventType
) => void;

/** The event handler when a month is changed in the calendar. */
export type MonthChangeEventHandler = (month: Date) => void;

/** Maps user interface elements, selection states, and flags to a CSS style. */
export type Styles = {
  [key in UI | SelectionState | DayFlag | RootFlag | ChevronFlag]:
    | CSSProperties
    | undefined;
};

/** Defines the class names for various UI components and states. */
export type ClassNames = {
  [key in UI | SelectionState | DayFlag | RootFlag | ChevronFlag]: string;
};

/** The flags that are matching a day in the calendar. */
export type DayFlags = Record<DayFlag, boolean>;

/** The selection state that are matching a day in the calendar. */
export type SelectionStates = Record<SelectionState, boolean>;

/** The modifiers that are matching a day in the calendar. */
export type Modifiers = DayFlags & SelectionStates & CustomModifiers;

/** The custom modifiers matching a day, passed to the `modifiers` prop. */
export type CustomModifiers = Record<string, boolean>;

/** The style to apply to each day element matching a modifier. */
export type ModifiersStyles = Record<string, CSSProperties> &
  Partial<Record<DayFlag, CSSProperties>>;

/** The classnames to assign to each day element matching a modifier. */
export type ModifiersClassNames = Record<string, string> &
  Partial<Record<DayFlag & SelectionState, string>>;

/**
 * The props that have been deprecated since version 9.0.0.
 *
 * @since 9.0.0
 * @see https://daypicker.dev/next/upgrading
 */
export type V9DeprecatedProps =
  /** Use `hidden` prop instead. */
  | "fromDate"
  /** Use `hidden` prop instead. */
  | "toDate"
  /** Use `startMonth` instead. */
  | "fromMonth"
  /** Use `endMonth` instead. */
  | "toMonth"
  /** Use `startMonth` instead. */
  | "fromYear"
  /** Use `endMonth` instead. */
  | "toYear";

export type MoveFocusDir = "after" | "before";

export type MoveFocusBy =
  | "day"
  | "week"
  | "startOfWeek"
  | "endOfWeek"
  | "month"
  | "year";
