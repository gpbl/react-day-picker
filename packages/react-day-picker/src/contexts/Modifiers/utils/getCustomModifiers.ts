import { DayPickerContextValue } from 'contexts/DayPicker';
import { CustomModifiers } from 'types/Modifiers';

import { matcherToArray } from './matcherToArray';

/** Return the [[CustomModifiers]] from the DayPicker context. */
export function getCustomModifiers(
  dayPicker: DayPickerContextValue
): CustomModifiers {
  const customModifiers: CustomModifiers = {};
  Object.entries(dayPicker.modifiers).forEach(([modifier, matcher]) => {
    customModifiers[modifier] = matcherToArray(matcher);
  });
  return customModifiers;
}
