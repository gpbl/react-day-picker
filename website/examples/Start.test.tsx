import {
  gridcell,
  nextButton,
  prevButton,
  renderApp,
  user,
  mockDate
} from "@/test";

import { Start } from "./Start";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(async () => {
  renderApp(<Start />);
});

test("should display the next month button", async () => {
  expect(nextButton()).toBeVisible();
  expect(nextButton()).not.toHaveAttribute("disabled");
  expect(nextButton()).not.toHaveAttribute("disabled", "true");
});

test("should display the previous month buttons", async () => {
  expect(prevButton()).toBeVisible();
  expect(prevButton()).not.toHaveAttribute("disabled");
  expect(prevButton()).not.toHaveAttribute("disabled", "true");
});

const day = new Date(2021, 10, 1);

describe("when a day is clicked", () => {
  test("should appear as selected", async () => {
    await user.click(gridcell(day));
    expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
  });
});
