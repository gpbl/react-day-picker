import { render } from '@testing-library/react';
import { ContextProviders } from '../../src/contexts/ContextProviders';
import { DayPickerProps } from '../../src';

/** Render a React Element wrapped with the Root Provider. */
export function customRender(
  /** The element to render. */
  element: React.ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  dayPickerProps: DayPickerProps
) {
  return render(
    <ContextProviders dayPickerProps={dayPickerProps}>
      {element}
    </ContextProviders>
  );
}
