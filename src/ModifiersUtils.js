import { isDayAfter, isDayBefore, isDayInRange, isSameDay } from './DateUtils';
import { isRangeOfDates } from './Helpers';

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
export function dayMatchesModifier(day, modifier) {
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
    if (isRangeOfDates(mod)) {
      return isDayInRange(day, mod);
    }
    if (mod.after && mod.before && isDayAfter(mod.before, mod.after)) {
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
      return mod.daysOfWeek.some(dayOfWeek => day.getDay() === dayOfWeek);
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
export function getModifiersForDay(day, modifiersObj = {}) {
  return Object.keys(modifiersObj).reduce((modifiers, modifierName) => {
    const value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

export default { dayMatchesModifier, getModifiersForDay };
