import { ModifiersStatus } from 'types/Modifiers';

import { DayPickerContextValue } from '../../..';

export function getClassNames(
  modifiersStatus: ModifiersStatus,
  dayPicker: DayPickerContextValue
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
