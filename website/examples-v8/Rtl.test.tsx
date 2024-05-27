import {
  app,
  grid,
  nextButton,
  prevButton,
  renderApp,
  user,
  mockDate
} from "@/test";

import { Rtl } from "./Rtl";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<Rtl />);
});

test("should have the rtl dir attribute", () => {
  expect(app().firstChild).toHaveAttribute("dir", "rtl");
});

describe("when clicking the next month button", () => {
  test("should display the next month", async () => {
    await user.click(nextButton());
    expect(grid()).toHaveAccessibleName("ديسمبر 2021");
  });
});

describe("when clicking the previous month button", () => {
  test("should display the previous month", async () => {
    await user.click(prevButton());
    expect(grid()).toHaveAccessibleName("أكتوبر 2021");
  });
});
