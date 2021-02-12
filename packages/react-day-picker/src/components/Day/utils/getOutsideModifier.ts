import { endOfMonth, isAfter, isBefore, startOfMonth } from 'date-fns';

/**
 * Return the proper modifier for days outside the current month.
 */
export function getOutsideModifier(
  day: Date,
  currentMonth: Date
): 'aftermonth' | 'beforemonth' | undefined {
  if (isBefore(day, startOfMonth(currentMonth))) return 'beforemonth';
  else if (isAfter(day, endOfMonth(currentMonth))) return 'aftermonth';
  return undefined;
}
