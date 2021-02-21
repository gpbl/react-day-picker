import { DayPickerContextValue, Matcher } from '../../../types';

export function matchFunction(
  day: Date,
  matcher: Matcher,
  currentMonth: Date,
  props: DayPickerContextValue
): boolean {
  if (!(matcher instanceof Function)) return false;
  return matcher(day, currentMonth, props);
}
