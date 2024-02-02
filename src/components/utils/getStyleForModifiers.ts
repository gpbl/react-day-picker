import type { CSSProperties } from "react";

import type { Modifiers, ModifiersStyles } from "../../types/modifiers";
import type { Styles } from "../../types/ui";

export function getStyleForModifiers(
  modifiers: Modifiers,
  modifiersStyles: Partial<ModifiersStyles>,
  styles: Partial<Styles>,
): CSSProperties {
  let style: CSSProperties = { ...styles.day };
  Object.entries(modifiers)
    .filter(([, active]) => active === true)
    .forEach(([modifier]) => {
      style = {
        ...style,
        ...modifiersStyles?.[modifier],
      };
    });
  return style;
}
