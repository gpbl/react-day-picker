import { differenceInMonths } from "date-fns";

import {
  act,
  mockDate,
  nextButton,
  prevButton,
  renderApp,
  user
} from "../test-v8";

import { FromToYear } from "./FromToYear";

const fromDate = new Date(2024, 0);
const toDate = new Date(2026, 11);
const today = new Date(2025, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<FromToYear />);
});

test("the previous month button should be disabled", () => {
  expect(prevButton()).toHaveAttribute("disabled");
});
test("the next month button should not be disabled", () => {
  expect(nextButton()).not.toHaveAttribute("disabled");
});

describe("when navigating to the last month", () => {
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await act(() => user.click(nextButton()));
    }
  });
  test("the previous month button should not be disabled", () => {
    expect(prevButton()).not.toHaveAttribute("disabled");
  });
  test("the next month button should be disabled", () => {
    expect(nextButton()).toHaveAttribute("disabled");
  });
});
