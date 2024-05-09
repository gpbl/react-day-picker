import { ReactElement } from "react";

import { RenderResult, render } from "@testing-library/react";

import { DayPickerProps } from "../../src/DayPicker";
import { ContextProviders } from "../../src/contexts/ContextProviders";

/** Render a React Element wrapped with the context providers. */
export function customRender(
  /** The element to render. */
  element: ReactElement,
  /** The initial DayPicker props to pass to the context providers. */
  dayPickerProps: DayPickerProps = {}
): RenderResult {
  return render(
    <ContextProviders {...dayPickerProps}>{element}</ContextProviders>
  );
}
