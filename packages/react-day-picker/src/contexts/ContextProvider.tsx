import * as React from 'react';

import { DayPickerProps } from 'types';
import { DayPickerProvider } from './DayPickerContext';
import { FocusProvider } from './FocusContext';
import { NavigationProvider } from './NavigationContext';
import { SelectMultipleProvider } from './SelectMultipleContext';
import { SelectRangeProvider } from './SelectRangeContext';
import { SelectSingleProvider } from './SelectSingleContext';

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
