import { enUS } from "date-fns/locale/en-US";
import React from "react";
import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";

import { DayPicker } from "./index";

const today = new Date(2024, 6, 7);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

describe("Hijri DayPicker", () => {
  test("renders Arabic caption by default", () => {
    render(<DayPicker />);
    expect(grid()).toHaveAccessibleName(expect.stringMatching(/١٤٤٦|1446/));
  });

  test("renders English caption with enUS locale", () => {
    render(<DayPicker locale={enUS} dir="ltr" numerals="latn" />);
    const caption = grid();
    expect(caption).toHaveAccessibleName(expect.stringContaining("1446"));
    const thursdayCells = screen.getAllByRole("gridcell", {
      name: /Thursday,/,
    });
    expect(thursdayCells.length).toBeGreaterThan(0);
  });
});
