import { useState } from 'react';

import { DayClickEventHandler, ModifiersStatus, SelectMode } from '../../types';

export type UseSelect = {
  selected: Date | undefined;
  onDayClick: DayClickEventHandler;
  reset: () => void;
};

export type UseSelectCallback = (
  day: Date | undefined,
  clickedDay: Date,
  modifiers: ModifiersStatus,
  e: React.MouseEvent
) => void;

export function useSelect(
  mode: SelectMode,
  defaultValue?: unknown,
  required = false,
  callback?: UseSelectCallback
): UseSelect {
  const initialValue =
    mode === 'single' && defaultValue ? (defaultValue as Date) : undefined;
  const [selected, setSelected] = useState<Date | undefined>(initialValue);

  const onDayClick: DayClickEventHandler = (day, modifiers, e) => {
    if (modifiers.selected) {
      if (!required) {
        setSelected(undefined);
        callback?.(undefined, day, modifiers, e);
      }
      return;
    }
    setSelected(day);
    callback?.(day, day, modifiers, e);
  };

  const reset = () => {
    setSelected(initialValue);
  };

  return { selected, onDayClick, reset };
}
