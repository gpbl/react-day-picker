import { DayPickerContextValue } from 'contexts/DayPicker';
import { ModifiersStatus } from 'types/Modifiers';

/** Return the class names for the Day element, according to the given modifiers status. */
export function getDayClassNames(
  dayPicker: Pick<
    DayPickerContextValue,
    'modifiersClassNames' | 'classNames' | 'modifierPrefix'
  >,
  modifiersStatus: ModifiersStatus
) {
  const classNames: string[] = [dayPicker.classNames.day];
  Object.keys(modifiersStatus).forEach((modifier) => {
    const customClassName = dayPicker.modifiersClassNames[modifier];
    if (customClassName) {
      classNames.push(customClassName);
    } else {
      classNames.push(`${dayPicker.modifierPrefix}${modifier}`);
    }
  });
  return classNames;
}
