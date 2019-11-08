import { matchModifier } from './matchModifier';

/**
 * Return the list of modifiers name matching the given day for the given
 * modifiers.
 */
export function listModifiers(
  day: Date,
  modifiers: ReactDayPicker.Modifiers
): Array<string> {
  function reduceModifiers(
    previousValue: Array<string>,
    [name, modifier]: [string, ReactDayPicker.Modifier]
  ): Array<string> {
    if (matchModifier(day, modifier)) {
      previousValue.push(name);
    }
    return previousValue;
  }
  return Object.entries(modifiers).reduce(reduceModifiers, []);
}
