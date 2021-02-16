import { DayPickerContextValue } from 'components/DayPicker';
import { ModifiersMatchers } from '../../../types';

const modifierProps = ['selected', 'disabled', 'hidden'];

export function getModifiersFromProps(
  context: DayPickerContextValue
): ModifiersMatchers {
  const modifiers = Object.assign({}, context.modifiers);
  modifierProps.forEach((propName) => {
    if (context[propName]) modifiers[propName] = context[propName];
  });
  return modifiers;
}
