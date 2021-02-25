import { useState } from 'react';

import { isSameDay } from 'date-fns';

import {
  DayClickEventHandler,
  ModifierStatus,
  SelectMode,
  SelectMultipleEventHandler
} from '../../types';

export type UseMultipleSelect = {
  selected: Date[];
  onDayClick: DayClickEventHandler;
  reset: () => void;
};

/** Hook to handle multiple selections. */
export function useMultipleSelect(
  mode: SelectMode,
  defaultValue: unknown,
  required = false,
  callback?: SelectMultipleEventHandler
): UseMultipleSelect {
  const initialValue =
    mode === 'multiple' && defaultValue ? (defaultValue as Date[]) : [];

  const [selected, setSelected] = useState<Date[]>(initialValue);

  const handleClick: DayClickEventHandler = (
    day: Date,
    modifiers: ModifierStatus,
    e
  ) => {
    setSelected((currentValue) => {
      const newValue = [...currentValue];
      if (modifiers.selected) {
        if (required && currentValue.length === 1) {
          return newValue;
        }
        const index = currentValue.findIndex((value) => isSameDay(day, value));
        newValue.splice(index, 1);
      } else {
        newValue.push(day);
      }
      callback?.(newValue, day, modifiers, e);
      return newValue;
    });
  };

  const reset = () => {
    setSelected(initialValue);
  };
  return { selected, onDayClick: handleClick, reset };
}
