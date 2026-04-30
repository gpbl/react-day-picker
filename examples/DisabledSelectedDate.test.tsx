import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";

import { DisabledSelectedDate } from "./DisabledSelectedDate";

const selectedStyle = "background-color: rgb(255, 0, 0)";
const dayBeforeRangeStart = new Date(2025, 2, 7);
const selectedDays = [
  new Date(2025, 2, 8),
  new Date(2025, 2, 9),
  new Date(2025, 2, 10),
  new Date(2025, 2, 11),
];
const dayAfterRangeEnd = new Date(2025, 2, 12);

beforeEach(() => {
  render(<DisabledSelectedDate />);
});

describe("selected disabled days", () => {
  test.each(selectedDays)("renders %s with the selected modifier", (day) => {
    expect(gridcell(day, true)).toHaveClass("rdp-selected");
  });

  test.each(selectedDays)("renders %s with the selected style", (day) => {
    expect(gridcell(day, true)).toHaveStyle(selectedStyle);
  });
});

describe("unselected disabled days", () => {
  test.each([
    dayBeforeRangeStart,
    dayAfterRangeEnd,
  ])("does not render %s with the selected modifier", (day) => {
    expect(gridcell(day, true)).not.toHaveClass("rdp-selected");
  });

  test.each([
    dayBeforeRangeStart,
    dayAfterRangeEnd,
  ])("does not render %s with the selected style", (day) => {
    expect(gridcell(day, true)).not.toHaveStyle(selectedStyle);
  });
});
