import { UI, DayModifier } from "../UI";
import type {
  DayModifiers,
  ModifiersClassNames,
  ClassNames,
  InternalModifier
} from "../types";

export function getClassNamesForModifiers(
  dayModifiers: DayModifiers,
  modifiersClassNames: ModifiersClassNames,
  classNames: ClassNames
) {
  const modifierClassNames = Object.entries(dayModifiers)
    .filter(([, active]) => active === true)
    .reduce((previousValue, [key]) => {
      if (modifiersClassNames[key]) {
        previousValue.push(modifiersClassNames[key as string]);
      } else if (classNames[DayModifier[key as InternalModifier]]) {
        previousValue.push(classNames[DayModifier[key as InternalModifier]]);
      }
      return previousValue;
    }, [] as string[]);

  return modifierClassNames;
}
