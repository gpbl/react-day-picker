import React from "react";
import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { DayPicker } from "./index";

describe("Persian DayPicker", () => {
  test("applies dateLib overrides after Persian defaults", () => {
    render(
      <DayPicker
        month={new Date(2024, 11, 1)}
        dateLib={{ format: () => "custom caption" }}
      />,
    );

    expect(grid("custom caption")).toBeInTheDocument();
  });
});
