import { DayPickerProps, ModifiersMatchers } from '../../../types';

export function getModifiersFromProps(
  props: Pick<DayPickerProps, 'selected' | 'disabled' | 'hidden' | 'modifiers'>
): ModifiersMatchers {
  const modifiers = Object.assign({}, props.modifiers);
  const modifierProps = ['selected', 'disabled', 'hidden'];
  modifierProps.forEach((propName) => {
    if (props[propName]) {
      modifiers[propName] = props[propName];
    }
  });
  return modifiers;
}
