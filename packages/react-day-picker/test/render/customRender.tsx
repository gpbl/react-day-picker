import React from 'react';

import { RootProvider } from '@src/contexts';
import { DayPickerProps } from '@src/types';
import { render, RenderResult } from '@testing-library/react';

export const customRender = (
  element: React.ReactElement,
  contextValue: DayPickerProps = {}
): RenderResult => {
  return render(<RootProvider {...contextValue}>{element}</RootProvider>);
};
