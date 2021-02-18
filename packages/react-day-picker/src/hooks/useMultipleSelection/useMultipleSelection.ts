import { useState } from 'react';

import {
  ModifiersStatus,
  SelectEventHandler,
  SelectionOptions
} from '../../types';

export type MultipleSelectionHandler = (
  day: Date,
  modifiers: ModifiersStatus
) => void;

export function useMultipleSelection(
  initialValue: Date[] = [],
  onSelect?: SelectEventHandler,
  options: SelectionOptions = { required: false }
): [Date[], MultipleSelectionHandler, () => void] {
  const [value, setValue] = useState<Date[]>(initialValue);

  const setSelected: MultipleSelectionHandler = (day, modifiers) => {
    setValue((currentValue) => {
      const newValue = [...currentValue];
      if (modifiers.selected) {
        if (options.required && currentValue.length === 1) {
          return newValue;
        }
        const index = currentValue.indexOf(day);
        newValue.splice(index, 1);
      } else {
        newValue.push(day);
      }
      onSelect?.(newValue);
      return newValue;
    });
  };

  const reset = () => {
    setValue(initialValue || []);
  };
  return [value, setSelected, reset];
}
