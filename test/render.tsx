import React, { ReactElement } from "react";

import { render as testingLibraryRender } from "@testing-library/react";

import { ContextProviders, type DayPickerProps, type Mode } from "../src";

/** Render a React Element wrapped with the Root Provider. */
export function render(
  /** The element to render. */
  element: ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  context?: DayPickerProps<Mode>,
  /** The options to pass to the testing library render function. */
  options?: Parameters<typeof testingLibraryRender>[1]
): ReturnType<typeof testingLibraryRender> {
  return testingLibraryRender(
    <ContextProviders {...context}>{element}</ContextProviders>,
    options
  );
}

export { screen, act } from "@testing-library/react";
