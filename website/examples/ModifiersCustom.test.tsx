import { gridcell, renderApp } from "react-day-picker/test";

import { ModifiersCustom } from "./ModifiersCustom";

beforeEach(() => {
  renderApp(<ModifiersCustom />);
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
