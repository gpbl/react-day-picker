import React from "react";

import { addDays } from "date-fns";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { RangeMinMax } from "./RangeMinMax";

const today = new Date(2022, 8, 12);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => render(<RangeMinMax />));

describe("when a day is clicked", () => {
  const firstDay = new Date(2022, 8, 13);
  beforeEach(async () => {
    await user.click(dateButton(firstDay));
  });
  test("should be selected", () => {
    expect(gridcell(firstDay, true)).toHaveAttribute("aria-selected", "true");
  });
  describe("when the day after min is clicked", () => {
    const dayAfter = addDays(firstDay, 4);
    beforeEach(async () => {
      await user.click(dateButton(dayAfter));
    });
    test("a range should be selected", () => {
      expect(gridcell(firstDay, true)).toHaveAttribute("aria-selected", "true");
      expect(gridcell(addDays(firstDay, 1), true)).toHaveAttribute(
        "aria-selected",
        "true"
      );
      expect(gridcell(addDays(firstDay, 2), true)).toHaveAttribute(
        "aria-selected",
        "true"
      );
      expect(gridcell(addDays(firstDay, 3), true)).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });
  });
});
