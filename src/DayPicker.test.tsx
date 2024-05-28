import { render, screen } from "@testing-library/react";

import { DayPicker } from "./DayPicker";

test("should render a date picker component", () => {
  render(<DayPicker data-testid="test" />);
  expect(screen.getByTestId("test")).toBeInTheDocument();
});
