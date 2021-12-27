import { Modifiers, ModifiersStatus } from 'types/Modifiers';

import { isMatch } from './isMatch';

/**
 * Return the status of the modifiers that matches the given date.
 */
export function getModifiersStatus(
  date: Date,
  /** The modifiers to match for the given date. */
  modifiers: Modifiers
): ModifiersStatus {
  const modifiersList = Object.keys(modifiers).reduce(
    (previousValue: string[], key: string): string[] => {
      const modifier = modifiers[key];
      if (isMatch(date, modifier)) {
        previousValue.push(key);
      }
      return previousValue;
    },
    []
  );
  const modifiersStatus: ModifiersStatus = {};
  modifiersList.forEach((modifier) => (modifiersStatus[modifier] = true));
  return modifiersStatus;
}
