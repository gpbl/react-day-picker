import { DayPickerProps, ModifiersMatchers } from 'types';

export function getModifiersFromProps(
  props: Pick<DayPickerProps, 'selected' | 'disabled' | 'hidden' | 'modifiers'>
): ModifiersMatchers {
  const modifiers = Object.assign({}, props.modifiers);
  if (props.selected) {
    modifiers.selected = props.selected;
  }
  if (props.disabled) {
    modifiers.disabled = props.disabled;
  }
  if (props.hidden) {
    modifiers.hidden = props.hidden;
  }
  return modifiers;
}
