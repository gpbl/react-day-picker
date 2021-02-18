import { useState } from 'react';

import {
  DayClickEventHandler,
  SelectEventHandler,
  SelectionOptions
} from '../../types';

export type UseSingleSelection = [
  selection: Date | undefined,
  handleClick: DayClickEventHandler,
  reset: () => void
];

export function useSingleSelection(
  initialValue?: Date,
  onSelect?: SelectEventHandler,
  options: SelectionOptions = { required: false }
): UseSingleSelection {
  const [value, setValue] = useState<Date | undefined>(initialValue);

  const setSelected: DayClickEventHandler = (day, modifiers, e) => {
    if (!options?.required && modifiers.selected) setValue(undefined);
    else setValue(day);
    onSelect?.(day);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, setSelected, reset];
}
