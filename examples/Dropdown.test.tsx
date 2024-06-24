import React from "react";

import { grid, monthDropdown, yearDropdown } from "@/test/elements";
import { render, within } from "@/test/render";
import { user } from "@/test/user";

import { Dropdown } from "./Dropdown";

const today = new Date(2015, 6, 1);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<Dropdown />);
});

test("should display the month dropdown", () => {
  expect(monthDropdown()).toBeInTheDocument();
});

test("should display the year dropdown", () => {
  expect(yearDropdown()).toBeInTheDocument();
});

test("should disable the months out of range", () => {
  expect(
    within(monthDropdown()).getByRole("option", { name: "January" })
  ).toBeDisabled();
});

describe("when choosing a month", () => {
  const monthName = "December";
  beforeEach(async () => {
    await user.selectOptions(monthDropdown(), monthName);
  });
  test("should display the month", () => {
    expect(grid()).toHaveAccessibleName(`${monthName} 2015`);
  });
  test("should disable the years out of range", () => {
    expect(
      within(yearDropdown()).getByRole("option", { name: "2025" })
    ).toBeDisabled();
  });
});

describe("when choosing a year", () => {
  const year = "2021";
  beforeEach(async () => {
    await user.selectOptions(yearDropdown(), year);
  });
  test("should display the year", () => {
    expect(grid()).toHaveAccessibleName(`July ${year}`);
  });
});

describe("when choosing a disabled month", () => {
  const monthName = "February";
  beforeEach(async () => {
    await user.selectOptions(monthDropdown(), monthName);
  });
  test("should display the first available month", () => {
    expect(grid()).toHaveAccessibleName(`July 2015`);
  });
});
