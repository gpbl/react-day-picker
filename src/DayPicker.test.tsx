import { render, screen } from "@testing-library/react";
import { DayPicker } from "./DayPicker";

jest.useFakeTimers().setSystemTime(new Date("2023-12-10"));

test("should render a date picker component", () => {
  render(<DayPicker data-testid="test" />);
  expect(screen.getByTestId("test")).toBeInTheDocument();
});
