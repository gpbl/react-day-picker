import { addDays } from "date-fns";
import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render, screen } from "@/test/render";
import { user } from "@/test/user";

import { Range } from "./Range";

const defaultMonth = new Date(2020, 5, 15);

let container: HTMLElement;
const days = [
  defaultMonth,
  addDays(defaultMonth, 1),
  addDays(defaultMonth, 2),
  addDays(defaultMonth, 3),
  addDays(defaultMonth, 4),
];

beforeEach(() => {
  container = render(<Range />).container;
});

test("should match the snapshot", () => {
  expect(container).toMatchSnapshot();
});
test.each(days)("%s should be selected", (day) => {
  expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
});

describe("when a day in the range is clicked", () => {
  const day = days[2];
  beforeEach(async () => user.click(dateButton(day)));
  test.each([days[0], days[1], day])("%s should be selected", (day) => {
    expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
  });
  test.each([days[3], days[4]])("%s should not be selected", (day) => {
    expect(gridcell(day, true)).not.toHaveAttribute("aria-selected");
  });
  describe("when the reset button is clicked", () => {
    beforeEach(async () =>
      user.click(screen.getByRole("button", { name: "Reset" })),
    );
    test("no day should be selected", () => {
      expect(getAllSelected()).toHaveLength(0);
    });
  });
  describe("when the day is clicked again", () => {
    const day = days[2];
    beforeEach(async () => user.click(dateButton(day)));
    test("only one day should be selected", () => {
      expect(getAllSelected()).toHaveLength(1);
    });
    test("only a day in the range should be selected", () => {
      expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
    });

    describe("when a day in the range is clicked again", () => {
      const day = days[2];
      beforeEach(async () => user.click(dateButton(day)));
      test("no day should be selected", () => {
        expect(getAllSelected()).toHaveLength(0);
      });
      test("should match the snapshot", () => {
        expect(container).toMatchSnapshot();
      });
    });
  });
});

function getAllSelected() {
  const gridcells = screen.getAllByRole("gridcell");

  return Array.from(gridcells).filter(
    (gridcell) => gridcell.getAttribute("aria-selected") === "true",
  );
}
