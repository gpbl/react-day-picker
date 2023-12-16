import { render } from '@testing-library/react';
import { ContextProviders } from '../../src/contexts/ContextProviders';
import { Mode, type DayPickerProps } from '../../src';

/** Render a hook inside the {@link ContextProviders}}. */
export type RenderHookResult<TResult> = {
  current: TResult;
};

export function renderDayPickerHook<TResult>(
  hook: () => TResult,
  props: DayPickerProps<Mode>
): RenderHookResult<TResult> {
  const returnVal = { current: undefined as TResult };
  function Test() {
    const hookResult: TResult = hook();
    returnVal.current = hookResult;
    return null;
  }
  if (props === undefined) {
    render(<Test />);
  }
  render(
    <ContextProviders {...props}>
      <Test />
    </ContextProviders>
  );
  return returnVal;
}
