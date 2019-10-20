import { matchModifier } from './matchModifier';
import { Modifiers, Modifier } from '../../typings/react-day-picker';

/**
 * Return the list of modifiers name matching the given day for the given
 * modifiers.
 */
export function listModifiers(day: Date, modifiers: Modifiers): Array<string> {
  function reduceModifiers(
    previousValue: Array<string>,
    [name, modifier]: [string, Modifier]
  ): Array<string> {
    if (matchModifier(day, modifier)) {
      previousValue.push(name);
    }
    return previousValue;
  }
  return Object.entries(modifiers).reduce(reduceModifiers, []);
}
