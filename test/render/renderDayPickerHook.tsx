import { render } from '@testing-library/react';
import { ContextProviders } from '../../src/contexts/ContextProviders';
import { DayPickerProps } from '../../src';

/** Render a DayPicker hook inside the {@link RootProvider}. */
export type RenderHookResult<TResult> = {
  current: TResult;
};

export function renderDayPickerHook<TResult>(
  hook: () => TResult,
  dayPickerProps: DayPickerProps
): RenderHookResult<TResult> {
  const returnVal = { current: undefined as TResult };
  function Test(): JSX.Element {
    const hookResult: TResult = hook();
    returnVal.current = hookResult;
    return <></>;
  }
  if (dayPickerProps === undefined) {
    render(<Test />);
  }
  render(
    <ContextProviders dayPickerProps={dayPickerProps}>
      <Test />
    </ContextProviders>
  );
  return returnVal;
}
