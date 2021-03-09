import React from 'react';

import {
  DayClickEventHandler,
  DayPickerProps,
  ModifiersArray,
  SelectSingleContextValue
} from 'types';

/** A context holding the selection for the single selection mode. */
export const SelectSingleContext = React.createContext<
  SelectSingleContextValue | undefined
>(undefined);

/** Return the context for the single selection mode. */
export function SelectSingleProvider({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element {
  let initialSelected;
  if (initialProps.mode === 'single') {
    initialSelected = initialProps.defaultSelected;
  }

  const [selected, setSelected] = React.useState<Date | undefined>(
    initialSelected
  );

  const handleDayClick: DayClickEventHandler = (day, dayModifiers, e) => {
    if (initialProps.mode !== 'single') {
      return;
    }
    if (dayModifiers.selected && initialProps.min !== 1) {
      setSelected(undefined);
      initialProps.onSelect?.(undefined, day, dayModifiers, e);
      return;
    }
    setSelected(day);
    initialProps.onSelect?.(day, day, dayModifiers, e);
  };

  const modifiers: ModifiersArray = {};
  if (selected) {
    modifiers.selected = [selected];
  }

  return (
    <SelectSingleContext.Provider
      value={{ selected, handleDayClick, modifiers }}
    >
      {children}
    </SelectSingleContext.Provider>
  );
}
