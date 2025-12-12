import React from "react";
import { DayPicker, faIR } from "react-day-picker/persian";

import { render, screen, within } from "@/test/render";

test("Persian noonSafe keeps full weeks in historical time zones", () => {
  render(
    <DayPicker
      timeZone="Asia/Dubai"
      noonSafe
      fixedWeeks
      showOutsideDays
      defaultMonth={new Date(1900, 11, 1)}
    />,
  );

  const grid = screen.getByRole("grid");
  const rows = within(grid).getAllByRole("row");
  const dayRows = rows.filter(
    (row) => within(row).queryAllByRole("gridcell").length > 0,
  );

  expect(within(dayRows[0]).getAllByRole("gridcell")).toHaveLength(7);
  expect(
    within(dayRows[dayRows.length - 1]).getAllByRole("gridcell"),
  ).toHaveLength(7);
});

test("Persian noonSafe renders full first week for historical Saigon month", () => {
  render(
    <DayPicker
      fixedWeeks
      hideWeekdays
      mode="single"
      month={new Date(1497, 11, 1)}
      noonSafe
      numerals="latn"
      timeZone="Asia/Saigon"
      locale={faIR}
    />,
  );

  const grid = screen.getByRole("grid");
  const rows = within(grid).getAllByRole("row");
  const dayRows = rows.filter(
    (row) => within(row).queryAllByRole("gridcell").length > 0,
  );

  expect(within(dayRows[0]).getAllByRole("gridcell")).toHaveLength(7);
});
