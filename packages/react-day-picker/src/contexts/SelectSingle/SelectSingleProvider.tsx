import * as React from 'react';

import {
  DayClickEventHandler,
  DayPickerProps,
  isDayPickerSingle
} from '../../types';
import { useControllablePropState } from '../useControllablePropState';

import { SelectSingleContext } from './SelectSingleContext';
import { SelectSingleModifiers } from './SelectSingleModifiers';

/** Provides the values for the [[SelectSingleProvider]]. */
export function SelectSingleProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  const [selected, setSelected] = useControllablePropState(
    isDayPickerSingle(initialProps)
      ? {
          value: initialProps.selected,
          defaultValue: initialProps.defaultSelected
        }
      : { defaultValue: undefined }
  );

  const handleDayClick: DayClickEventHandler = (day, dayModifiers, e) => {
    if (!isDayPickerSingle(initialProps)) return;

    if (dayModifiers.selected && !initialProps.required) {
      setSelected(undefined);
      initialProps.onSelect?.(undefined, day, dayModifiers, e);
      return;
    }
    setSelected(day);
    initialProps.onSelect?.(day, day, dayModifiers, e);
  };

  const modifiers: SelectSingleModifiers = { selected: [] };
  if (selected) modifiers.selected = [selected];

  return (
    <SelectSingleContext.Provider
      value={{ selected, handleDayClick, modifiers }}
    >
      {children}
    </SelectSingleContext.Provider>
  );
}
