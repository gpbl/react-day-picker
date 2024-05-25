import { renderHook as testingLibraryRenderHook } from "@testing-library/react";

import { ContextProviders } from "../src/contexts";
import { DayPickerProps, Mode } from "../src/types";

/** Render a hook wrapped with the {@link ContextProviders} Provider. */
export function renderHook<TResult>(
  /** The hook to render. */
  hook: () => TResult,
  /** The props to pass to the {@link ContextProviders}. */
  props?: DayPickerProps<Mode>,
  /** The options to pass to the testing library render function. */
  options?: Omit<Parameters<typeof testingLibraryRenderHook>[1], "wrapper">
) {
  return testingLibraryRenderHook(hook, {
    wrapper: ({ children }) => {
      if (!props) {
        return children;
      }
      return <ContextProviders {...props}>{children}</ContextProviders>;
    },
    ...options
  });
}
