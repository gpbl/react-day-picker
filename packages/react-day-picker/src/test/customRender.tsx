import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { ContextProvider, ContextProviderProps } from 'contexts';

/** Render an element by wrapping it with the ContextProvider. */
export const customRender = (
  element: React.ReactElement,
  contextValue?: Partial<ContextProviderProps>
): RenderResult => {
  return render(<ContextProvider {...contextValue}>{element}</ContextProvider>);
};
