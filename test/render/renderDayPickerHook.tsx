import { render } from "@testing-library/react";
import { DayPickerProps } from "../../src/DayPicker";

import { FocusContext, FocusContextValue } from "../../src/contexts/Focus";
import {
  SelectMultipleContext,
  SelectMultipleContextValue
} from "../../src/contexts/SelectMultiple";
import {
  SelectRangeContext,
  SelectRangeContextValue
} from "../../src/contexts/SelectRange";
import {
  SelectSingleContext,
  SelectSingleContextValue
} from "../../src/contexts/SelectSingle";
import { RootProvider } from "../../src/contexts/RootProvider";

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
  function Test(): JSX.Element {
    const hookResult: TResult = hook();
    returnVal.current = hookResult;
    return <></>;
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
