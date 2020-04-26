import { DayPickerProps, DaysModifiers } from '../../components/DayPicker';

/**
 * Return the `modifiers` prop including the modifiers from shortcut-props
 * (`selected`, `disabled` and `hidden`)
 */
export function getModifiersFromProps(props: DayPickerProps): DaysModifiers {
  const modifiers = Object.assign({}, props.days);
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
