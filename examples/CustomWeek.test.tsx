import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { CustomWeek } from "./CustomWeek";

const today = new Date(2021, 10, 25);

setTestTime(today);
beforeEach(() => {
  render(<CustomWeek />);
});

describe("when a day is clicked", () => {
  beforeEach(async () => {
    await user.click(dateButton(today));
  });
  test("the whole week should appear selected", () => {
    const week = [
      gridcell(new Date(2021, 10, 21), true),
      gridcell(new Date(2021, 10, 22), true),
      gridcell(new Date(2021, 10, 23), true),
      gridcell(new Date(2021, 10, 24), true),
      gridcell(new Date(2021, 10, 25), true),
      gridcell(new Date(2021, 10, 26), true),
      gridcell(new Date(2021, 10, 27), true),
    ];
    week.forEach((day) => {
      expect(day).toHaveAttribute("aria-selected", "true");
    });
  });
  describe("when clicking the day again", () => {
    beforeEach(async () => {
      await user.click(dateButton(today));
    });
    test("the whole week should not be selected", () => {
      const week = [
        dateButton(new Date(2021, 10, 21)),
        dateButton(new Date(2021, 10, 22)),
        dateButton(new Date(2021, 10, 23)),
        dateButton(new Date(2021, 10, 24)),
        dateButton(new Date(2021, 10, 25)),
        dateButton(new Date(2021, 10, 26)),
        dateButton(new Date(2021, 10, 27)),
      ];
      week.forEach((day) => {
        expect(day).not.toHaveAttribute("aria-selected", "true");
      });
    });
  });
});
