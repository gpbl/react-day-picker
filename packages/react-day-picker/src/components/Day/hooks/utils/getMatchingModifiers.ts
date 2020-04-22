import { DayModifiers } from '../../../DayPicker/types';
import { matchDay } from './matchModifier';

const reduceCallback = (day: Date, modifiers: DayModifiers) => (
  previousValue: string[],
  key: string
): string[] => {
  const modifier = modifiers[key];
  if (matchDay(day, modifier)) {
    previousValue.push(key);
  }
  return previousValue;
};

/**
 * Given a date and a list of modifiers, return the names of the modifiers matching that day.
 */
export function getMatchingModifiers(
  day: Date,
  modifiers: DayModifiers
): string[] {
  return Object.keys(modifiers).reduce(reduceCallback(day, modifiers), []);
}
