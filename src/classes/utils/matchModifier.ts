import { isSameDay, differenceInDays } from 'date-fns';
import { Modifier } from 'types/common';

function isDayAfter(day1: Date, day2: Date) {
  return differenceInDays(day1, day2) > 0;
}
function isDayBefore(day1: Date, day2: Date) {
  return differenceInDays(day1, day2) < 0;
}

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function matchModifier(day: Date, modifier: Modifier) {
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

export default matchModifier;
