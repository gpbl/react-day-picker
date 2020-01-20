import { isSameDay, differenceInDays } from "date-fns";
import { Modifier } from "../../components/DayPicker";

/**
 * Return `true` if `day1` is after and not same as `day2`.
 *
 * @category Modifiers
 */
function isDayAfter(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) > 0;
}

/**
 * Return `true` if `day1` is before and not same as `day2`.
 *
 * @category Modifiers
 */
function isDayBefore(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) < 0;
}

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @category Modifiers
 */
export function matchModifier(day: Date, modifier: Modifier): boolean {
  if (!modifier) {
    return false;
  }
  let modifiers: Array<Modifier>;

  if (Array.isArray(modifier)) {
    modifiers = modifier;
  } else {
    modifiers = [modifier];
  }

  return modifiers.some((modifier: Modifier) => {
    if (!modifier) {
      return false;
    }
    if (modifier instanceof Date) {
      return isSameDay(day, modifier);
    }
    if (
      "after" in modifier &&
      "before" in modifier &&
      differenceInDays(modifier.before, modifier.after) > 0
    ) {
      return (
        isDayAfter(day, modifier.after) && isDayBefore(day, modifier.before)
      );
    }
    if (
      "after" in modifier &&
      "before" in modifier &&
      (isDayAfter(modifier.after, modifier.before) ||
        isSameDay(modifier.after, modifier.before))
    ) {
      return (
        isDayAfter(day, modifier.after) || isDayBefore(day, modifier.before)
      );
    }
    if ("after" in modifier) {
      return isDayAfter(day, modifier.after);
    }
    if ("before" in modifier) {
      return isDayBefore(day, modifier.before);
    }
    if ("daysOfWeek" in modifier) {
      return modifier.daysOfWeek.includes(day.getDay());
    }
    if (typeof modifier === "function") {
      return modifier(day);
    }
    return false;
  });
}
