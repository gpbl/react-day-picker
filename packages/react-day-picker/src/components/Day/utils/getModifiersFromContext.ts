import { DayPickerContextValue, ModifiersMatchers } from '../../../types';

/**
 * Return the modifiers from the context by checking the values of selected,
 * disabled or hidden.
 */
export function getModifiersFromContext(
  context: DayPickerContextValue
): ModifiersMatchers {
  const modifiers = Object.assign({}, context.modifiers);
  ['selected', 'disabled', 'hidden'].forEach((propName) => {
    if (context[propName]) modifiers[propName] = context[propName];
  });
  return modifiers;
}
