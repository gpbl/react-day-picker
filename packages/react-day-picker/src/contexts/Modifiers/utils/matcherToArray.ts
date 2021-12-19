import { Matcher } from 'types/Matchers';

export function matcherToArray(matcher: Matcher | Matcher[] | undefined) {
  if (Array.isArray(matcher)) {
    return matcher;
  } else if (matcher !== undefined) {
    return [matcher];
  } else {
    return [];
  }
}
