import {
  isDayPickerMultiple,
  isDayPickerRange,
  isDayPickerSingle,
  Modifiers
} from 'types';

import { useDayPicker } from 'contexts/DayPicker';
import { useSelectMultiple } from 'contexts/SelectMultiple';
import { useSelectRange } from 'contexts/SelectRange';
import { useSelectSingle } from 'contexts/SelectSingle';

import { UseModifiers } from './types';
import { getModifierStatus } from './utils/getModifierStatus';

/** Return the modifiers and its styles for the specified date. */
export function useModifiers(date: Date): UseModifiers {
  const context = useDayPicker();

  const singleSelect = useSelectSingle();
  const multipleSelect = useSelectMultiple();
  const rangeSelect = useSelectRange();

  // TODO: modifiers from context should not be overridden
  const modifiers: Modifiers = {
    ...context.modifiers,
    today: context.modifiers.today ?? [context.today],
    disabled: context.modifiers.disabled
  };

  if (isDayPickerSingle(context)) {
    modifiers.selected = modifiers.selected.concat(
      singleSelect.modifiers.selected ?? []
    );
  } else if (isDayPickerMultiple(context)) {
    modifiers.selected = modifiers.selected.concat(
      multipleSelect.modifiers.selected ?? []
    );
    modifiers.disabled = modifiers.disabled.concat(
      multipleSelect.modifiers.disabled ?? []
    );
  } else if (isDayPickerRange(context)) {
    modifiers.selected = modifiers.selected.concat(
      multipleSelect.modifiers.selected ?? []
    );
    modifiers.disabled = modifiers.disabled.concat(
      multipleSelect.modifiers.disabled ?? []
    );
    modifiers.range_start = rangeSelect.modifiers.range_start ?? [];
    modifiers.range_middle = rangeSelect.modifiers.range_middle ?? [];
    modifiers.range_end = rangeSelect.modifiers.range_end ?? [];
    modifiers.disabled = modifiers.disabled.concat(
      rangeSelect.modifiers.disabled ?? []
    );
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
