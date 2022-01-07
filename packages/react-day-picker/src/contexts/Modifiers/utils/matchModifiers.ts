import { isSameMonth } from 'date-fns';

import { ActiveModifiers, Modifiers } from 'types/Modifiers';

import { isMatch } from './isMatch';

/** Return the active modifiers for the given day. */
export function matchModifiers(
  day: Date,
  /** The modifiers to match for the given date. */
  modifiers: Modifiers,
  /** The month where the day is displayed, to add the "outside" modifiers.  */
  displayMonth?: Date
): ActiveModifiers {
  const modifiersList = Object.keys(modifiers).reduce(
    (previousValue: string[], key: string): string[] => {
      const modifier = modifiers[key];
      if (isMatch(day, modifier)) {
        previousValue.push(key);
      }
      return previousValue;
    },
    []
  );
  const activeModifiers: ActiveModifiers = {};
  modifiersList.forEach((modifier) => (activeModifiers[modifier] = true));

  if (displayMonth && !isSameMonth(day, displayMonth)) {
    activeModifiers.outside = true;
  }

  return activeModifiers;
}
