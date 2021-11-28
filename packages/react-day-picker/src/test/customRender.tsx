import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { RootProvider } from '../contexts/RootProvider';
import { DayPickerProps } from '../types';

export const customRender = (
  element: React.ReactElement,
  contextValue: DayPickerProps = {}
): RenderResult => {
  return render(<RootProvider {...contextValue}>{element}</RootProvider>);
};
