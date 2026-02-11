import userEvent from "@testing-library/user-event";
import React from "react";
import { DayPicker } from "react-day-picker";
import { dateButton, grid } from "@/test/elements";
import { render, screen, within } from "@/test/render";
import { TimeZoneNoonSafe } from "./TimeZoneNoonSafe";

test("the first row should display 7 days", () => {
  render(<TimeZoneNoonSafe />);
  const grid = screen.getByRole("grid");
  const rows = within(grid).getAllByRole("row");
  const firstDayRow = rows.find((row) =>
    row.querySelector("[role='gridcell']"),
  );
  expect(firstDayRow?.querySelectorAll("[role='gridcell']")).toHaveLength(7);
});

test("week numbers remain valid when using noonSafe", () => {
  render(<TimeZoneNoonSafe showWeekNumber />);
  const weekNumbers = screen
    .getAllByRole("rowheader")
    .map((cell) => Number(cell.textContent))
    .filter((value) => Number.isFinite(value));

  expect(weekNumbers.length).toBeGreaterThan(0);
  weekNumbers.forEach((value) => {
    expect(value).toBeGreaterThan(0);
    expect(value).toBeLessThan(60);
  });
});

test("the last row should display 7 days", () => {
  render(<TimeZoneNoonSafe />);
  const grid = screen.getByRole("grid");
  const rows = within(grid).getAllByRole("row");
  const lastDayRow = [...rows]
    .reverse()
    .find((row) => row.querySelector("[role='gridcell']"));
  expect(lastDayRow?.querySelectorAll("[role='gridcell']")).toHaveLength(7);
});

describe("TimeZoneNoonSafe navigation", () => {
  test("previous and next month buttons render full weeks", async () => {
    render(<TimeZoneNoonSafe />);
    const user = userEvent.setup();

    const assertFirstAndLastRowHave7Cells = () => {
      const [grid] = screen.getAllByRole("grid");
      const rows = within(grid).getAllByRole("row");
      const dayRows = rows.filter(
        (row) => within(row).queryAllByRole("gridcell").length > 0,
      );
      const firstCells = within(dayRows[0]).getAllByRole("gridcell");
      const lastCells = within(dayRows[dayRows.length - 1]).getAllByRole(
        "gridcell",
      );
      expect(firstCells.length).toBe(7);
      expect(lastCells.length).toBe(7);
    };

    // Current month
    assertFirstAndLastRowHave7Cells();

    // Move to previous month
    await user.click(screen.getByRole("button", { name: /previous month/i }));
    assertFirstAndLastRowHave7Cells();

    // Move to next month twice (back to original and forward one)
    await user.click(screen.getByRole("button", { name: /next month/i }));
    await user.click(screen.getByRole("button", { name: /next month/i }));
    assertFirstAndLastRowHave7Cells();
  });
});

test("year dropdown starts at the startMonth year", () => {
  const timeZone = "Asia/Dubai";
  const startMonth = new Date(1880, 0, 1);
  render(
    <TimeZoneNoonSafe
      captionLayout="dropdown"
      timeZone={timeZone}
      startMonth={startMonth}
      endMonth={new Date(1885, 11, 31)}
    />,
  );
  const selectYear = screen.getAllByRole("combobox")[1];
  const firstYearOption = within(selectYear).getAllByRole("option")[0];

  expect(Number(firstYearOption.getAttribute("value"))).toBe(1880);
});

describe("when props are midnight UTC dates with noonSafe and a time zone", () => {
  const originalTz = process.env.TZ;
  const isoDate = new Date("2024-03-01T00:00:00.000Z");

  beforeAll(() => {
    process.env.TZ = "America/Los_Angeles";
  });

  afterAll(() => {
    process.env.TZ = originalTz;
  });

  test("the month prop is interpreted in the target zone", () => {
    render(
      <TimeZoneNoonSafe timeZone="Europe/Berlin" noonSafe month={isoDate} />,
    );

    expect(grid("March 2024")).toBeInTheDocument();
  });

  test("selected/disabled dates are interpreted in the target zone", () => {
    render(
      <TimeZoneNoonSafe
        timeZone="Europe/Berlin"
        noonSafe
        month={isoDate}
        selected={isoDate}
        disabled={isoDate}
      />,
    );

    const marchFirst = dateButton(new Date(2024, 2, 1));
    expect(marchFirst).toBeInTheDocument();
    expect(marchFirst).toBeDisabled();
  });
});

describe("when the system zone is Honolulu and the target zone is historical Auckland", () => {
  const originalTz = process.env.TZ;

  beforeAll(() => {
    process.env.TZ = "Pacific/Honolulu";
  });

  afterAll(() => {
    process.env.TZ = originalTz;
  });

  test("noonSafe keeps the full month grid", () => {
    render(
      <DayPicker
        mode="single"
        month={new Date(1900, 10, 30)}
        noonSafe
        timeZone="Pacific/Auckland"
      />,
    );

    expect(
      document.querySelector('[data-day="1900-11-01"]'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-day="1900-11-30"]'),
    ).toBeInTheDocument();
  });
});
