import { DayPickerProps } from 'types/props';

export function getModifiersFromProps(props: DayPickerProps) {
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
