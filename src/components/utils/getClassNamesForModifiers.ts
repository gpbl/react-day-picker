import type {
  InternalModifier,
  Modifiers,
  ModifiersClassNames,
} from "../../types/modifiers";
import type { ClassNames } from "../../types/ui";

export function getClassNamesForModifiers(
  modifiers: Modifiers,
  modifiersClassNames: ModifiersClassNames,
  classNames: ClassNames,
) {
  const modifierClassNames = Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .reduce((previousValue, [key]) => {
      if (modifiersClassNames[key]) {
        previousValue.push(modifiersClassNames[key as string]);
      } else if (classNames[`day_${key as InternalModifier}`]) {
        previousValue.push(classNames[`day_${key as InternalModifier}`]);
      }
      return previousValue;
    }, [] as string[]);

  return modifierClassNames;
}
