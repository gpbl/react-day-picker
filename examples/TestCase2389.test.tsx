import React from "react";

import { labelGrid } from "react-day-picker";

import { dateButton, grid, gridcell, nextButton } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { TestCase2389 } from "./TestCase2389";

const today = new Date(2024, 8, 6);

setTestTime(today);
beforeEach(async () => {
  render(<TestCase2389 />);
});

describe("when moving to the next month", () => {
  beforeEach(async () => {
    await user.click(nextButton());
  });
  test("should display the next month", () => {
    const nextMonth = new Date(2024, 9, 1);
    expect(grid(labelGrid(nextMonth))).toBeVisible();
  });
  describe("when clicking a day button", () => {
    const day = new Date(2024, 9, 10);
    beforeEach(async () => {
      await user.click(dateButton(day));
    });
    test("should select the day", async () => {
      expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
    });
    test("should still display the next month", () => {
      const nextMonth = new Date(2024, 9, 1);
      expect(grid(labelGrid(nextMonth))).toBeVisible();
    });
  });
});
