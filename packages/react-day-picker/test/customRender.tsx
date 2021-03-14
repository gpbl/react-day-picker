import { render, RenderResult } from '@testing-library/react';
import React from 'react';

import { DayPickerProvider, NavigationProvider } from 'contexts';
import { DayPickerProps } from 'types';

// import { Button } from './Button';
type CustomRenderOptions = {
  props?: DayPickerProps;
};

export const customRender = (
  element: React.ReactElement,
  renderOptions?: CustomRenderOptions
): RenderResult => {
  return render(
    <DayPickerProvider initialProps={renderOptions?.props}>
      <NavigationProvider>{element}</NavigationProvider>
    </DayPickerProvider>
  );
};
