import { ReactElement } from 'react';

import { RenderResult, render } from '@testing-library/react';
import { DayPickerProps, DayPickerProvider } from 'react-day-picker';

/** Render a React Element wrapped with the DayPicker Provider. */
export function renderApp(
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
