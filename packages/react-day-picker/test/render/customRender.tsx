import React from 'react';

import { render } from '@testing-library/react';
import { RootProvider } from 'contexts/RootProvider';
import { DayPickerProps } from 'types/DayPicker';

/** Render a React Element wrapped with the Root Provider. */
export function customRender(
  /** The element to render. */
  element: React.ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  dayPickerProps: DayPickerProps = {}
) {
  return render(<RootProvider {...dayPickerProps}>{element}</RootProvider>);
}
