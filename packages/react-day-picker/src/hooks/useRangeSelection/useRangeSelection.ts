import { useState } from 'react';

import { SelectEventHandler, SelectionOptions } from '../../types';
import { DateRange } from '../../types/DateRange';
import { addToRange } from './addToRange';

const emptyRange: DateRange = { from: undefined, to: undefined };

export type RangeSelectionHandler = (day: Date) => void;

export type UseRangeSelection = [
  selection: DateRange | undefined,
  handleClick: (day: Date) => void,
  reset: () => void
];

/**
 * Return values and functions to handle range selection.
 */
export function useRangeSelection(
  initialValue?: DateRange,
  onSelect?: SelectEventHandler,
  options: SelectionOptions = { required: false }
): UseRangeSelection {
  const [value, setValue] = useState<DateRange | undefined>(initialValue);

  const handleSelect: RangeSelectionHandler = (day) => {
    setValue((currentValue) => {
      const newValue = addToRange(day, currentValue, options.required);
      onSelect?.(newValue);
      setValue(newValue);
      return newValue;
    });
    return;
  };

  const reset = () => {
    setValue(initialValue || emptyRange);
  };

  return [value, handleSelect, reset];
}
