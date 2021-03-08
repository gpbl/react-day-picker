import { useDayPicker, useSelectSingle } from 'hooks';
import { ModifiersArray, ModifierStatus } from 'types';

import { useSelectMultiple } from '../useSelectMultiple';
import { useSelectRange } from '../useSelectRange';
import { getModifierStatus } from './utils/getModifierStatus';

/**
 * Return the status for the modifiers given the specified date.
 */
export function useModifiers(date: Date): ModifierStatus {
  const context = useDayPicker();
  const single = useSelectSingle();
  const multiple = useSelectMultiple();
  const range = useSelectRange();

  const today = !context.hideToday ? context.today : undefined;

  // Add to the modifiers in context those coming from selection
  const modifiers: ModifiersArray = {
    ...context.modifiers,
    today: context.modifiers.today ?? [today],
    disabled: context.modifiers.disabled
  };

  switch (context.mode) {
    case 'single':
      if (single.modifiers.selected) {
        modifiers.selected = single.modifiers.selected;
      }
      break;
    case 'multiple':
      if (multiple.modifiers.selected) {
        modifiers.selected = multiple.modifiers.selected;
      }
      if (multiple.modifiers.disabled) {
        modifiers.disabled = modifiers.disabled.concat(
          multiple.modifiers.disabled
        );
      }
      break;
    case 'range':
      if (range.modifiers.selected) {
        modifiers.selected = range.modifiers.selected;
      }
      if (range.modifiers.range_start) {
        modifiers.range_start = range.modifiers.range_start;
      }
      if (range.modifiers.range_middle) {
        modifiers.range_middle = range.modifiers.range_middle;
      }
      if (range.modifiers.range_end) {
        modifiers.range_end = range.modifiers.range_end;
      }
      if (range.modifiers.disabled) {
        modifiers.disabled = modifiers.disabled.concat(
          range.modifiers.disabled
        );
      }
      break;
  }

  const status = getModifierStatus(date, modifiers);

  return status;
}
