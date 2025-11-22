import { differenceInMonths } from "date-fns";
import React from "react";

import { nextButton, previousButton } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { FromToYear } from "./FromToYear";

const fromMonth = new Date(2024, 0);
const toMonth = new Date(2026, 11);
const today = new Date(2025, 10, 25);

setTestTime(today);
beforeEach(() => {
  render(<FromToYear />);
});

test("the previous month button should be disabled", () => {
  expect(previousButton()).toHaveAttribute("aria-disabled", "true");
});
test("the next month button should not be disabled", () => {
  expect(nextButton()).not.toHaveAttribute("aria-disabled", "true");
});

describe("when navigating to the last month", () => {
  const nOfMonths = differenceInMonths(toMonth, fromMonth);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await user.click(nextButton());
    }
  });
  test("the previous month button should not be disabled", () => {
    expect(previousButton()).not.toHaveAttribute("aria-disabled", "true");
  });
  test("the next month button should be disabled", () => {
    expect(nextButton()).toHaveAttribute("aria-disabled", "true");
  });
});
