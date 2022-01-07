import React from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { FocusContext, FocusContextValue } from 'contexts/Focus';
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

export type CustomRenderHookContexts = {
  single?: SelectSingleContextValue;
  multiple?: SelectMultipleContextValue;
  range?: SelectRangeContextValue;
  focus?: FocusContextValue;
};
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
  /** Override the single contexts. */
  contexts?: CustomRenderHookContexts
) {
  const wrapper = ({ children }: { children?: React.ReactNode }) => {
    const MockSingleProvider = contexts?.single
      ? SelectSingleContext.Provider
      : React.Fragment;
    const MockMultipleProvider = contexts?.single
      ? SelectMultipleContext.Provider
      : React.Fragment;
    const MockRangeProvider = contexts?.single
      ? SelectRangeContext.Provider
      : React.Fragment;
    const MockFocusProvider = contexts?.single
      ? FocusContext.Provider
      : React.Fragment;
    return (
      <RootProvider {...dayPickerProps}>
        <MockSingleProvider value={contexts?.single}>
          <MockMultipleProvider value={contexts?.multiple}>
            <MockRangeProvider value={contexts?.range}>
              <MockFocusProvider value={contexts?.focus}>
                {children}
              </MockFocusProvider>
            </MockRangeProvider>
          </MockMultipleProvider>
        </MockSingleProvider>
      </RootProvider>
    );
  };

  return renderHook<TProps, TResult>(callback, { wrapper });
}
