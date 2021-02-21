import { isSameDay } from 'date-fns';

import { Matcher } from '../../../types';

export function matchDate(day: Date, matcher: Matcher): boolean {
  if (!(matcher instanceof Date)) return false;
  return isSameDay(day, matcher);
}
