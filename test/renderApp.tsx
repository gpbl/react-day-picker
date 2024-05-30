import { type ReactElement } from "react";
import React from "react";

import { type RenderResult, render, screen } from "@testing-library/react";

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
    renderResult
  };
}
