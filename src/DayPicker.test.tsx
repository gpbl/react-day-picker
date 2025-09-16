import { startOfDay, startOfMonth } from "date-fns";
import React from "react";

import {
  activeElement,
  dateButton,
  grid,
  nav,
  nextButton,
  previousButton,
} from "@/test/elements";
import { fireEvent, render, screen } from "@/test/render";
import { user } from "@/test/user";
import { defaultLocale } from "./classes/DateLib";
import type { MonthProps } from "./components/Month";
import type { MonthsProps } from "./components/Months";
import { DayPicker } from "./DayPicker";

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
    />,
  );

  expect(dayPicker()).toHaveClass("rdp-root");
  expect(dayPicker()).toHaveClass("custom-class");
  expect(dayPicker()).toHaveStyle({ color: "rgb(255, 0, 0)" });
});

test("forward aria attributes to the root element", () => {
  render(
    <DayPicker
      data-testid={testId}
      aria-label="Calendar"
      aria-labelledby="calendar-heading"
    />,
  );

  expect(dayPicker()).toHaveAttribute("aria-label", "Calendar");
  expect(dayPicker()).toHaveAttribute("aria-labelledby", "calendar-heading");
});

test("use custom components", () => {
  render(
    <DayPicker
      data-testid={testId}
      components={{
        Nav: () => <div>Custom Navigation</div>,
        Month: (_props: MonthProps) => <div>Custom Month</div>,
        Months: (props: MonthsProps) => (
          <div {...props}>
            Custom Months<div>{props.children}</div>
          </div>
        ),
        Footer: () => <div>Custom Footer</div>,
      }}
      footer="Footer"
    />,
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
  const today = new Date(2024, 1, 4);

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
      />,
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
      <DayPicker month={initialMonth} mode="single" />,
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
          month: () => "bar",
        },
      }}
    />,
  );
  // Check if the custom month name is rendered
  expect(grid("bar 2024")).toBeInTheDocument();
});

test("should render the custom components", () => {
  render(
    <DayPicker
      footer="test"
      captionLayout="dropdown"
      components={{
        Nav: () => <div>Custom Nav</div>,
        YearsDropdown: () => <div>Custom YearsDropdown</div>,
        MonthsDropdown: () => <div>Custom MonthsDropdown</div>,
        Footer: () => <div>Custom Footer</div>,
      }}
    />,
  );
  expect(screen.getByText("Custom Nav")).toBeInTheDocument();
  expect(screen.getByText("Custom Footer")).toBeInTheDocument();
  expect(screen.getByText("Custom YearsDropdown")).toBeInTheDocument();
  expect(screen.getByText("Custom MonthsDropdown")).toBeInTheDocument();
});

describe("when navLayout is set", () => {
  const today = new Date(2024, 1, 4);
  describe("when navLayout is set to 'around'", () => {
    beforeEach(() => {
      render(
        <DayPicker today={today} navLayout="around" data-testid={testId} />,
      );
    });
    test("renders navigation layout as 'around'", () => {
      expect(dayPicker()).toHaveAttribute("data-nav-layout", "around");
    });
    test('render the "previous" button before the month caption', () => {
      expect(previousButton().nextSibling).toHaveTextContent("February 2024");
    });
    test('render the "next" button before the month caption', () => {
      expect(nextButton().previousSibling).toHaveTextContent("February 2024");
    });
  });
  describe("when navLayout is set to 'aft er'", () => {
    beforeEach(() => {
      render(
        <DayPicker today={today} navLayout="after" data-testid={testId} />,
      );
    });
    test("renders navigation layout as 'after'", () => {
      expect(dayPicker()).toHaveAttribute("data-nav-layout", "after");
    });
    test("render the navigation after the month caption", () => {
      expect(nav().previousSibling).toHaveTextContent("February 2024");
    });
  });
});
