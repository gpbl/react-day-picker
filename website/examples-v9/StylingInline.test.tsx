import { render } from "@testing-library/react";

import { getMonthCaption, mockDate } from "@/test";

import { StylingInline } from "./StylingInline";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  render(<StylingInline />).container;
});

// eslint-disable-next-line jest/no-disabled-tests
test.skip("the caption should apply the custom style", () => {
  expect(getMonthCaption(0).parentElement).toHaveStyle({
    color: "red"
  });
});
