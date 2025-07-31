import { type RenderResult, render, screen } from "@testing-library/react";
import React, { type ReactElement } from "react";

/**
 * Renders the examples into an application for easier testing.
 *
 * @deprecated This is ugly and should be removed.
 */
export function renderApp(example: ReactElement): {
  dayPicker: HTMLElement | ChildNode | null;
  renderResult: RenderResult;
} {
  const renderResult = render(<div role="application">{example}</div>);
  return {
    dayPicker: screen.getByRole("application").firstChild,
    renderResult,
  };
}
