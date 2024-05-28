import { differenceInMonths } from "date-fns";

import { act, nextButton, prevButton, renderApp, user } from "@/test";

import { FromToMonth } from "./FromToMonth";

beforeEach(() => {
  renderApp(<FromToMonth />);
});

test("the previous button should be disabled", () => {
  expect(prevButton()).toHaveAttribute("disabled");
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
    expect(prevButton()).not.toHaveAttribute("disabled");
  });

  test("the next button should be disabled", () => {
    expect(nextButton()).toHaveAttribute("disabled");
  });
});
