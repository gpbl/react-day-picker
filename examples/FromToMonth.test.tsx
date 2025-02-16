import React from "react";

import { differenceInMonths } from "date-fns";

import { nextButton, previousButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { FromToMonth } from "./FromToMonth";

beforeEach(() => {
  render(<FromToMonth />);
});

test("the previous button should be disabled", () => {
  expect(previousButton()).toHaveAttribute("aria-disabled", true);
});

test("the next button should be enabled", () => {
  expect(nextButton()).not.toHaveAttribute("aria-disabled", true);
});

describe("when navigating to the last month", () => {
  const fromDate = new Date(2015, 5);
  const toDate = new Date(2015, 10);
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await user.click(nextButton());
    }
  });

  test("the previous button should not be disabled", () => {
    expect(previousButton()).not.toHaveAttribute("aria-disabled", true);
  });

  test("the next button should be disabled", () => {
    expect(nextButton()).toHaveAttribute("aria-disabled", true);
  });
});
