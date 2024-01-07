import { render as testingLibraryRender } from '@testing-library/react';

import type { DayPickerProps, Mode } from '../src';
import { ContextProviders } from '../src/contexts/ContextProviders';

/** Render a React Element wrapped with the Root Provider. */
export function render(
  /** The element to render. */
  element: React.ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  context?: DayPickerProps<Mode>,
  /** The options to pass to the testing library render function. */
  options?: Parameters<typeof testingLibraryRender>[1]
) {
  return testingLibraryRender(
    <ContextProviders {...context}>{element}</ContextProviders>,
    options
  );
}
