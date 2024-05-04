import { render } from '@testing-library/react';
import {
  type DayPickerProps,
  FocusContext,
  type FocusContextValue,
  SelectMultipleContext,
  type SelectMultipleContextValue,
  SelectRangeContext,
  type SelectRangeContextValue,
  SelectSingleContext,
  type SelectSingleContextValue,
} from 'react-day-picker';

import { RootProvider } from 'react-day-picker';

/** Render a DayPicker hook inside the {@link RootProvider}. */
export type RenderHookResult<TResult> = {
  current: TResult;
};
export function renderDayPickerHook<TResult>(
  hook: () => TResult,
  dayPickerProps?: DayPickerProps,
  /** Pass the mocked contexts. */
  contexts?: {
    single: SelectSingleContextValue;
    multiple: SelectMultipleContextValue;
    range: SelectRangeContextValue;
    focus: FocusContextValue;
  }
): RenderHookResult<TResult> {
  const returnVal = { current: undefined as TResult };
  function Test() {
    const hookResult: TResult = hook();
    returnVal.current = hookResult;
    return null;
  }
  render(
    <RootProvider {...dayPickerProps}>
      {contexts ? (
        <SelectSingleContext.Provider value={contexts.single}>
          <SelectMultipleContext.Provider value={contexts.multiple}>
            <SelectRangeContext.Provider value={contexts.range}>
              <FocusContext.Provider value={contexts.focus}>
                <Test />
              </FocusContext.Provider>
            </SelectRangeContext.Provider>
          </SelectMultipleContext.Provider>
        </SelectSingleContext.Provider>
      ) : (
        <Test />
      )}
    </RootProvider>
  );
  return returnVal;
}
