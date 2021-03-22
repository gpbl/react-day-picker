import { render, RenderResult } from '@testing-library/react';
import * as React from 'react';

import { ContextProvider } from 'contexts';
import { DayPickerProps } from 'types';

/** Render an element by wrapping it with the ContextProvider. */
export const customRender = (
  element: React.ReactElement,
  contextValue: DayPickerProps = {}
): RenderResult => {
  return render(<ContextProvider {...contextValue}>{element}</ContextProvider>);
};
