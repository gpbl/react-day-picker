import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";

import { ModifiersCustom } from "./ModifiersCustom";

beforeEach(() => {
  render(<ModifiersCustom />);
});

test.each([new Date(2024, 5, 8), new Date(2024, 5, 9), new Date(2021, 5, 10)])(
  "%s should have the booked style",
  (day) => {
    expect(gridcell(day)).toHaveClass("booked");
  }
);

test.each([new Date(2024, 5, 1)])("%s should have the booked style", (day) => {
  expect(gridcell(day)).not.toHaveClass("booked");
});
