/** A `Matcher` is a function, a date, an object, or an array of them used to determine if a day matches a modifier. */
export type Matcher =
  | ((date: Date) => boolean)
  | Date
  | Date[]
  | DateRange
  | DateBefore
  | DateAfter
  | DateInterval
  | DayOfWeek;

/** A matcher to match a day falling after the specified date, with the date not included. */
export type DateAfter = { after: Date };

/** A matcher to match a day falling before the specified date, with the date not included. */
export type DateBefore = { before: Date };

/** A matcher to match a day falling before and after two dates, where the dates are not included. */
export type DateInterval = { before: Date; after: Date };

/** A matcher to match a range of dates. The range can be open. Differently from [[DateInterval]], the dates here are included. */
export type DateRange = { from: Date | undefined; to?: Date | undefined };

/** A matcher to match a date being one of the specified days of the week (`0-7`, where `0` is Sunday). */
export type DayOfWeek = { dayOfWeek: number[] };

/** Returns true if `matcher` is of type [[DateInterval]]. */
export function isDateInterval(matcher: unknown): matcher is DateInterval {
  return Boolean(
    matcher &&
      typeof matcher === 'object' &&
      'before' in matcher &&
      'after' in matcher
  );
}

/** Returns true if `value` is a [[DateRange]] type. */
export function isDateRange(value: unknown): value is DateRange {
  // TODO: Check if dates?!
  return Boolean(value && typeof value === 'object' && 'from' in value);
}

/** Returns true if `value` is of type [[DateAfter]]. */
export function isDateAfterType(value: unknown): value is DateAfter {
  return Boolean(value && typeof value === 'object' && 'after' in value);
}

/** Returns true if `value` is of type [[DateBefore]]. */
export function isDateBeforeType(value: unknown): value is DateBefore {
  return Boolean(value && typeof value === 'object' && 'before' in value);
}

/** Returns true if `value` is a [[DayOfWeek]] type. */
export function isDayOfWeekType(value: unknown): value is DayOfWeek {
  return Boolean(value && typeof value === 'object' && 'dayOfWeek' in value);
}
