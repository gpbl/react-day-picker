import { ModifierMatchers, ModifierStatus } from '../../../types';
import { isMatch } from './isMatch';

/**
 * Return the status of the modifiers for the given day,
 */
export function getModifierStatus(
  day: Date,
  /** The modifiers for the given day. */
  modifiers: ModifierMatchers
): ModifierStatus {
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
  const modifiersStatus = {};
  modifiersList.forEach((modifier) => (modifiersStatus[modifier] = true));
  return modifiersStatus;
}
