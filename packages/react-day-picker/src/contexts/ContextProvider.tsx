import React from 'react';

import {
  DayPickerProvider,
  FocusProvider,
  NavigationProvider,
  SelectMultipleProvider,
  SelectRangeProvider,
  SelectSingleProvider
} from 'contexts';
import { DayPickerProps } from 'types';

/** The props of the [[ContextProvider]] provider. */
export type ContextProviderProps = DayPickerProps & {
  children: React.ReactNode;
};

/** Provide the value for all the context providers. */
export function ContextProvider(props: ContextProviderProps): JSX.Element {
  const { children, ...initialProps } = props;
  return (
    <DayPickerProvider initialProps={initialProps}>
      <NavigationProvider>
        <SelectRangeProvider initialProps={initialProps}>
          <SelectMultipleProvider initialProps={initialProps}>
            <SelectSingleProvider initialProps={initialProps}>
              <FocusProvider>{children}</FocusProvider>
            </SelectSingleProvider>
          </SelectMultipleProvider>
        </SelectRangeProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
