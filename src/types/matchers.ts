/**
 * A value or a function that matches a specific day.
 *
 
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
 
 */
export type DateAfter = { after: Date };

/**
 * A matcher to match a day falling before the specified date, with the date not
 * included.
 *```tsx
 * test
 * ```
 */
export type DateBefore = { before: Date };

/**
 * A matcher to match a day falling before and/or after two dates, where the
 * dates are not included.
 *
 
 */
export type DateInterval = { before: Date; after: Date };

/**
 * A matcher to match a range of dates. The range can be open. Differently from
 * `DateInterval`, the dates here are included.
 *
 
 */
export type DateRange = { from: Date | undefined; to?: Date | undefined };

/**
 * A matcher to match a date being one of the specified days of the week (`0-7`,
 * where `0` is Sunday).
 *
 
 */
export type DayOfWeek = { dayOfWeek: number[] };
