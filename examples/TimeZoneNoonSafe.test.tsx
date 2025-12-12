import userEvent from "@testing-library/user-event";
import React from "react";
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

test("year dropdown starts at the fromMonth year", () => {
  const timeZone = "Asia/Dubai";
  const fromMonth = new Date(1880, 0, 1);
  render(
    <TimeZoneNoonSafe
      captionLayout="dropdown"
      timeZone={timeZone}
      fromMonth={fromMonth}
      toMonth={new Date(1885, 11, 31)}
    />,
  );
  const selectYear = screen.getAllByRole("combobox")[1];
  const firstYearOption = within(selectYear).getAllByRole("option")[0];

  expect(Number(firstYearOption.getAttribute("value"))).toBe(1880);
});
