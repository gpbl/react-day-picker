import {
  gridcell,
  getNextButton,
  getPrevButton,
  renderApp,
  user
} from "react-day-picker/test";

import { Start } from "./Start";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(async () => {
  renderApp(<Start />);
});

test("should display the next month button", async () => {
  expect(getNextButton()).toBeVisible();
  expect(getNextButton()).not.toHaveAttribute("aria-disabled");
  expect(getNextButton()).not.toHaveAttribute("aria-disabled", "true");
});

test("should display the previous month buttons", async () => {
  expect(getPrevButton()).toBeVisible();
  expect(getPrevButton()).not.toHaveAttribute("aria-disabled");
  expect(getPrevButton()).not.toHaveAttribute("aria-disabled", "true");
});

const day = new Date(2021, 10, 1);

describe("when a day is clicked", () => {
  beforeEach(async () => {
    await user.click(gridcell(day));
  });
  test("should appear as selected", () => {
    expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
  });
});
