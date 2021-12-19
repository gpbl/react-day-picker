import { Matcher } from 'types/Matchers';

export function toMatcherArray(
  modifierFromProp: Matcher | Matcher[] | undefined
) {
  if (Array.isArray(modifierFromProp)) {
    return modifierFromProp;
  } else if (modifierFromProp !== undefined) {
    return [modifierFromProp];
  } else {
    return [];
  }
}
