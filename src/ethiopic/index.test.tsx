import { enUS } from "date-fns/locale/en-US";
import React from "react";
import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { DayPicker } from "./index";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

describe("Ethiopic DayPicker", () => {
  test("renders Amharic month with Geez numerals by default", () => {
    render(<DayPicker />);
    // Caption label is also used as grid aria-label
    expect(grid("ታህሳስ ፳፻፲፯")).toBeInTheDocument();
  });

  test("renders English month with Latin digits and English weekdays when locale=enUS, numerals=latn", () => {
    render(<DayPicker locale={enUS} numerals="latn" />);
    expect(grid("Tahsas 2017")).toBeInTheDocument();
    // ARIA labels should contain English weekday names
    const fridayCells = screen.getAllByRole("gridcell", { name: /Friday,/ });
    expect(fridayCells.length).toBeGreaterThan(0);
  });
});
