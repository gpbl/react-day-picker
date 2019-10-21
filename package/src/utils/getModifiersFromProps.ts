import { DayPickerProps, Modifiers } from '../../typings/react-day-picker';

/**
 * Return the `modifiers` prop including the modifiers from shortcut-props
 * (`selected`, `disabled` and `hidden`)
 */
export function getModifiersFromProps(
  props: ReactDayPicker.DayPickerProps
): Modifiers {
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
