import React from 'react';

import { Root } from 'components';
import {
  DayPickerProvider,
  FocusProvider,
  NavigationProvider,
  SelectionProvider
} from 'hooks';
import { DayPickerProps } from 'types';

/**
 * Render the date picker component.
 */
export function DayPicker(props: DayPickerProps): JSX.Element {
  return (
    <DayPickerProvider initialProps={props}>
      <NavigationProvider>
        <SelectionProvider>
          <FocusProvider>
            <Root />
          </FocusProvider>
        </SelectionProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
