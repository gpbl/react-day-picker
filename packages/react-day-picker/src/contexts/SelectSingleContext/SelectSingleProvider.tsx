import * as React from 'react';

import {
  DayClickEventHandler,
  DayPickerProps,
  isDayPickerSingle,
  ModifiersArray
} from 'types';
import { SelectSingleContext } from './SelectSingleContext';

/** Provides the values for the [[SelectSingleProvider]]. */
export function SelectSingleProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  let initialSelected;
  if (isDayPickerSingle(initialProps)) {
    initialSelected = initialProps.defaultSelected;
  }

  const [selected, setSelected] = React.useState<Date | undefined>(
    initialSelected
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

  const modifiers: ModifiersArray = {};
  if (selected) modifiers.selected = [selected];

  return (
    <SelectSingleContext.Provider
      value={{ selected, handleDayClick, modifiers }}
    >
      {children}
    </SelectSingleContext.Provider>
  );
}
