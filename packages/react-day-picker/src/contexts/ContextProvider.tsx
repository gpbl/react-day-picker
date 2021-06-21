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

const SelectUncontrolledProvider = ({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}) => <>{children}</>;

/** Provide the value for all the context providers. */
export function ContextProvider(props: ContextProviderProps): JSX.Element {
  const { children, ...initialProps } = props;

  let SelectProvider;

  switch (props.mode) {
    case 'single': {
      SelectProvider = SelectSingleProvider;
      break;
    }
    case 'multiple':
      SelectProvider = SelectMultipleProvider;
      break;
    case 'range':
      SelectProvider = SelectRangeProvider;
      break;
    default:
      SelectProvider = SelectUncontrolledProvider;
  }

  return (
    <DayPickerProvider initialProps={initialProps}>
      <NavigationProvider>
        <SelectProvider initialProps={initialProps}>
          <FocusProvider>{children}</FocusProvider>
        </SelectProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
