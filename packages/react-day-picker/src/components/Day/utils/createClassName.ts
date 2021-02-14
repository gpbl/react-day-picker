import { DayPickerProps, ModifiersStatus } from '../../../types';

export function createClassName(
  day: Date,
  modifiers: ModifiersStatus,
  props: DayPickerProps
): string {
  const { classNames, modifiersClassNames } = props;
  const className: (string | undefined)[] = [];
  if (classNames?.Day) {
    className.push(classNames.Day);
  }

  Object.keys(modifiers)
    .filter((modifier) => Boolean(modifiers[modifier]))
    .forEach((modifier) => {
      if (modifiersClassNames?.[modifier]) {
        className.push(modifiersClassNames[modifier]);
      } else {
        className.push(`${props.modifierPrefix}${modifier}`);
      }
    });
  return className.join(' ');
}
