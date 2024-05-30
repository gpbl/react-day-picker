import React from "react";

import { differenceInMonths } from "date-fns";

import { nextButton, previousButton } from "@/test/elements";
import { act, render } from "@/test/render";
import { user } from "@/test/user";

import { FromToMonth } from "./FromToMonth";

beforeEach(() => {
  render(<FromToMonth />);
});

test("the previous button should be disabled", () => {
  expect(previousButton()).toHaveAttribute("disabled");
});

test("the next button should be enabled", () => {
  expect(nextButton()).not.toHaveAttribute("disabled");
});

describe("when navigating to the last month", () => {
  const fromDate = new Date(2015, 5);
  const toDate = new Date(2015, 10);
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await act(() => user.click(nextButton()));
    }
  });

  test("the previous button should not be disabled", () => {
    expect(previousButton()).not.toHaveAttribute("disabled");
  });

  test("the next button should be disabled", () => {
    expect(nextButton()).toHaveAttribute("disabled");
  });
});
