import React from "react";

import Example from "@examples/modifiers-classnames";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";

import { getDayButton } from "../../../test/selectors";

const days = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  new Date(2021, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test.each(days)("the day %s should have the `my-booked-class` class", (day) => {
  expect(getDayButton(day)).toHaveClass("my-booked-class");
});
