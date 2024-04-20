import React from "react";

import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";

import { getMonthCaption } from "react-day-picker/test/selectors";

import Example from "@examples/styling-inline";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />).container;
});

test("the caption should apply the custom style", () => {
  expect(getMonthCaption(0).parentElement).toHaveStyle({
    color: "red"
  });
});
