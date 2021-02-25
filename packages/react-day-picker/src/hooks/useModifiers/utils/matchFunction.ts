import { Matcher } from '../../../types';

export function matchFunction(day: Date, matcher: Matcher): boolean {
  if (!(matcher instanceof Function)) return false;
  return matcher(day);
}
