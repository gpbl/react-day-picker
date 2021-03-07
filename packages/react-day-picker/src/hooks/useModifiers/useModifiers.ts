import { ModifiersArray, ModifierStatus } from '../../types';
import { useDayPicker } from '../useDayPicker';
import { useSelection } from '../useSelection';
import { getModifierStatus } from './utils/getModifierStatus';

/**
 * Return the status for the modifiers given the specified date.
 */
export function useModifiers(date: Date): ModifierStatus {
  const context = useDayPicker();
  const selection = useSelection();
  const today = !context.hideToday ? context.today : undefined;

  // Add to the modifiers in context those coming from selection
  const modifiers: ModifiersArray = {
    ...context.modifiers,
    today: context.modifiers.today ?? [today]
  };

  if (selection.modifiers.selected) {
    modifiers.selected = selection.modifiers.selected;
  }
  if (selection.modifiers.disabled) {
    modifiers.disabled = [
      ...context.modifiers.disabled,
      selection.modifiers.disabled
    ];
  }
  if (selection.modifiers.range_start) {
    modifiers.range_start = [selection.modifiers.range_start];
  }
  if (selection.modifiers.range_middle) {
    modifiers.range_middle = [selection.modifiers.range_middle];
  }
  if (selection.modifiers.range_end) {
    modifiers.range_end = [selection.modifiers.range_end];
  }

  const status = getModifierStatus(date, modifiers);

  return status;
}
