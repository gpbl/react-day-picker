import React from "react";

import Example from "@examples/modifiers-hidden";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";

import { queryDayButton } from "../../../test/selectors";

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test.each(days)("the day %s should be hidden", (day) => {
  expect(queryDayButton(day)).not.toBeInTheDocument();
});
