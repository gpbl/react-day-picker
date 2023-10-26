import { CSSProperties } from 'react';

import type { Styles } from '../../types/styles';
import type { Modifiers, ModifiersStyles } from '../../types/modifiers';

export function getStyleForModifiers(
  modifiers: Modifiers,
  modifiersStyles: Partial<ModifiersStyles>,
  styles: Styles
) {
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
