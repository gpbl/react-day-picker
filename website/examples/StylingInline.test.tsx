import React from "react";

import { render } from "@testing-library/react";

import { getMonthCaption, mockDate } from "../test-v8";

import { StylingInline } from "./StylingInline";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  render(<StylingInline />).container;
});

test("the caption should apply the custom style", () => {
  expect(getMonthCaption(0).parentElement).toHaveStyle({
    color: "red"
  });
});
