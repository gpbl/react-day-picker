import * as React from 'react';

import { DayPickerProps, isDayPickerMultiple } from '../../types';
import {
  SelectMultipleContext,
  SelectMultipleContextValue
} from './SelectMultipleContext';
import { SelectMultipleProviderInternal } from './SelectMultipleProviderInternal';

type SelectMultipleProviderProps = {
  initialProps: DayPickerProps;
  children: React.ReactNode;
};

/** Provides the values for the [[SelectMultipleContext]]. */
export function SelectMultipleProvider(
  props: SelectMultipleProviderProps
): JSX.Element {
  if (!isDayPickerMultiple(props.initialProps)) {
    const emptyContextValue: SelectMultipleContextValue = {
      selected: undefined,
      modifiers: {
        selected: [],
        disabled: []
      }
    };
    return (
      <SelectMultipleContext.Provider value={emptyContextValue}>
        {props.children}
      </SelectMultipleContext.Provider>
    );
  }
  return (
    <SelectMultipleProviderInternal
      initialProps={props.initialProps}
      children={props.children}
    />
  );
}
