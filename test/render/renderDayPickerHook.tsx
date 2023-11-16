import { render } from '@testing-library/react';
import { ContextProviders } from '../../src/contexts/ContextProviders';
import { type DayPickerProps } from '../../src';

/** Render a DayPicker hook inside the `RootProvider`. */
export type RenderHookResult<TResult> = {
  current: TResult;
};

export function renderDayPickerHook<TResult>(
  hook: () => TResult,
  dayPickerProps: DayPickerProps
): RenderHookResult<TResult> {
  const returnVal = { current: undefined as TResult };
  function Test() {
    const hookResult: TResult = hook();
    returnVal.current = hookResult;
    return null;
  }
  if (dayPickerProps === undefined) {
    render(<Test />);
  }
  render(
    <ContextProviders {...dayPickerProps}>
      <Test />
    </ContextProviders>
  );
  return returnVal;
}
