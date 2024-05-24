import { DayPickerProps } from "../DayPicker";
import { DayPickerContextValue } from "../contexts/DayPicker";
import type {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek
} from "../types/Matchers";
import {
  PropsDefault,
  PropsMulti,
  PropsRange,
  PropsSingle
} from "../types/props";

/** Returns true if `matcher` is of type `DateInterval`. */
export function isDateInterval(matcher: unknown): matcher is DateInterval {
  return Boolean(
    matcher &&
      typeof matcher === "object" &&
      "before" in matcher &&
      "after" in matcher
  );
}

/** Returns true if `value` is a `DateRange` type. */
export function isDateRange(value: unknown): value is DateRange {
  return Boolean(value && typeof value === "object" && "from" in value);
}

/** Returns true if `value` is of type `DateAfter`. */
export function isDateAfterType(value: unknown): value is DateAfter {
  return Boolean(value && typeof value === "object" && "after" in value);
}

/** Returns true if `value` is of type `DateBefore`. */
export function isDateBeforeType(value: unknown): value is DateBefore {
  return Boolean(value && typeof value === "object" && "before" in value);
}

/** Returns true if `value` is a `DayOfWeek` type. */
export function isDayOfWeekType(value: unknown): value is DayOfWeek {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
/** Returns true when the props are of type {@link PropsSingle}. */

export function isDayPickerSingle(
  props: DayPickerProps | DayPickerContextValue
): props is PropsSingle {
  return props.mode === "single";
} /** Returns true when the props are of type {@link PropsRange}. */

export function isDayPickerRange(
  props: DayPickerProps | DayPickerContextValue
): props is PropsRange {
  return props.mode === "range";
}
/** Returns true when the props are of type {@link PropsMulti}. */

export function isDayPickerMultiple(
  props: DayPickerProps | DayPickerContextValue
): props is PropsMulti {
  return props.mode === "multiple";
}
/** Returns true when the props are of type {@link PropsDefault}. */

export function isDayPickerDefault(
  props: DayPickerProps
): props is PropsDefault {
  return props.mode === undefined || props.mode === "default";
}
