import { enUS } from "date-fns/locale/en-US";
import React from "react";
import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";

import { DayPicker } from "./index";

const today = new Date(2024, 9, 3);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

describe("Hebrew DayPicker", () => {
  test("renders Hebrew month caption by default", () => {
    render(<DayPicker />);
    expect(grid("תשרי 5785")).toBeInTheDocument();
  });

  test("renders English month names when locale=enUS", () => {
    render(<DayPicker locale={enUS} dir="ltr" numerals="latn" />);
    expect(grid("Tishri 5785")).toBeInTheDocument();
    const thursdayCells = screen.getAllByRole("gridcell", {
      name: /Thursday,/,
    });
    expect(thursdayCells.length).toBeGreaterThan(0);
  });
});
