import { matchModifiers, useModifiers } from 'contexts/Modifiers';
import { ModifiersStatus } from 'types/Modifiers';

/**
 * Return the status of the modifiers for the specified day.
 *
 * @param day
 * @param displayMonth The month where the date is displayed. If not the same as
 * `date`, the day is an "outside day".
 */
export function useModifiersStatus(
  day: Date,
  displayMonth?: Date
): ModifiersStatus {
  const modifiers = useModifiers();
  const modifiersStatus = matchModifiers(day, modifiers, displayMonth);
  return modifiersStatus;
}
