import React from 'react';

import {
  Renderer,
  renderHook,
  RenderHookResult
} from '@testing-library/react-hooks';

import { RootProvider } from 'contexts/RootProvider';
import { DayPickerProps } from 'types/DayPicker';
import { DayPickerCustomProps } from 'types/DayPickerCustom';
import { DayPickerMultipleProps } from 'types/DayPickerMultiple';
import { DayPickerRangeProps } from 'types/DayPickerRange';
import { DayPickerSingleProps } from 'types/DayPickerSingle';

export function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  contextValue:
    | DayPickerProps
    | DayPickerMultipleProps
    | DayPickerSingleProps
    | DayPickerCustomProps
    | DayPickerRangeProps
): RenderHookResult<TProps, TResult, Renderer<TProps>> {
  const wrapper = ({ children }: { children?: React.ReactNode }) => (
    <RootProvider {...contextValue}>{children}</RootProvider>
  );
  return renderHook<TProps, TResult>(callback, { wrapper });
}
