import type { CSSProperties } from "react";

import { UI } from "../UI";
import type { DayModifiers, ModifiersStyles, Styles } from "../types";

export function getStyleForModifiers(
  dayModifiers: DayModifiers,
  modifiersStyles: Partial<ModifiersStyles>,
  styles: Partial<Styles>
): CSSProperties {
  let style: CSSProperties = { ...styles[UI.Day] };
  Object.entries(dayModifiers)
    .filter(([, active]) => active === true)
    .forEach(([modifier]) => {
      style = {
        ...style,
        ...modifiersStyles?.[modifier]
      };
    });
  return style;
}
