import React from "react";

import { nextButton, dateButton, previousButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { Start } from "./Start";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

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
    await user.click(dateButton(day));
    expect(dateButton(day)).toHaveAttribute("aria-selected", "true");
  });
});
