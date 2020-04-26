import { DayModifier } from '../../components/DayPicker';
import { isAfter, isBefore, startOfMonth, endOfMonth } from 'date-fns';

/**
 * Return the modifier for days outside the current month.
 */
export function getOutsideModifier(
  day: Date,
  currentMonth: Date
): DayModifier | undefined {
  if (isBefore(day, startOfMonth(currentMonth))) return 'beforemonth';
  else if (isAfter(day, endOfMonth(currentMonth))) return 'aftermonth';
  return undefined;
}
