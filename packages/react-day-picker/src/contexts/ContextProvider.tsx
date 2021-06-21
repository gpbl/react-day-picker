import * as React from 'react';

import { DayPickerProps } from 'types';

import { DayPickerProvider } from './DayPicker/DayPickerProvider';
import { FocusProvider } from './Focus';
import { NavigationProvider } from './Navigation';
import { SelectMultipleProvider } from './SelectMultiple';
import { SelectRangeProvider } from './SelectRange';
import { SelectSingleProvider } from './SelectSingle';

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
        <SelectSingleProvider initialProps={initialProps}>
          <SelectMultipleProvider initialProps={initialProps}>
            <SelectRangeProvider initialProps={initialProps}>
              <FocusProvider>{children}</FocusProvider>
            </SelectRangeProvider>
          </SelectMultipleProvider>
        </SelectSingleProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
