import { DayPicker } from 'types/DayPicker';

export function getModifiersFromProps(props: DayPicker) {
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
