import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";

import { DisabledSelectedDate } from "./DisabledSelectedDate";

test("selected days should render with 'selected' modifier when disabled", () => {
  render(<DisabledSelectedDate />);

  const dayBeforeRangeStart = new Date(2025, 2, 7);
  expect(gridcell(dayBeforeRangeStart, true)).not.toHaveClass("rdp-selected");
  expect(gridcell(dayBeforeRangeStart, true)).not.toHaveStyle(
    "background-color: red"
  );
  const rangeStart = new Date(2025, 2, 8);
  expect(gridcell(rangeStart, true)).toHaveClass("rdp-selected");
  expect(gridcell(rangeStart, true)).toHaveStyle("background-color: red");

  rangeStart.setDate(rangeStart.getDate() + 1);
  expect(gridcell(rangeStart, true)).toHaveClass("rdp-selected");
  expect(gridcell(rangeStart, true)).toHaveStyle("background-color: red");

  rangeStart.setDate(rangeStart.getDate() + 1);
  expect(gridcell(rangeStart, true)).toHaveClass("rdp-selected");
  expect(gridcell(rangeStart, true)).toHaveStyle("background-color: red");

  rangeStart.setDate(rangeStart.getDate() + 1);
  expect(gridcell(rangeStart, true)).toHaveClass("rdp-selected");
  expect(gridcell(rangeStart, true)).toHaveStyle("background-color: red");

  rangeStart.setDate(rangeStart.getDate() + 1);
  expect(gridcell(rangeStart, true)).not.toHaveClass("rdp-selected");
  expect(gridcell(dayBeforeRangeStart, true)).not.toHaveStyle(
    "background-color: red"
  );
});
