import { useDayPicker } from 'contexts/DayPicker';
import { useModifiers } from 'contexts/Modifiers';
import { ModifiersStatus } from 'types/Modifiers';

import { getModifiersStatus } from './utils/getModifiersStatus';

export type DayModifiers = {
  /** The status of the modifiers for the day */
  status: ModifiersStatus;
  /** The class names based on modifiers. */
  classNames: string[];
  /** The style based on modifiers. */
  style: React.CSSProperties;
};

/** Return the modifiers and its styles for the specified date. */
export function useDayModifiers(date: Date): DayModifiers {
  const dayPicker = useDayPicker();
  const modifiers = useModifiers();
  const status = getModifiersStatus(date, modifiers);
  const classNames: string[] = [];
  Object.keys(status).forEach((modifier) => {
    const customClassName = dayPicker.modifiersClassNames[modifier];
    if (customClassName) {
      classNames.push(customClassName);
    } else {
      classNames.push(`${dayPicker.modifierPrefix}${modifier}`);
    }
  });

  let style = {};
  if (dayPicker.modifiersStyles) {
    Object.keys(status).forEach((modifier) => {
      style = {
        ...style,
        ...dayPicker.modifiersStyles?.[modifier]
      };
    });
  }

  return {
    status,
    classNames,
    style
  };
}
