import { DayPickerProps, ModifiersStatus } from 'types';

export function createStyle(
  day: Date,
  modifiers: ModifiersStatus,
  props: DayPickerProps
): React.CSSProperties {
  const { modifiersStyles, styles } = props;
  let style = { ...styles?.Day };
  if (styles) {
    Object.keys(modifiers).forEach((modifier) => {
      style = { ...style, ...styles[modifier] };
    });
  }
  if (modifiersStyles) {
    Object.keys(modifiers).forEach((modifier) => {
      style = { ...style, ...modifiersStyles[modifier] };
    });
  }
  return style;
}
