import { DayPickerContextValue, Matcher } from '../../../types';

export function matchFunction(
  day: Date,
  matcher: Matcher,
  displayMonth: Date,
  props: DayPickerContextValue
): boolean {
  if (!(matcher instanceof Function)) return false;
  return matcher(day, displayMonth, props);
}
