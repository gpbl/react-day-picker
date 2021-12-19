import { DayPickerContextValue } from 'contexts/DayPicker';
import { CustomModifiers } from 'types/Modifiers';

import { toMatcherArray } from './toMatcherArray';

/** Return the [[CustomModifiers]] from the DayPicker context. */
export function getCustomModifiers(
  dayPicker: DayPickerContextValue
): CustomModifiers {
  const customModifiers: CustomModifiers = {};
  Object.entries(dayPicker.modifiers).forEach(([modifier, matcher]) => {
    customModifiers[modifier] = toMatcherArray(matcher);
  });
  return customModifiers;
}
