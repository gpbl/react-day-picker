import { mockDate, gridcell, renderApp } from "@/test";

import { ModifiersClassnames } from "./ModifiersClassnames";

const days = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  new Date(2021, 5, 11)
];

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<ModifiersClassnames />);
});

test.each(days)("the day %s should have the `my-booked-class` class", (day) => {
  expect(gridcell(day)).toHaveClass("my-booked-class");
});
