import React from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { RootProvider } from 'contexts/RootProvider';
import {
  SelectMultipleContext,
  SelectMultipleContextValue
} from 'contexts/SelectMultiple';
import {
  SelectRangeContext,
  SelectRangeContextValue
} from 'contexts/SelectRange';
import {
  SelectSingleContext,
  SelectSingleContextValue
} from 'contexts/SelectSingle';
import { DayPickerProps } from 'types/DayPicker';
import { DayPickerCustomProps } from 'types/DayPickerCustom';
import { DayPickerMultipleProps } from 'types/DayPickerMultiple';
import { DayPickerRangeProps } from 'types/DayPickerRange';
import { DayPickerSingleProps } from 'types/DayPickerSingle';

/** Render a hook wrapped with the Root Provider. */
export function customRenderHook<TProps, TResult>(
  callback: (props?: TProps) => TResult,
  /** The props passed to DayPicker. */
  dayPickerProps?:
    | DayPickerProps
    | DayPickerMultipleProps
    | DayPickerSingleProps
    | DayPickerCustomProps
    | DayPickerRangeProps,
  /** Override the selection contexts. (TODO: make those optional) */
  selection?: {
    single: SelectSingleContextValue;
    multiple: SelectMultipleContextValue;
    range: SelectRangeContextValue;
  }
) {
  const wrapper = ({ children }: { children?: React.ReactNode }) => (
    <RootProvider {...dayPickerProps}>
      <SelectSingleContext.Provider value={selection?.single}>
        <SelectRangeContext.Provider value={selection?.range}>
          <SelectMultipleContext.Provider value={selection?.multiple}>
            {children}
          </SelectMultipleContext.Provider>
        </SelectRangeContext.Provider>
      </SelectSingleContext.Provider>
    </RootProvider>
  );
  return renderHook<TProps, TResult>(callback, { wrapper });
}
