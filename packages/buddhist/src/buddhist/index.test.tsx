import React from "react";
import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { DayPicker, enUS, getDateLib } from "./index";

describe("Buddhist DayPicker", () => {
  test("renders Thai month caption and Buddhist Era year by default", () => {
    const { container } = render(<DayPicker month={new Date(2024, 11, 1)} />);

    expect(grid("ธันวาคม ๒๕๖๗")).toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute("dir", "ltr");
  });

  test("renders English month caption with Latin digits when requested", () => {
    render(
      <DayPicker locale={enUS} month={new Date(2024, 11, 1)} numerals="latn" />,
    );

    expect(grid("December 2567")).toBeInTheDocument();
  });

  test("applies dateLib overrides after Buddhist defaults", () => {
    render(
      <DayPicker
        month={new Date(2024, 11, 1)}
        dateLib={{ format: () => "custom caption" }}
      />,
    );

    expect(grid("custom caption")).toBeInTheDocument();
  });

  test("getDateLib formats Buddhist Era years", () => {
    const dateLib = getDateLib({ locale: enUS, numerals: "latn" });

    expect(dateLib.format(new Date(2024, 11, 1), "yyyy-MM-dd")).toBe(
      "2567-12-01",
    );
  });
});
