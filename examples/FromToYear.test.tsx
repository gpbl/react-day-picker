import React from "react";

import { differenceInMonths } from "date-fns";

import { nextButton, previousButton } from "@/test/elements";
import { act, render } from "@/test/render";
import { user } from "@/test/user";

import { FromToYear } from "./FromToYear";

const fromMonth = new Date(2024, 0);
const toMonth = new Date(2026, 11);
const today = new Date(2025, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<FromToYear />);
});

test("the previous month button should be disabled", () => {
  expect(previousButton()).toHaveAttribute("disabled");
});
test("the next month button should not be disabled", () => {
  expect(nextButton()).not.toHaveAttribute("disabled");
});

describe("when navigating to the last month", () => {
  const nOfMonths = differenceInMonths(toMonth, fromMonth);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await act(() => user.click(nextButton()));
    }
  });
  test("the previous month button should not be disabled", () => {
    expect(previousButton()).not.toHaveAttribute("disabled");
  });
  test("the next month button should be disabled", () => {
    expect(nextButton()).toHaveAttribute("disabled");
  });
});
