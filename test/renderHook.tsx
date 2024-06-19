import React from "react";

import { renderHook as testingLibraryRenderHook } from "@testing-library/react";
import { DayPickerProps } from "react-day-picker";

import { ContextProviders } from "../src/contexts/providers";
import { Mode } from "../src/types/shared";

/** Render a hook wrapped with the {@link ContextProviders} Provider. */
export function renderHook<TResult>(
  /** The hook to render. */
  hook: () => TResult,
  /** The props to pass to the {@link ContextProviders}. */
  props?: DayPickerProps,
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
