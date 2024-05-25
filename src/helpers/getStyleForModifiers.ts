import type { CSSProperties } from "react";

import { Modifiers, ModifiersStyles, Styles } from "../types";

export function getStyleForModifiers(
  modifiers: Modifiers,
  modifiersStyles: Partial<ModifiersStyles>,
  styles: Partial<Styles>
): CSSProperties {
  let style: CSSProperties = { ...styles.day };
  Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .forEach(([modifier]) => {
      style = {
        ...style,
        ...modifiersStyles?.[modifier]
      };
    });
  return style;
}
