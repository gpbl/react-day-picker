import React from "react";
import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { enUS } from "../locale/en-US.js";
import { DayPicker } from "./index";

const today = new Date(2024, 9, 3);

setTestTime(today);
describe("Hebrew DayPicker", () => {
  test("applies dateLib overrides after Hebrew defaults", () => {
    render(
      <DayPicker
        month={new Date(2024, 9, 3)}
        dateLib={{ format: () => "custom caption" }}
      />,
    );

    expect(grid("custom caption")).toBeInTheDocument();
  });

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
