import { ModifierStatus } from '../../types';
import { useDayPicker } from '../useDayPicker';
import { useSelection } from '../useSelection';
import { getModifierStatus } from './utils/getModifierStatus';

/** Return the status for the modifiers given the specified date */
export function useModifiers(date: Date): ModifierStatus {
  const context = useDayPicker();
  const selection = useSelection();
  const modifiers = Object.assign({}, context.modifiers);

  modifiers.today = context.today;

  if (context.mode !== 'uncontrolled') {
    const { single, multiple, range } = selection ?? {};
    switch (context.mode) {
      case 'range':
        if (!range.selected) break;
        modifiers.selected = range.selected;
        modifiers['range-middle'] = {
          after: range.selected.from,
          before: range.selected.to
        };
        modifiers['range-start'] = range.selected.from;
        if (range.selected.to) modifiers['range-end'] = range.selected.to;
        break;
      case 'multiple':
        if (!multiple.selected) break;
        modifiers.selected = multiple.selected;
        break;
      default:
      case 'single':
        if (!single.selected) break;
        modifiers.selected = single.selected;
        break;
    }
  }

  const status = getModifierStatus(date, modifiers);
  return status;
}
