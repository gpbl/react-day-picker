import { useState } from 'react';

import { DayClickEventHandler, ModifierStatus, SelectMode } from '../../types';
import { DateRange } from '../../types/DateRange';
import { addToRange } from './utils/addToRange';

export type RangeSelectionHandler = (day: Date) => void;

export type UseRangeSelect = {
  selected: DateRange | undefined;
  onDayClick: DayClickEventHandler;
  reset: () => void;
};

export type UseRangeCallback = (
  range: DateRange | undefined,
  day: Date,
  modifiers: ModifierStatus,
  e: React.MouseEvent
) => void;

/** Hook to handle range selections. */
export function useRangeSelect(
  mode: SelectMode,
  defaultValue?: unknown,
  required = false,
  callback?: UseRangeCallback
): UseRangeSelect {
  const initialValue =
    mode === 'range' && defaultValue ? (defaultValue as DateRange) : undefined;

  const [selected, setSelected] = useState(initialValue);

  const onDayClick: DayClickEventHandler = (day, modifiers, e) => {
    setSelected((currentValue) => {
      const newValue = addToRange(day, currentValue, required);
      callback?.(newValue, day, modifiers, e);
      setSelected(newValue);
      return newValue;
    });
    return;
  };

  const reset = () => {
    setSelected(initialValue || undefined);
  };

  return { selected, onDayClick, reset };
}
