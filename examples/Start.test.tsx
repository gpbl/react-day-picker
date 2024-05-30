import React from "react";

import { nextButton, gridcell, previousButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { Start } from "./Start";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(async () => {
  render(<Start />);
});

test("should display the next month button", async () => {
  expect(nextButton()).toBeVisible();
  expect(nextButton()).not.toHaveAttribute("disabled");
  expect(nextButton()).not.toHaveAttribute("disabled", "true");
});

test("should display the previous month buttons", async () => {
  expect(previousButton()).toBeVisible();
  expect(previousButton()).not.toHaveAttribute("disabled");
  expect(previousButton()).not.toHaveAttribute("disabled", "true");
});

const day = new Date(2021, 10, 1);

describe("when a day is clicked", () => {
  test("should appear as selected", async () => {
    await user.click(gridcell(day));
    expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
  });
});
