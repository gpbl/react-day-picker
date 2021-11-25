import * as React from 'react';

import {
  Renderer,
  renderHook,
  RenderHookResult
} from '@testing-library/react-hooks';

import { ContextProvider } from '../contexts/ContextProvider';
import {
  DayPickerCustomProps,
  DayPickerMultipleProps,
  DayPickerProps,
  DayPickerRangeProps,
  DayPickerSingleProps
} from '../types';

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
    <ContextProvider {...contextValue}>{children}</ContextProvider>
  );
  return renderHook<TProps, TResult>(callback, { wrapper });
}
