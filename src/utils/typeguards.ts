import type {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek
} from "../types";

/**
 * Returns true if `matcher` is of type `DateInterval`.
 *
 * @group Utilities
 */
export function isDateInterval(matcher: unknown): matcher is DateInterval {
  return Boolean(
    matcher &&
      typeof matcher === "object" &&
      "before" in matcher &&
      "after" in matcher
  );
}

/**
 * Returns true if `value` is a `DateRange` type.
 *
 * @group Utilities
 */
export function isDateRange(value: unknown): value is DateRange {
  return Boolean(value && typeof value === "object" && "from" in value);
}

/**
 * Returns true if `value` is of type `DateAfter`.
 *
 * @group Utilities
 */
export function isDateAfterType(value: unknown): value is DateAfter {
  return Boolean(value && typeof value === "object" && "after" in value);
}

/**
 * Returns true if `value` is of type `DateBefore`.
 *
 * @group Utilities
 */
export function isDateBeforeType(value: unknown): value is DateBefore {
  return Boolean(value && typeof value === "object" && "before" in value);
}

/**
 * Returns true if `value` is a `DayOfWeek` type.
 *
 * @group Utilities
 */
export function isDayOfWeekType(value: unknown): value is DayOfWeek {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
