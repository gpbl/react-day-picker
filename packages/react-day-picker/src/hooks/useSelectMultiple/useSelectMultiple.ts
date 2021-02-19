import { useState } from 'react';

import { isSameDay } from 'date-fns';

import {
  DayClickEventHandler,
  ModifiersStatus,
  SelectMode,
  SelectMultipleEventHandler
} from '../../types';

export type UseMultipleSelect = {
  selected: Date[];
  onDayClick: DayClickEventHandler;
  reset: () => void;
};

export function useMultipleSelect(
  mode: SelectMode,
  defaultValue: unknown,
  required = false,
  callback?: SelectMultipleEventHandler
): UseMultipleSelect {
  const initialValue =
    mode === 'multiple' && defaultValue ? (defaultValue as Date[]) : [];

  const [selected, setSelected] = useState<Date[]>(initialValue);

  const onDayClick: DayClickEventHandler = (
    day: Date,
    modifiers: ModifiersStatus,
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
  return { selected, onDayClick, reset };
}
