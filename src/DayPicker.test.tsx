import React from "react";

import { startOfDay, startOfMonth } from "date-fns";
import { defaultLocale } from "react-day-picker";

import {
  activeElement,
  dateButton,
  grid,
  nav,
  previousButton
} from "@/test/elements";
import { fireEvent, render, screen } from "@/test/render";
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

test("render the navigation and month grids", () => {
  render(<DayPicker data-testid={testId} />);

  expect(nav()).toBeInTheDocument();
  expect(grid()).toBeInTheDocument();
});

test("apply classnames and style according to props", () => {
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
  expect(dayPicker()).toHaveClass("custom-class");
  expect(dayPicker()).toHaveStyle({ color: "red" });
});

test("use custom components", () => {
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

describe("when a day is mouse entered", () => {
  const handleDayMouseEnter = jest.fn();
  const handleDayMouseLeave = jest.fn();
  const today = startOfDay(new Date());
  beforeEach(async () => {
    render(
      <DayPicker
        today={today}
        defaultMonth={today}
        mode="single"
        onDayMouseEnter={handleDayMouseEnter}
        onDayMouseLeave={handleDayMouseLeave}
      />
    );
    fireEvent.mouseEnter(dateButton(today));
    fireEvent.mouseLeave(dateButton(today));
  });
  test("should call the event handler", async () => {
    expect(handleDayMouseEnter).toHaveBeenCalled();
    expect(handleDayMouseLeave).toHaveBeenCalled();
  });
});

describe("when the `month` is changed programmatically", () => {
  test("should update the calendar to reflect the new month", async () => {
    const initialMonth = new Date(2023, 0, 1); // January 2023
    const newMonth = new Date(2023, 1, 1); // February 2023
    const { rerender } = render(
      <DayPicker month={initialMonth} mode="single" />
    );
    expect(grid("January 2023")).toBeInTheDocument();
    rerender(<DayPicker month={newMonth} mode="single" />);
    expect(grid("February 2023")).toBeInTheDocument();
  });
});

test("extends the default locale", () => {
  render(
    <DayPicker
      month={new Date(2024, 0)}
      locale={{
        localize: {
          ...defaultLocale.localize,
          month: () => "bar"
        }
      }}
    />
  );
  // Check if the custom month name is rendered
  expect(grid("bar 2024")).toBeInTheDocument();
});
