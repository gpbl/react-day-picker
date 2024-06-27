import React from "react";

import { render, screen } from "@testing-library/react";

import { DayPicker } from "./DayPicker.js";

test("should render a date picker component", () => {
  render(<DayPicker data-testid="test" />);
  expect(screen.getByTestId("test")).toBeInTheDocument();
});
