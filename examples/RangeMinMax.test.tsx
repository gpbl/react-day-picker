import React from "react";

import { addDays } from "date-fns";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { RangeMinMax } from "./RangeMinMax";

beforeEach(() => render(<RangeMinMax />));

describe("when a day is clicked", () => {
  const firstDay = new Date(2022, 8, 13);
  beforeEach(async () => {
    await user.click(dateButton(firstDay));
  });
  test("should be selected", () => {
    expect(gridcell(firstDay)).toHaveAttribute("aria-selected", "true");
  });
  describe("when the day before min is clicked", () => {
    const dayAfter = addDays(firstDay, 1);
    beforeEach(async () => {
      await user.click(dateButton(dayAfter));
    });
    test("the first day should not be selected", () => {
      expect(gridcell(firstDay)).not.toHaveAttribute("aria-selected", "true");
    });
    test("the day after should be selected", () => {
      expect(gridcell(dayAfter)).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("when the day after min is clicked", () => {
    const dayAfter = addDays(firstDay, 4);
    beforeEach(async () => {
      await user.click(dateButton(dayAfter));
    });
    test("a range should be selected", () => {
      expect(gridcell(firstDay)).toHaveAttribute("aria-selected", "true");
      expect(gridcell(addDays(firstDay, 1))).toHaveAttribute(
        "aria-selected",
        "true"
      );
      expect(gridcell(addDays(firstDay, 2))).toHaveAttribute(
        "aria-selected",
        "true"
      );
      expect(gridcell(addDays(firstDay, 3))).toHaveAttribute(
        "aria-selected",
        "true"
      );
    });
  });
});
