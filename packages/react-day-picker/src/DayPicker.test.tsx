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
import { act, fireEvent, render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { DateLib, defaultLocale } from "./classes/DateLib";
import type { MonthProps } from "./components/Month";
import type { MonthsProps } from "./components/Months";
import { DayPicker } from "./DayPicker";
import { labelMonthDropdown, labelYearDropdown } from "./labels/index.js";
import { ja } from "./locale/ja.js";
import { UI } from "./UI";

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

describe("when rendering custom inline styles for component slots", () => {
  beforeEach(() => {
    render(
      <DayPicker
        data-testid={testId}
        styles={{
          [UI.CaptionLabel]: { color: "purple" },
          [UI.Chevron]: { fill: "red" },
          [UI.NextMonthButton]: { backgroundColor: "green" },
          [UI.PreviousMonthButton]: { backgroundColor: "blue" },
        }}
      />,
    );
  });

  test("applies the previous button style", () => {
    expect(previousButton()).toHaveAttribute(
      "style",
      "background-color: blue;",
    );
  });

  test("applies the next button style", () => {
    expect(nextButton()).toHaveAttribute("style", "background-color: green;");
  });

  test("applies the chevron style", () => {
    expect(document.querySelector(".rdp-chevron")).toHaveAttribute(
      "style",
      "fill: red;",
    );
  });

  test("applies the caption label style", () => {
    expect(document.querySelector(".rdp-caption_label")).toHaveAttribute(
      "style",
      "color: purple;",
    );
  });
});

describe("when rendering custom inline styles for dropdown slots", () => {
  beforeEach(() => {
    render(
      <DayPicker
        captionLayout="dropdown"
        endMonth={new Date(2025, 11)}
        month={new Date(2024, 0)}
        startMonth={new Date(2024, 0)}
        styles={{
          [UI.CaptionLabel]: { color: "purple" },
          [UI.Chevron]: { fill: "red" },
          [UI.Dropdown]: { backgroundColor: "yellow" },
          [UI.DropdownRoot]: { borderColor: "blue" },
          [UI.MonthsDropdown]: { color: "green" },
          [UI.YearsDropdown]: { fontWeight: 700 },
        }}
      />,
    );
  });

  test("applies the dropdown root style", () => {
    expect(
      screen.getByRole("combobox", { name: labelMonthDropdown() })
        .parentElement,
    ).toHaveAttribute("style", "border-color: blue;");
  });

  test("applies the month dropdown style with the base dropdown style", () => {
    expect(
      screen.getByRole("combobox", { name: labelMonthDropdown() }),
    ).toHaveAttribute("style", "background-color: yellow; color: green;");
  });

  test("applies the year dropdown style with the base dropdown style", () => {
    expect(
      screen.getByRole("combobox", { name: labelYearDropdown() }),
    ).toHaveAttribute("style", "background-color: yellow; font-weight: 700;");
  });

  test("applies the dropdown caption label style", () => {
    expect(
      document.querySelector(".rdp-dropdown_root .rdp-caption_label"),
    ).toHaveAttribute("style", "color: purple;");
  });

  test("applies the dropdown chevron style", () => {
    expect(
      document.querySelector(".rdp-dropdown_root .rdp-chevron"),
    ).toHaveAttribute("style", "fill: red;");
  });
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

describe("when rendering the root language tag", () => {
  test("sets the default locale code when lang is not provided", () => {
    render(<DayPicker data-testid={testId} />);
    expect(dayPicker()).toHaveAttribute("lang", defaultLocale.code);
  });

  test("uses the locale code when locale is provided", () => {
    render(<DayPicker data-testid={testId} locale={ja} />);
    expect(dayPicker()).toHaveAttribute("lang", ja.code);
  });

  test("prefers lang over locale code when both are provided", () => {
    render(<DayPicker data-testid={testId} locale={ja} lang="ar" />);
    expect(dayPicker()).toHaveAttribute("lang", "ar");
  });
});

test("use custom components", () => {
  render(
    <DayPicker
      data-testid={testId}
      components={{
        Nav: () => <div>Custom Navigation</div>,
        Month: ({ children }: MonthProps) => (
          <div>
            Custom Month
            {children}
          </div>
        ),
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

test("passes Date-backed calendar data to custom components", () => {
  const monthDates: unknown[] = [];
  const dayDates: unknown[] = [];

  render(
    <DayPicker
      month={new Date(2024, 0, 1)}
      components={{
        Month: ({ calendarMonth, displayIndex, ...divProps }) => {
          monthDates.push(calendarMonth.date);
          return <div {...divProps} data-display-index={displayIndex} />;
        },
        DayButton: ({ day, modifiers, ...buttonProps }) => {
          dayDates.push(day.date);
          return (
            <button
              {...buttonProps}
              data-has-modifiers={Object.keys(modifiers).length > 0}
            />
          );
        },
      }}
      mode="single"
    />,
  );

  expect(monthDates.length).toBeGreaterThan(0);
  expect(monthDates.every((monthDate) => monthDate instanceof Date)).toBe(true);
  expect(dayDates.length).toBeGreaterThan(0);
  expect(dayDates.every((dayDate) => dayDate instanceof Date)).toBe(true);
});

test("calls selection and day event callbacks with Date instances", async () => {
  const selectedDate = new Date(2024, 0, 15);
  const handleSelect = jest.fn();
  const handleDayClick = jest.fn();

  render(
    <DayPicker
      defaultMonth={selectedDate}
      mode="single"
      onDayClick={handleDayClick}
      onSelect={handleSelect}
    />,
  );

  await user.click(dateButton(selectedDate));

  expect(handleSelect).toHaveBeenCalled();
  expect(handleSelect.mock.calls[0][0]).toBeInstanceOf(Date);
  expect(handleSelect.mock.calls[0][1]).toBeInstanceOf(Date);
  expect(handleDayClick).toHaveBeenCalled();
  expect(handleDayClick.mock.calls[0][0]).toBeInstanceOf(Date);
});

describe("when navigating with month callbacks", () => {
  const handleMonthChange = jest.fn();
  const handleNextClick = jest.fn();
  const handlePrevClick = jest.fn();

  beforeEach(async () => {
    render(
      <DayPicker
        defaultMonth={new Date(2024, 0, 15)}
        onMonthChange={handleMonthChange}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      />,
    );

    await user.click(nextButton());
  });

  test("calls onNextClick with the first day of the next month", () => {
    expect(handleNextClick.mock.calls[0][0]).toEqual(new Date(2024, 1, 1));
  });

  test("calls onMonthChange with the first day of the next month", () => {
    expect(handleMonthChange.mock.calls[0][0]).toEqual(new Date(2024, 1, 1));
  });

  describe("when navigating back", () => {
    beforeEach(async () => {
      await user.click(previousButton());
    });

    test("calls onPrevClick with the first day of the previous month", () => {
      expect(handlePrevClick.mock.calls[0][0]).toEqual(new Date(2024, 0, 1));
    });

    test("calls onMonthChange with the first day of the previous month", () => {
      expect(handleMonthChange.mock.calls[1][0]).toEqual(new Date(2024, 0, 1));
    });
  });
});

test("passes Date values and DateLib options to custom formatters and labels", () => {
  const formatterDates: unknown[] = [];
  const formatterOptions: unknown[] = [];
  const formatterDateLibs: unknown[] = [];
  const labelDates: unknown[] = [];
  const labelOptions: unknown[] = [];
  const labelDateLibs: unknown[] = [];

  render(
    <DayPicker
      month={new Date(2024, 0, 1)}
      mode="single"
      formatters={{
        formatCaption: (date, options, dateLib) => {
          formatterDates.push(date);
          formatterOptions.push(options);
          formatterDateLibs.push(dateLib);
          return dateLib?.format(date, "LLLL y") ?? "";
        },
        formatDay: (date, options, dateLib) => {
          formatterDates.push(date);
          formatterOptions.push(options);
          formatterDateLibs.push(dateLib);
          return dateLib?.format(date, "d") ?? "";
        },
      }}
      labels={{
        labelGrid: (date, options, dateLib) => {
          labelDates.push(date);
          labelOptions.push(options);
          labelDateLibs.push(dateLib);
          return dateLib?.format(date, "LLLL y") ?? "";
        },
        labelDayButton: (date, _modifiers, options, dateLib) => {
          labelDates.push(date);
          labelOptions.push(options);
          labelDateLibs.push(dateLib);
          return dateLib?.format(date, "PPPP") ?? "";
        },
      }}
    />,
  );

  expect(formatterDates.length).toBeGreaterThan(0);
  expect(formatterDates.every((date) => date instanceof Date)).toBe(true);
  expect(
    formatterOptions.every(
      (options) =>
        typeof options === "object" && options !== null && "locale" in options,
    ),
  ).toBe(true);
  expect(formatterDateLibs.every((dateLib) => dateLib instanceof DateLib)).toBe(
    true,
  );
  expect(labelDates.length).toBeGreaterThan(0);
  expect(labelDates.every((date) => date instanceof Date)).toBe(true);
  expect(
    labelOptions.every(
      (options) =>
        typeof options === "object" && options !== null && "locale" in options,
    ),
  ).toBe(true);
  expect(labelDateLibs.every((dateLib) => dateLib instanceof DateLib)).toBe(
    true,
  );
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

  setTestTime(today);

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

describe("when a disabled day is focused", () => {
  test("keyboard and mouse interactions do not select it", async () => {
    const disabledDay = new Date(2024, 8, 5);
    const handleSelect = jest.fn();

    render(
      <DayPicker
        defaultMonth={disabledDay}
        disabled={[disabledDay]}
        mode="single"
        onSelect={handleSelect}
      />,
    );

    const disabledElement = dateButton(disabledDay);
    act(() => disabledElement.focus());

    await user.keyboard("{Enter}");
    await user.click(disabledElement);

    expect(handleSelect).not.toHaveBeenCalled();
    expect(disabledElement).toHaveAttribute("aria-disabled", "true");
  });
});

describe("when navigation is disabled", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("keyboard navigation stays within the visible month", async () => {
    const defaultMonth = new Date(2025, 6, 1);
    const lastDay = new Date(2025, 6, 31);
    const previousDay = new Date(2025, 6, 30);

    render(
      <DayPicker
        disableNavigation
        defaultMonth={defaultMonth}
        selected={lastDay}
        mode="single"
      />,
    );

    await user.tab();
    await user.tab();
    await user.tab();

    const lastDayButton = dateButton(lastDay);
    const previousDayButton = dateButton(previousDay);

    expect(activeElement()).toBe(lastDayButton);

    await user.keyboard("{ArrowRight}");
    expect(activeElement()).toBe(lastDayButton);

    await user.keyboard("{ArrowLeft}");
    expect(activeElement()).toBe(previousDayButton);
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

  describe("when the month prop is rerendered with non-first-of-month dates", () => {
    const monthDates: unknown[] = [];
    const components = {
      Month: ({ calendarMonth, displayIndex, ...divProps }: MonthProps) => {
        monthDates.push(calendarMonth.date);
        return <div {...divProps} data-display-index={displayIndex} />;
      },
    };

    beforeEach(() => {
      monthDates.length = 0;

      const { rerender } = render(
        <DayPicker month={new Date(2023, 0, 15)} components={components} />,
      );

      rerender(
        <DayPicker month={new Date(2023, 1, 20)} components={components} />,
      );
    });

    test("normalizes the initial month to the first day", () => {
      expect(monthDates[0]).toEqual(new Date(2023, 0, 1));
    });

    test("normalizes the rerendered month to the first day", () => {
      expect(monthDates[monthDates.length - 1]).toEqual(new Date(2023, 1, 1));
    });
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

test("places the month dropdown before the year dropdown by default", () => {
  render(<DayPicker captionLayout="dropdown" />);
  const combos = screen.getAllByRole("combobox");
  expect(combos[0]).toHaveAttribute("aria-label", "Choose the Month");
  expect(combos[1]).toHaveAttribute("aria-label", "Choose the Year");
});

test("places the year dropdown before the month dropdown for year-first locales", () => {
  render(<DayPicker captionLayout="dropdown" locale={ja} />);
  const combos = screen.getAllByRole("combobox");
  expect(combos[0]).toHaveAccessibleName(
    ja.labels?.labelYearDropdown as string,
  );
  expect(combos[1]).toHaveAccessibleName(
    ja.labels?.labelMonthDropdown as string,
  );
});

describe("when using dropdowns with numberOfMonths > 1 (issue #2741)", () => {
  beforeEach(() => {
    render(
      <DayPicker
        captionLayout="dropdown"
        numberOfMonths={2}
        defaultMonth={new Date(2024, 0, 1)}
      />,
    );
  });

  describe("when choosing June from the second month dropdown", () => {
    let grids: HTMLElement[];

    beforeEach(async () => {
      const secondMonthDropdown = screen.getAllByRole("combobox", {
        name: labelMonthDropdown(),
      })[1];

      await user.selectOptions(secondMonthDropdown, "5");

      grids = screen.getAllByRole("grid");
    });

    test("updates the first calendar to May 2024", () => {
      expect(grids[0]).toHaveAccessibleName("May 2024");
    });

    test("updates the second calendar to June 2024", () => {
      expect(grids[1]).toHaveAccessibleName("June 2024");
    });
  });

  describe("when choosing 2025 from the second year dropdown", () => {
    let grids: HTMLElement[];

    beforeEach(async () => {
      const secondYearDropdown = screen.getAllByRole("combobox", {
        name: labelYearDropdown(),
      })[1];

      await user.selectOptions(secondYearDropdown, "2025");

      grids = screen.getAllByRole("grid");
    });

    test("updates the first calendar to January 2025", () => {
      expect(grids[0]).toHaveAccessibleName("January 2025");
    });

    test("updates the second calendar to February 2025", () => {
      expect(grids[1]).toHaveAccessibleName("February 2025");
    });
  });
});

describe("when using reversed dropdowns with numberOfMonths > 1 (issue #2741)", () => {
  beforeEach(() => {
    render(
      <DayPicker
        captionLayout="dropdown"
        numberOfMonths={2}
        defaultMonth={new Date(2024, 0, 1)}
        reverseMonths
      />,
    );
  });

  describe("when choosing June from the second month dropdown", () => {
    let grids: HTMLElement[];

    beforeEach(async () => {
      const secondMonthDropdown = screen.getAllByRole("combobox", {
        name: labelMonthDropdown(),
      })[1];

      await user.selectOptions(secondMonthDropdown, "5");

      grids = screen.getAllByRole("grid");
    });

    test("updates the first calendar to July 2024", () => {
      expect(grids[0]).toHaveAccessibleName("July 2024");
    });

    test("updates the second calendar to June 2024", () => {
      expect(grids[1]).toHaveAccessibleName("June 2024");
    });
  });
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

test("should render custom previous and next month buttons", () => {
  render(
    <DayPicker
      components={{
        PreviousMonthButton: () => <button type="button">Go Back</button>,
        NextMonthButton: () => <button type="button">Go Forward</button>,
      }}
    />,
  );
  expect(screen.getByRole("button", { name: "Go Back" })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Go Forward" }),
  ).toBeInTheDocument();
});

describe("when navLayout is set", () => {
  const today = new Date(2024, 1, 4);
  describe("when navLayout is not set", () => {
    beforeEach(() => {
      render(<DayPicker today={today} data-testid={testId} />);
    });
    test("does not render a navigation layout data attribute", () => {
      expect(dayPicker()).not.toHaveAttribute("data-nav-layout");
    });
    test("renders navigation before the month", () => {
      expect(nav().nextSibling).toHaveTextContent("February 2024");
    });
  });
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
  describe("when navLayout is set to 'after'", () => {
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
