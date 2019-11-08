import { isSameDay, differenceInDays } from 'date-fns';
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
export function matchModifier(
  day: Date,
  modifier: ReactDayPicker.Modifier
): boolean {
  if (!modifier) {
    return false;
  }
  let modifiers: Array<ReactDayPicker.Modifier>;

  if (Array.isArray(modifier)) {
    modifiers = modifier;
  } else {
    modifiers = [modifier];
  }

  return modifiers.some((modifier: ReactDayPicker.Modifier) => {
    if (!modifier) {
      return false;
    }
    if (modifier instanceof Date) {
      return isSameDay(day, modifier);
    }
    if (
      'after' in modifier &&
      'before' in modifier &&
      differenceInDays(modifier.before, modifier.after) > 0
    ) {
      return (
        isDayAfter(day, modifier.after) && isDayBefore(day, modifier.before)
      );
    }
    if (
      'after' in modifier &&
      'before' in modifier &&
      (isDayAfter(modifier.after, modifier.before) ||
        isSameDay(modifier.after, modifier.before))
    ) {
      return (
        isDayAfter(day, modifier.after) || isDayBefore(day, modifier.before)
      );
    }
    if ('after' in modifier) {
      return isDayAfter(day, modifier.after);
    }
    if ('before' in modifier) {
      return isDayBefore(day, modifier.before);
    }
    if ('daysOfWeek' in modifier) {
      return modifier.daysOfWeek.includes(day.getDay());
    }
    if (typeof modifier === 'function') {
      return modifier(day);
    }
    return false;
  });
}
