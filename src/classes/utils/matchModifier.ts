import { isSameDay, differenceInDays } from 'date-fns';
import { Modifier } from '../../types/Modifiers';

/**
 * Return true if `day1` is after `day2`.
 */
function isDayAfter(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) > 0;
}

/**
 * Return true if `day1` is before `day2`.
 */
function isDayBefore(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) < 0;
}

/**
 * Return `true` if a date matches the specified modifier.
 */
export function matchModifier(day: Date, modifier: Modifier): boolean {
  if (!modifier) {
    return false;
  }
  const arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(mod => {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return isSameDay(day, mod);
    }
    if (
      mod.after &&
      mod.before &&
      differenceInDays(mod.before, mod.after) > 0
    ) {
      return isDayAfter(day, mod.after) && isDayBefore(day, mod.before);
    }
    if (
      mod.after &&
      mod.before &&
      (isDayAfter(mod.after, mod.before) || isSameDay(mod.after, mod.before))
    ) {
      return isDayAfter(day, mod.after) || isDayBefore(day, mod.before);
    }
    if (mod.after) {
      return isDayAfter(day, mod.after);
    }
    if (mod.before) {
      return isDayBefore(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return day.getDay() === mod.daysOfWeek;
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}
