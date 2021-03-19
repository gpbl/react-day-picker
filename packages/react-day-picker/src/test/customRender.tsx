import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { DayPickerProvider, NavigationProvider } from 'contexts';
import { DayPickerProps } from 'types';

// import { Button } from './Button';
type CustomRenderOptions = {
  dayPickerProps?: DayPickerProps;
};

export const customRender = (
  element: React.ReactElement,
  renderOptions?: CustomRenderOptions
): RenderResult => {
  return render(
    <DayPickerProvider initialProps={renderOptions?.dayPickerProps}>
      <NavigationProvider>{element}</NavigationProvider>
    </DayPickerProvider>
  );
};
