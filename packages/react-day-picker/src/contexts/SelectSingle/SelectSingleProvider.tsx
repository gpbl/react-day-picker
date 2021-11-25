import * as React from 'react';

import { DayPickerProps, isDayPickerSingle } from '../../types';
import { SelectSingleContextValue } from './';
import { SelectSingleContext } from './SelectSingleContext';
import { SelectSingleProviderInternal } from './SelectSingleProviderInternal';

type SelectSingleProviderProps = {
  initialProps: DayPickerProps;
  children: React.ReactNode;
};

/** Provides the values for the [[SelectSingleProvider]]. */
export function SelectSingleProvider(
  props: SelectSingleProviderProps
): JSX.Element {
  if (!isDayPickerSingle(props.initialProps)) {
    const emptyContextValue: SelectSingleContextValue = {
      selected: undefined,
      modifiers: { selected: [] }
    };
    return (
      <SelectSingleContext.Provider value={emptyContextValue}>
        {props.children}
      </SelectSingleContext.Provider>
    );
  }
  return (
    <SelectSingleProviderInternal
      initialProps={props.initialProps}
      children={props.children}
    />
  );
}
