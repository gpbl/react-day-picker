import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { ContextProvider } from '../contexts/ContextProvider';
import { DayPickerProps } from '../types';

export const customRender = (
  element: React.ReactElement,
  contextValue: DayPickerProps = {}
): RenderResult => {
  return render(<ContextProvider {...contextValue}>{element}</ContextProvider>);
};
