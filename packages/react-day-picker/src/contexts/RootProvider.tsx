import React from 'react';

import { ModifiersProvider } from 'contexts/Modifiers/ModifiersContext';
import { DayPickerBase } from 'types/DayPickerBase';

import { DayPickerProvider } from './DayPicker';
import { FocusProvider } from './Focus';
import { NavigationProvider } from './Navigation';
import { SelectMultipleProvider } from './SelectMultiple';
import { SelectRangeProvider } from './SelectRange';
import { SelectSingleProvider } from './SelectSingle';
import { CalendarProvider } from './Calendar';

/** The props of {@link RootProvider}. */
export type RootContext = DayPickerBase & {
  children: React.ReactNode;
};

/** Provide the value for all the context providers. */
export function RootProvider(props: RootContext): JSX.Element {
  const { children, ...initialProps } = props;

  return (
    <CalendarProvider dayPickerProps={initialProps}>
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
    </CalendarProvider>
  );
}
