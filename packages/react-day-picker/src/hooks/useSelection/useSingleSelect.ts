import { useState } from 'react';

import { DayClickEventHandler, ModifierStatus, SelectMode } from '../../types';

export type UseSingleSelect = {
  selected: Date | undefined;
  onDayClick: DayClickEventHandler;
  reset: () => void;
};

export type UseSingleSelectCallback = (
  day: Date | undefined,
  clickedDay: Date,
  modifiers: ModifierStatus,
  e: React.MouseEvent
) => void;

/** Hook to handle single selections. */
export function useSingleSelect(
  mode: SelectMode,
  defaultValue?: unknown,
  required = false,
  callback?: UseSingleSelectCallback
): UseSingleSelect {
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
