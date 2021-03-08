import React from 'react';

import { Root } from 'components';
import {
  DayPickerProvider,
  FocusProvider,
  NavigationProvider,
  SelectMultipleProvider,
  SelectRangeProvider,
  SelectSingleProvider
} from 'hooks';
import { DayPickerProps } from 'types';

/**
 * Render the date picker component.
 */
export function DayPicker(props: DayPickerProps): JSX.Element {
  return (
    <DayPickerProvider initialProps={props}>
      <NavigationProvider>
        <SelectRangeProvider initialProps={props}>
          <SelectMultipleProvider initialProps={props}>
            <SelectSingleProvider initialProps={props}>
              <FocusProvider>
                <Root />
              </FocusProvider>
            </SelectSingleProvider>
          </SelectMultipleProvider>
        </SelectRangeProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
