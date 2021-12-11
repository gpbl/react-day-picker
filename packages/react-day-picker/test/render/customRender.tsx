import React from 'react';

import { render } from '@testing-library/react';

import { RootProvider } from 'contexts/RootProvider';
import { DayPickerProps } from 'types/DayPicker';

/** Render an element and pass the initial DayPickerProps to initialize the DayPicker context. */
export function customRender(
  element: React.ReactElement,
  dayPickerProps: DayPickerProps = {}
) {
  return render(<RootProvider {...dayPickerProps}>{element}</RootProvider>);
}
