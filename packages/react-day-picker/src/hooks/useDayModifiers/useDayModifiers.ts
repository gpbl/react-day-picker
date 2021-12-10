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

  const modifiersContext = useModifiers();

  // TODO: Is there a better name for the type ModifierStatus?
  const modifiers = getModifierStatus(date, modifiersContext);

  const modifierClassNames: string[] = [];

  Object.keys(modifiers).forEach((modifier) => {
    const customClassName = context.modifierClassNames[modifier];
    if (customClassName) {
      modifierClassNames.push(customClassName);
    } else {
      modifierClassNames.push(`${context.modifierPrefix}${modifier}`);
    }
  });

  let modifierStyle = {};
  if (context.modifierStyles) {
    Object.keys(modifiers).forEach((modifier) => {
      modifierStyle = {
        ...modifierStyle,
        ...context.modifierStyles?.[modifier]
      };
    });
  }

  return {
    modifiers,
    modifierClassNames,
    modifierStyle
  };
}
