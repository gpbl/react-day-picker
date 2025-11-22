import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { Multiple } from "./Multiple";

const today = new Date(2021, 10, 25);

setTestTime(today);
beforeEach(() => {
  render(<Multiple />);
});

describe("when a day is clicked", () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(dateButton(day1));
  });
  test("should appear as selected", () => {
    expect(gridcell(day1, true)).toHaveAttribute("aria-selected", "true");
  });
  describe("when the same day is clicked again", () => {
    beforeEach(async () => {
      await user.click(dateButton(day1));
    });
    test("should appear as not selected", () => {
      expect(gridcell(day1, true)).not.toHaveAttribute("aria-selected");
    });
  });
  describe("when a second day is clicked", () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(async () => {
      await user.click(dateButton(day2));
    });
    test("the first day should appear as selected", () => {
      expect(gridcell(day1, true)).toHaveAttribute("aria-selected", "true");
    });
    test("the second day should appear as selected", () => {
      expect(gridcell(day2, true)).toHaveAttribute("aria-selected", "true");
    });
  });
});
