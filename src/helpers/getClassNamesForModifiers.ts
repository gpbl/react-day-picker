import { DayModifier, SelectionModifier } from "../UI";
import type {
  ModifiersClassNames,
  ClassNames,
  InternalModifier
} from "../types";

export function getClassNamesForModifiers(
  modifiers: Record<string, boolean>,
  modifiersClassNames: ModifiersClassNames,
  classNames: ClassNames
) {
  const modifierClassNames = Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .reduce((previousValue, [key]) => {
      if (modifiersClassNames[key]) {
        previousValue.push(modifiersClassNames[key as string]);
      } else if (classNames[DayModifier[key as InternalModifier]]) {
        previousValue.push(classNames[DayModifier[key as InternalModifier]]);
      } else if (classNames[SelectionModifier[key as SelectionModifier]]) {
        previousValue.push(
          classNames[SelectionModifier[key as SelectionModifier]]
        );
      }
      return previousValue;
    }, [] as string[]);

  return modifierClassNames;
}
