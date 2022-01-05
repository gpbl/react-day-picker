import { DayPickerContextValue } from 'contexts/DayPicker';
import { ModifiersStatus } from 'types/Modifiers';

/** Return the style for the Day element, according to the given modifiers status. */
export function getDayStyle(
  dayPicker: Pick<DayPickerContextValue, 'modifiersStyles' | 'styles'>,
  modifiersStatus: ModifiersStatus
): React.CSSProperties {
  let style: React.CSSProperties = {
    ...dayPicker.styles.day
  };
  Object.keys(modifiersStatus).forEach((modifier) => {
    style = {
      ...style,
      ...dayPicker.modifiersStyles?.[modifier]
    };
  });
  return style;
}
