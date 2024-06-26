import { DayFlag, SelectionState } from "../UI";
import type { ModifiersClassNames, ClassNames } from "../types";

export function getClassNamesForModifiers(
  modifiers: Record<string, boolean>,
  classNames: ClassNames,
  modifiersClassNames: ModifiersClassNames = {}
) {
  const modifierClassNames = Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .reduce((previousValue, [key]) => {
      if (modifiersClassNames[key]) {
        previousValue.push(modifiersClassNames[key as string]);
      } else if (classNames[DayFlag[key as DayFlag]]) {
        previousValue.push(classNames[DayFlag[key as DayFlag]]);
      } else if (classNames[SelectionState[key as SelectionState]]) {
        previousValue.push(classNames[SelectionState[key as SelectionState]]);
      }
      return previousValue;
    }, [] as string[]);

  return modifierClassNames;
}
