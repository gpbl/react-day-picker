import React from "react";

import { grid, monthDropdown, nextButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { DropdownMonths } from "./DropdownMonths";

const today = new Date(2015, 11, 1);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<DropdownMonths />);
});

test("should display the month dropdown", () => {
  expect(monthDropdown()).toBeInTheDocument();
});

test("should allow all months", async () => {
  expect(grid()).toHaveAccessibleName(`December 2015`);
  await user.click(nextButton());
  expect(grid()).toHaveAccessibleName(`January 2016`);
});
