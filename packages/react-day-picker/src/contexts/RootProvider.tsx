import React from 'react';

import { DayPickerProps } from '../types';
import { DayPickerProvider } from './DayPicker/DayPickerProvider';
import { FocusProvider } from './Focus/FocusContext';
import { NavigationProvider } from './Navigation/NavigationContext';
import { SelectMultipleProvider } from './SelectMultiple/SelectMultipleContext';
import { SelectRangeProvider } from './SelectRange/SelectRangeContext';
import { SelectSingleProvider } from './SelectSingle/SelectSingleContext';

/** The props of [[RootProvider]]. */
export type RootContext = DayPickerProps & {
  children: React.ReactNode;
};

/** Provide the value for all the context providers. */
export function RootProvider(props: RootContext): JSX.Element {
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
