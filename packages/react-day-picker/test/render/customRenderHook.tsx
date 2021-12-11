import React from 'react';

import { renderHook } from '@testing-library/react-hooks';

import { RootProvider } from 'contexts/RootProvider';
import { DayPickerProps } from 'types/DayPicker';
import { DayPickerCustomProps } from 'types/DayPickerCustom';
import { DayPickerMultipleProps } from 'types/DayPickerMultiple';
import { DayPickerRangeProps } from 'types/DayPickerRange';
import { DayPickerSingleProps } from 'types/DayPickerSingle';

/** Render a hook wrapper by the RootProvider */
export function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  dayPickerProps:
    | DayPickerProps
    | DayPickerMultipleProps
    | DayPickerSingleProps
    | DayPickerCustomProps
    | DayPickerRangeProps
) {
  const wrapper = ({ children }: { children?: React.ReactNode }) => (
    <RootProvider {...dayPickerProps}>{children}</RootProvider>
  );
  return renderHook<TProps, TResult>(callback, { wrapper });
}
