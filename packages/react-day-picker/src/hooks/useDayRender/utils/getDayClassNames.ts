import { DayPickerContextValue } from 'contexts/DayPicker';
import { ActiveModifiers } from 'types/Modifiers';

/** Return the class names for the Day element, according to the given active modifiers. */
export function getDayClassNames(
  dayPicker: Pick<
    DayPickerContextValue,
    'modifiersClassNames' | 'classNames' | 'modifierPrefix'
  >,
  activeModifiers: ActiveModifiers
) {
  const classNames: string[] = [dayPicker.classNames.day];
  Object.keys(activeModifiers).forEach((modifier) => {
    const customClassName = dayPicker.modifiersClassNames[modifier];
    if (customClassName) {
      classNames.push(customClassName);
    } else {
      classNames.push(`${dayPicker.modifierPrefix}${modifier}`);
    }
  });
  return classNames;
}
