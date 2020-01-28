import { DayModifiers } from "../../components/DayPicker/types";
import { matchDay } from "./matchModifier";

/**
 * @ignore
 */
const reduce = (day: Date, modifiers: DayModifiers) => (
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
 *
 * @private
 */
export function listModifiers(day: Date, modifiers: DayModifiers): string[] {
  return Object.keys(modifiers).reduce(reduce(day, modifiers), []);
}
