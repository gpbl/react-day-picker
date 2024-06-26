import React from "react";

import { addDays } from "date-fns";

import { dateButton } from "@/test/elements";
import { render, screen } from "@/test/render";
import { user } from "@/test/user";

import { Range } from "./Range";

const pastMonth = new Date(2020, 10, 15);
let container: HTMLElement;
const days = [
  pastMonth,
  addDays(pastMonth, 1),
  addDays(pastMonth, 2),
  addDays(pastMonth, 3),
  addDays(pastMonth, 4)
];

beforeEach(() => (container = render(<Range />).container));

test("should match the snapshot", () => {
  expect(container).toMatchSnapshot();
});
test.each(days)("%s should be selected", (day) => {
  expect(dateButton(day)).toHaveAttribute("aria-selected", "true");
});

describe("when a day in the range is clicked", () => {
  const day = days[2];
  beforeEach(async () => user.click(dateButton(day)));
  test.each([days[0], days[1], day])("%s should be selected", (day) => {
    expect(dateButton(day)).toHaveAttribute("aria-selected", "true");
  });
  test.each([days[3], days[4]])("%s should not be selected", (day) => {
    expect(dateButton(day)).not.toHaveAttribute("aria-selected");
  });
  describe("when the day is clicked again", () => {
    const day = days[2];
    beforeEach(async () => user.click(dateButton(day)));
    test("only one day should be selected", () => {
      expect(getAllSelectedDays()).toHaveLength(1);
    });
    test("only a day in the range should be selected", () => {
      expect(dateButton(day)).toHaveAttribute("aria-selected", "true");
    });

    describe("when a day in the range is clicked again", () => {
      const day = days[2];
      beforeEach(async () => user.click(dateButton(day)));
      test("no day should be selected", () => {
        expect(getAllSelectedDays()).toHaveLength(0);
      });
      test("should match the snapshot", () => {
        expect(container).toMatchSnapshot();
      });
    });
  });
});

function getAllSelectedDays() {
  const buttons = screen.getAllByRole("gridcell");

  return Array.from(buttons).filter(
    (button) => button.getAttribute("aria-selected") === "true"
  );
}
