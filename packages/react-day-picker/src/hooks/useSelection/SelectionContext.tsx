import * as React from 'react';

import { useDayPicker } from '../useDayPicker';
import { useMultipleSelect, UseMultipleSelect } from './useSelectMultiple';
import { useRangeSelect, UseRangeSelect } from './useSelectRange';
import { useSingleSelect, UseSingleSelect } from './useSingleSelect';

export type SelectionContextValue = {
  single: UseSingleSelect;
  multiple: UseMultipleSelect;
  range: UseRangeSelect;
};

export const SelectionContext = React.createContext<
  SelectionContextValue | undefined
>(undefined);

export type SelectionProviderProps = {
  children: React.ReactNode;
};

/**
 * Provides the setters and values for the controlled selection modes.
 */
export const SelectionProvider = (
  props: SelectionProviderProps
): JSX.Element => {
  const dayPickerProps = useDayPicker();

  const single = useSingleSelect(
    'single',
    dayPickerProps.defaultSelected,
    dayPickerProps.required,
    dayPickerProps.onSelect
  );
  const multiple = useMultipleSelect(
    'multiple',
    dayPickerProps.defaultSelected,
    dayPickerProps.required,
    dayPickerProps.onSelectMultiple
  );
  const range = useRangeSelect(
    'range',
    dayPickerProps.defaultSelected,
    dayPickerProps.required,
    dayPickerProps.onSelectRange
  );

  return (
    <SelectionContext.Provider value={{ single, multiple, range }}>
      {props.children}
    </SelectionContext.Provider>
  );
};
