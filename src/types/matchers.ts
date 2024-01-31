/**
 * A value or a function that matches a specific day.
 *
 * @category Date Matchers
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
 *
 * @category Date Matchers
 */
export type DateAfter = { after: Date };

/**
 * A matcher to match a day falling before the specified date, with the date not
 * included.
 *
 * @category Date Matchers
 */
export type DateBefore = { before: Date };

/**
 * A matcher to match a day falling before and/or after two dates, where the
 * dates are not included.
 *
 * @category Date Matchers
 */
export type DateInterval = { before: Date; after: Date };

/**
 * A matcher to match a range of dates. The range can be open. Differently from
 * `DateInterval`, the dates here are included.
 *
 * @category Date Matchers
 */
export type DateRange = { from: Date | undefined; to?: Date | undefined };

/**
 * A matcher to match a date being one of the specified days of the week (`0-7`,
 * where `0` is Sunday).
 *
 * @category Date Matchers
 */
export type DayOfWeek = { dayOfWeek: number[] };
