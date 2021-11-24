import * as React from 'react';

import { DayPickerProps, isDayPickerRange } from '../../types';

import { SelectRangeContext } from './SelectRangeContext';
import { SelectRangeContextValue } from '.';
import { SelectRangeProviderInternal } from './SelectRangeProviderInternal';

type SelectRangeProviderProps = {
  initialProps: DayPickerProps;
  children: React.ReactNode;
};

/** Provides the values for the [[SelectRangeProvider]]. */
export function SelectRangeProvider(
  props: SelectRangeProviderProps
): JSX.Element {
  if (!isDayPickerRange(props.initialProps)) {
    const emptyContextValue: SelectRangeContextValue = {
      selected: undefined,
      modifiers: {
        selected: [],
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return (
      <SelectRangeContext.Provider value={emptyContextValue}>
        {props.children}
      </SelectRangeContext.Provider>
    );
  }
  return (
    <SelectRangeProviderInternal
      initialProps={props.initialProps}
      children={props.children}
    />
  );
}
