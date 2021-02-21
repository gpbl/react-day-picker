import { Matcher } from '../../../types';

export function matchDaysOfWeek(day: Date, matcher: Matcher): boolean {
  if (!('daysOfWeek' in matcher)) return false;
  return matcher.daysOfWeek.includes(day.getDay());
}
