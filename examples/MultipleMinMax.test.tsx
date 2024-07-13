import React from "react";

import { addDays } from "date-fns";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { MultipleMinMax } from "./MultipleMinMax";

const today = new Date(2021, 10, 10);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

const days = [
  today,
  addDays(today, 1),
  addDays(today, 2),
  addDays(today, 3),
  addDays(today, 4)
];

beforeEach(() => {
  render(<MultipleMinMax />);
});

describe("when a day is clicked", () => {
  beforeEach(async () => {
    await user.click(dateButton(days[0]));
  });
  test("should appear as selected", () => {
    expect(gridcell(days[0], true)).toHaveAttribute("aria-selected", "true");
  });
  describe("when a second day is clicked", () => {
    beforeEach(async () => {
      await user.click(dateButton(days[1]));
    });
    test("the first day should appear as selected", () => {
      expect(gridcell(days[0], true)).toHaveAttribute("aria-selected", "true");
    });
    test("the second day should appear as selected", () => {
      expect(gridcell(days[1], true)).toHaveAttribute("aria-selected", "true");
    });
    describe("when clicked again", () => {
      beforeEach(async () => {
        await user.click(dateButton(days[1]));
      });
      test("the first day should still appear as selected", () => {
        expect(gridcell(days[0], true)).toHaveAttribute(
          "aria-selected",
          "true"
        );
      });
      test("the second day should still appear as selected", () => {
        expect(gridcell(days[1], true)).toHaveAttribute(
          "aria-selected",
          "true"
        );
      });
    });
  });
});

describe("when the first 5 days are clicked", () => {
  beforeEach(async () => {
    await user.click(dateButton(days[0]));
    await user.click(dateButton(days[1]));
    await user.click(dateButton(days[2]));
    await user.click(dateButton(days[3]));
    await user.click(dateButton(days[4]));
  });
  test.each(days)("the %s day should appear as selected", (day) => {
    expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
  });
  test("the sixth day should not appear as selected", () => {
    const day6 = addDays(today, 5);
    expect(gridcell(day6, true)).not.toHaveAttribute("aria-selected");
  });
});
