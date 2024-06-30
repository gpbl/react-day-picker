import React, { ReactElement } from "react";

import { render as testingLibraryRender } from "@testing-library/react";
import type { DayPickerProps } from "react-day-picker";

/** Render a React Element wrapped with the Root Provider. */
export function render(
  /** The element to render. */
  element: ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  context?: DayPickerProps,
  /** The options to pass to the testing library render function. */
  options?: Parameters<typeof testingLibraryRender>[1]
): ReturnType<typeof testingLibraryRender> {
  return testingLibraryRender(element, options);
}

export { screen, act, within } from "@testing-library/react";
