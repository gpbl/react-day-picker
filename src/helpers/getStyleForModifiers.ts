import type { CSSProperties } from "react";

import type { Modifiers, ModifiersStyles } from "../types/index.js";

export function getStyleForModifiers(
  dayModifiers: Modifiers,
  modifiersStyles: Partial<ModifiersStyles> = {}
): CSSProperties {
  let style: CSSProperties = {};
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
