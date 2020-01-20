import { Modifiers } from "../../components/DayPicker";
import { matchModifier } from "./matchModifier";

/**
 * @ignore
 */
const reduce = (day: Date, modifiers: Modifiers) => (
  previousValue: string[],
  key: string
): string[] => {
  const modifier = modifiers[key];
  if (matchModifier(day, modifier)) previousValue.push(name);
  return previousValue;
};

/**
 * Given a date and a list of modifiers, return the names of the modifiers matching that day.
 *
 * @category Modifiers
 */
export function listModifiers(day: Date, modifiers: Modifiers): Array<string> {
  return Object.keys(modifiers).reduce(reduce(day, modifiers), []);
}
