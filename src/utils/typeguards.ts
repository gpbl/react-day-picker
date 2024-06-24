import type {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek,
  DayPickerProps,
  PropsMulti,
  PropsRange,
  PropsSingle
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

/**
 * Returns true if the props are for a single selection mode.
 *
 * @group Utilities
 */
export function isSingle(
  props: DayPickerProps
): props is DayPickerProps & PropsSingle {
  return props.mode === "single";
}

/**
 * @deprecated This function has been renamed Use `isSingle` instead.
 * @protected
 */
export const isDayPickerSingle = isSingle;

/**
 * Returns true if the props are for a multiple selection mode.
 *
 * @group Utilities
 */
export function isMulti(
  props: DayPickerProps
): props is DayPickerProps & PropsMulti {
  return props.mode === "multiple";
}

/**
 * @deprecated This function has been renamed Use `isMulti` instead.
 * @protected
 */
export const isDayPickerMultiple = isMulti;

/**
 * Returns true if the props are for a range selection mode.
 *
 * @group Utilities
 */
export function isRange(
  props: DayPickerProps
): props is DayPickerProps & PropsRange {
  return props.mode === "range";
}

/**
 * @deprecated This function has been renamed Use `isRange` instead.
 * @protected
 */
export const isDayPickerRange = isRange;
