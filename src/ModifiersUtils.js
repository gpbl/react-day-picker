import { isDayAfter, isDayBefore, isDayInRange, isSameDay } from './DateUtils';
import { isRangeOfDates } from './Helpers';

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

export function getModifiersForDay(d, modifiersObj = {}) {
  return Object.keys(modifiersObj).reduce((modifiers, modifierName) => {
    const value = modifiersObj[modifierName];
    if (dayMatchesModifier(d, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

export default { dayMatchesModifier, getModifiersForDay };
