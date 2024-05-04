import { differenceInMonths } from "date-fns";

import { nextButton, previousButton, renderApp, user } from "@/test";

import { FromToMonth } from "./FromToMonth";

beforeEach(() => {
  renderApp(<FromToMonth />);
});

test("the previous button should be aria-disabled", () => {
  expect(previousButton()).toHaveAttribute("aria-disabled", "true");
});

test("the next button should be aria-disabled", () => {
  expect(nextButton()).not.toHaveAttribute("aria-disabled");
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
    expect(previousButton()).not.toHaveAttribute("aria-disabled");
  });

  test("the next button should be disabled", () => {
    expect(nextButton()).toHaveAttribute("aria-disabled", "true");
  });
});
