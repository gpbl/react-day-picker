import { DayPickerProps, DayModifiers } from '../../../DayPicker';

/**
 * Return the `modifiers` prop including the modifiers from shortcut-props
 * (`selected`, `disabled` and `hidden`)
 */
export function getModifiersFromProps(props: DayPickerProps): DayModifiers {
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
