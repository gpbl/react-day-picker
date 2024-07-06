import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { RangeShiftKey } from "./RangeShiftKey";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => render(<RangeShiftKey />));

describe("when displaying November 2021", () => {
  describe("when clicking on the 11th", () => {
    const day1 = new Date(2021, 10, 11);
    beforeEach(async () => user.click(dateButton(day1)));
    test("the 11th day should have aria-selected true", () => {
      expect(gridcell(day1, true)).toHaveAttribute("aria-selected", "true");
    });
    describe("when clicking on the 13th", () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(async () => user.click(dateButton(day2)));

      test("the 11th day should still have aria-selected true", () => {
        expect(gridcell(day1, true)).toHaveAttribute("aria-selected", "true");
      });
      test("the 13th day not should not have aria-selected", () => {
        expect(gridcell(day2, true)).not.toHaveAttribute("aria-selected");
      });
    });
    describe("when pressing the Shift key", () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(async () => {
        user.keyboard("{Shift>}");
        await user.click(dateButton(day2));
      });
      test("the 13th day should have aria-selected true", () => {
        expect(gridcell(day2, true)).toHaveAttribute("aria-selected", "true");
      });
    });
  });
});
