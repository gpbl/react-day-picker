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
  /** Override the selection contexts. */
  selection?: {
    single?: SelectSingleContextValue;
    multiple?: SelectMultipleContextValue;
    range?: SelectRangeContextValue;
  }
) {
  const wrapper = ({ children }: { children?: React.ReactNode }) => {
    const MockSingleProvider = selection?.single
      ? SelectSingleContext.Provider
      : React.Fragment;
    const MockMultipleProvider = selection?.single
      ? SelectMultipleContext.Provider
      : React.Fragment;
    const MockRangeProvider = selection?.single
      ? SelectRangeContext.Provider
      : React.Fragment;
    return (
      <RootProvider {...dayPickerProps}>
        <MockSingleProvider value={selection?.single}>
          <MockMultipleProvider value={selection?.multiple}>
            <MockRangeProvider value={selection?.range}>
              {children}
            </MockRangeProvider>
          </MockMultipleProvider>
        </MockSingleProvider>
      </RootProvider>
    );
  };

  return renderHook<TProps, TResult>(callback, { wrapper });
}
