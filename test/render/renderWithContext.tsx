import { render } from '@testing-library/react';
import { ContextProviders } from '../../src/contexts/ContextProviders';
import { DayPickerProps, Mode } from '../../src';

/** Render a React Element wrapped with the Root Provider. */
export function renderWithContext(
  /** The element to render. */
  element: React.ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  context?: DayPickerProps<Mode>
) {
  return render(<ContextProviders {...context}>{element}</ContextProviders>);
}
