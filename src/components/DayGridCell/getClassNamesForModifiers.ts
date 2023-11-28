import type { ClassNames } from '../../types/styles';
import type {
  InternalModifier,
  Modifiers,
  ModifiersClassNames
} from '../../types/modifiers';

export function getClassNamesForModifiers(
  modifiers: Modifiers,
  modifiersClassNames: ModifiersClassNames,
  classNames: ClassNames
): string {
  const modifierClassNames = Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .reduce((previousValue, [key]) => {
      if (modifiersClassNames[key]) {
        previousValue.push(modifiersClassNames[key as string]);
      } else {
        previousValue.push(classNames[`day_${key as InternalModifier}`]);
      }
      return previousValue;
    }, [] as string[]);

  const className = [classNames.day, ...modifierClassNames].join(' ');
  return className;
}
