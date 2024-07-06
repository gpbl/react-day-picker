import React from "react";

import { render, screen } from "@testing-library/react";
import { startOfMonth } from "date-fns";

import {
  activeElement,
  dateButton,
  grid,
  nav,
  previousButton
} from "@/test/elements";
import { user } from "@/test/user";

import { DayPicker } from "./DayPicker";
import { MonthProps } from "./components/Month";
import { MonthsProps } from "./components/Months";

const testId = "test";
const dayPicker = () => screen.getByTestId(testId);

test("should render a date picker component", () => {
  render(<DayPicker data-testid={testId} />);
  expect(dayPicker()).toBeInTheDocument();
});

it("should render the navigation and month grids", () => {
  render(<DayPicker data-testid={testId} />);

  expect(nav()).toBeInTheDocument();
  expect(grid()).toBeInTheDocument();
});

it("should apply classnames and style according to props", () => {
  render(
    <DayPicker
      data-testid={testId}
      className="custom-class"
      numberOfMonths={2}
      showWeekNumber
      style={{ color: "red" }}
    />
  );

  expect(dayPicker()).toHaveClass("rdp-root");
  expect(dayPicker()).toHaveClass("rdp-has_multiple_months");
  expect(dayPicker()).toHaveClass("rdp-has_week_numbers");
  expect(dayPicker()).toHaveClass("custom-class");
  expect(dayPicker()).toHaveStyle({ color: "red" });
});

it("should use custom components", () => {
  render(
    <DayPicker
      data-testid={testId}
      components={{
        Nav: () => <div>Custom Navigation</div>,
        Month: (props: MonthProps) => <div>Custom Month</div>,
        Months: (props: MonthsProps) => (
          <div {...props}>
            Custom Months<div>{props.children}</div>
          </div>
        ),
        Footer: () => <div>Custom Footer</div>
      }}
      footer="Footer"
    />
  );

  expect(dayPicker()).toHaveTextContent("Custom Navigation");
  expect(dayPicker()).toHaveTextContent("Custom Months");
  expect(dayPicker()).toHaveTextContent("Custom Month");
  expect(dayPicker()).toHaveTextContent("Custom Footer");
});

describe("when the date picker is focused", () => {
  test("focus the previous button", async () => {
    render(<DayPicker />);
    await user.tab();
    expect(activeElement()).toBe(previousButton());
  });

  test("on RTL, focus the previous button", async () => {
    render(<DayPicker dir="rtl" />);
    await user.tab();
    expect(activeElement()).toBe(previousButton());
  });
});

describe("when the grid is focused", () => {
  const today = new Date();

  beforeAll(() => jest.setSystemTime(today));
  afterAll(() => jest.useRealTimers());

  test("should focus the today's date", async () => {
    render(<DayPicker mode="single" today={today} />);
    await user.tab();
    await user.tab();
    await user.tab();
    expect(activeElement()).toBe(dateButton(today));
  });
  describe("when the today’s date is disabled", () => {
    test("should focus the first day of the month", async () => {
      render(<DayPicker mode="single" disabled={today} />);
      await user.tab();
      await user.tab();
      await user.tab();
      expect(activeElement()).toBe(dateButton(startOfMonth(today)));
    });
  });
});
