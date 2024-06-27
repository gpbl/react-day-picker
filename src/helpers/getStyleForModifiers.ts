import type { CSSProperties } from "react"

import { UI } from "../UI.js"
import type { Modifiers, ModifiersStyles, Styles } from "../types/index.js"

export function getStyleForModifiers(
  dayModifiers: Modifiers,
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
