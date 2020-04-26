import { DaysModifiers } from '../../components/DayPicker/types';
import { matchDay } from './matchModifier';

const reduceCallback = (day: Date, modifiers: DaysModifiers) => (
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
  modifiers: DaysModifiers
): string[] {
  return Object.keys(modifiers).reduce(reduceCallback(day, modifiers), []);
}
