import { ReactElement } from "react";

import { RenderResult, render } from "@testing-library/react";

import { DayPickerProps } from "../../src/DayPicker";
import { ContextProviders } from "../../src/contexts/ContextProviders";

/** Render a React Element wrapped with the Root Provider. */
export function customRender(
  /** The element to render. */
  element: ReactElement,
  /** The initial DayPicker props to pass to the Root Provider. */
  dayPickerProps: DayPickerProps = {}
): RenderResult {
  return render(<ContextProviders {...dayPickerProps}>{element}</ContextProviders>);
}
