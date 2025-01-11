import { DayFlag, SelectionState, UI } from "../UI.js";
import type { ModifiersClassNames, ClassNames } from "../types/index.js";

export function getDayCellClassNames(
  modifiers: Record<string, boolean>,
  classNames: ClassNames,
  modifiersClassNames: ModifiersClassNames = {}
) {
  const result = Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .reduce(
      (val, [modifier]) => {
        val.push(`${classNames[UI.Day]}-${modifier}`);
        if (modifiersClassNames[modifier]) {
          val.push(modifiersClassNames[modifier as string]);
        } else if (classNames[DayFlag[modifier as DayFlag]]) {
          val.push(classNames[DayFlag[modifier as DayFlag]]);
        } else if (classNames[SelectionState[modifier as SelectionState]]) {
          val.push(classNames[SelectionState[modifier as SelectionState]]);
        }
        return val;
      },
      [classNames[UI.Day]] as string[]
    );

  return result;
}
