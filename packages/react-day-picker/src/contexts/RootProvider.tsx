import React from 'react';

import { DayPickerProps } from 'types/DayPicker';

import { DayPickerProvider } from './DayPicker/DayPickerProvider';
import { FocusProvider } from './Focus';
import { ModifiersProvider } from './Modifiers';
import { NavigationProvider } from './Navigation';
import { SelectMultipleProvider } from './SelectMultiple';
import { SelectRangeProvider } from './SelectRange';
import { SelectSingleProvider } from './SelectSingle';

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
              <ModifiersProvider>
                <FocusProvider>{children}</FocusProvider>
              </ModifiersProvider>
            </SelectRangeProvider>
          </SelectMultipleProvider>
        </SelectSingleProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
