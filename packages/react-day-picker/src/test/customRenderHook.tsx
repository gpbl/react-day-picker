import * as React from 'react';
import {
  renderHook,
  Renderer,
  RenderHookResult
} from '@testing-library/react-hooks';
import { DayPickerProps } from '../types';
import { ContextProvider } from '../contexts/ContextProvider';

export function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  contextValue: DayPickerProps = {}
): RenderHookResult<TProps, TResult, Renderer<TProps>> {
  const wrapper = ({ children }: { children?: React.ReactNode }) => (
    <ContextProvider {...contextValue}>{children}</ContextProvider>
  );
  return renderHook<TProps, TResult>(callback, { wrapper });
}
