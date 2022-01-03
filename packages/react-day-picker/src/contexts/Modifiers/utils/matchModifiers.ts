import { isSameMonth } from 'date-fns';

import { Modifiers, ModifiersStatus } from 'types/Modifiers';

import { isMatch } from './isMatch';

/**
 * Return the status of the modifiers that matches the given date.
 */
export function matchModifiers(
  day: Date,
  /** The modifiers to match for the given date. */
  modifiers: Modifiers,
  /** The month where the day is displayed, to add the "outside" modifiers.  */
  displayMonth?: Date
): ModifiersStatus {
  // Matches the modifiers with the given day
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
  const status: ModifiersStatus = {};
  modifiersList.forEach((modifier) => (status[modifier] = true));

  if (displayMonth && !isSameMonth(day, displayMonth)) {
    status.outside = true;
  }

  return status;
}
