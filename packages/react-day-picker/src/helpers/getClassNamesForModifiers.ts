import type { ClassNames, ModifiersClassNames } from "../types/index.js";
import { DayFlag, SelectionState, UI } from "../UI.js";

/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */
export function getClassNamesForModifiers(
  modifiers: Record<string, boolean>,
  classNames: ClassNames,
  modifiersClassNames: ModifiersClassNames = {},
): string[] {
  const modifierClassNames = Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .reduce(
      (previousValue, [key]) => {
        if (modifiersClassNames[key]) {
          previousValue.push(modifiersClassNames[key as string]);
        } else if (classNames[DayFlag[key as DayFlag]]) {
          previousValue.push(classNames[DayFlag[key as DayFlag]]);
        } else if (classNames[SelectionState[key as SelectionState]]) {
          previousValue.push(classNames[SelectionState[key as SelectionState]]);
        }
        return previousValue;
      },
      [classNames[UI.Day]] as string[],
    );

  return modifierClassNames;
}
