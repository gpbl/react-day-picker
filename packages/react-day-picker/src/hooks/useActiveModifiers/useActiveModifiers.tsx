import { matchModifiers, useModifiers } from 'contexts/Modifiers';
import { ActiveModifiers } from 'types/Modifiers';

/**
 * Return the active modifiers for the specified day.
 *
 * @param day
 * @param displayMonth The month where the date is displayed. If not the same as
 * `date`, the day is an "outside day".
 */
export function useActiveModifiers(
  day: Date,
  displayMonth?: Date
): ActiveModifiers {
  const modifiers = useModifiers();
  const activeModifiers = matchModifiers(day, modifiers, displayMonth);
  return activeModifiers;
}
