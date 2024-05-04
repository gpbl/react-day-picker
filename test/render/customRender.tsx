import { ReactElement } from 'react';

import { RenderResult, render } from '@testing-library/react';

import { DayPickerProps } from '../../src/DayPicker';
import { DayPickerProvider } from '../../src/contexts/DayPicker';

/** Render a React Element wrapped with the DayPicker Provider. */
export function customRender(
  /** The element to render. */
  element: ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  dayPickerProps: DayPickerProps = {}
): RenderResult {
  return render(
    <DayPickerProvider initialProps={dayPickerProps}>
      {element}
    </DayPickerProvider>
  );
}
