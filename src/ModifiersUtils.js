import { isDayAfter, isDayBefore, isDayInRange, isSameDay } from './DateUtils';
import { isRangeOfDates } from './Helpers';

/**
 * Return true if a date matches the specified modifier.
 * 
 * @export
 * @param {Date} d 
 * @param {Any} modifier 
 * @return {Boolean}
 */
export function dayMatchesModifier(d, modifier) {
  if (!modifier) {
    return false;
  }
  const arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(mod => {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return isSameDay(d, mod);
    }
    if (isRangeOfDates(mod)) {
      return isDayInRange(d, mod);
    }
    if (mod.after) {
      return isDayAfter(d, mod.after);
    }
    if (mod.before) {
      return isDayBefore(d, mod.before);
    }
    if (typeof mod === 'function') {
      return mod(d);
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
