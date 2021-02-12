import { Modifier, ModifiersMatchers } from 'types';

import { matchDay } from './matchModifier';

const reduceCallback = (day: Date, matchers: ModifiersMatchers) => (
  previousValue: string[],
  key: string
): string[] => {
  const matcher = matchers[key];
  if (matchDay(day, matcher)) {
    previousValue.push(key);
  }
  return previousValue;
};

/**
 * Given a date and a list of modifiers to look for, return the names of the modifiers
 * matching that day.
 */
export function findModifiers(
  day: Date,
  matchers: ModifiersMatchers
): Modifier[] {
  return Object.keys(matchers).reduce(reduceCallback(day, matchers), []);
}
