import { render, RenderResult } from '@testing-library/react';
import * as React from 'react';

import { DayPickerProps } from 'types';

import { ContextProvider } from '../contexts/ContextProvider';

export const customRender = (
  element: React.ReactElement,
  contextValue: DayPickerProps = {}
): RenderResult => {
  return render(<ContextProvider {...contextValue}>{element}</ContextProvider>);
};
