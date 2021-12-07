import { ModifierStatus } from '../../types/Modifiers';
import { useDayPicker } from '../../contexts/DayPicker';
import { useModifiers } from '../../contexts/Modifiers';
import { getModifierStatus } from './utils/getModifierStatus';

export type DayModifiers = {
  /** The status of the modifiers */
  modifiers: ModifierStatus;
  /** The class names based on modifiers. */
  modifierClassNames: string[];
  /** The style based on modifiers. */
  modifierStyle: React.CSSProperties;
};

/** Return the modifiers and its styles for the specified date. */
export function useDayModifiers(date: Date): DayModifiers {
  const context = useDayPicker();

  const modifiers = useModifiers();

  const status = getModifierStatus(date, modifiers);

  const modifierClassNames: string[] = [];

  Object.keys(status)
    .filter((modifier) => Boolean(status[modifier]))
    .forEach((modifier) => {
      const customClassName = context.modifierClassNames[modifier];
      if (customClassName) {
        modifierClassNames.push(customClassName);
      } else {
        modifierClassNames.push(`${context.modifierPrefix}${modifier}`);
      }
    });

  let modifierStyle = {};
  if (context.modifierStyles) {
    Object.keys(status).forEach((modifier) => {
      modifierStyle = {
        ...modifierStyle,
        ...context.modifierStyles?.[modifier]
      };
    });
  }

  return {
    modifiers: status,
    modifierClassNames: modifierClassNames,
    modifierStyle
  };
}
