import {
  useDayPicker,
  useSelectMultiple,
  useSelectRange,
  useSelectSingle
} from 'contexts';
import { ModifiersArray } from 'types';
import { UseModifiers } from './types';
import { getModifierStatus } from './utils/getModifierStatus';

/** Return the modifiers and its styles for the specified date. */
export function useModifiers(date: Date): UseModifiers {
  const context = useDayPicker();
  const { isSingleMode, ...single } = useSelectSingle();
  const { isMultipleMode, ...multiple } = useSelectMultiple();
  const { isRangeMode, ...range } = useSelectRange();

  const today = !context.hideToday ? context.today : undefined;

  // Add to the modifiers in context those coming from selection
  const modifiers: ModifiersArray = {
    ...context.modifiers,
    today: context.modifiers.today ?? [today],
    disabled: context.modifiers.disabled
  };

  if (isSingleMode) {
    if (single.modifiers.selected) {
      modifiers.selected = single.modifiers.selected;
    }
  } else if (isMultipleMode) {
    if (multiple.modifiers.selected) {
      modifiers.selected = multiple.modifiers.selected;
    }
    if (multiple.modifiers.disabled) {
      modifiers.disabled = modifiers.disabled.concat(
        multiple.modifiers.disabled
      );
    }
  } else if (isRangeMode) {
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
      modifiers.disabled = modifiers.disabled.concat(range.modifiers.disabled);
    }
  }

  const status = getModifierStatus(date, modifiers);

  const modifierClassNames: string[] = [];

  Object.keys(status)
    .filter((modifier) => Boolean(status[modifier]))
    .forEach((modifier) => {
      const customClassName = context.modifierClassNames[modifier];
      if (customClassName) {
        modifierClassNames.push(customClassName);
      } else {
        modifierClassNames.push(`${context.modifierPrefix}${modifier}`);
      }
    });

  let modifierStyle = {};
  if (context.modifierStyles) {
    Object.keys(status).forEach((modifier) => {
      modifierStyle = {
        ...modifierStyle,
        ...context.modifierStyles?.[modifier]
      };
    });
  }

  return {
    modifiers: status,
    modifierClassNames: modifierClassNames,
    modifierStyle
  };
}
