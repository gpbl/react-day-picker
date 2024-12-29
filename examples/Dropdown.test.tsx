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

test("should disable the months before startMonth", () => {
  const disabledMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
  ];
  for (const month of disabledMonth) {
    expect(
      within(monthDropdown()).getByRole("option", { name: month })
    ).toBeDisabled();
  }
});

test("should disable the months after endMonth", async () => {
  await user.selectOptions(yearDropdown(), "2025");
  const disabledMonth = ["November", "December"];
  for (const month of disabledMonth) {
    expect(
      within(monthDropdown()).getByRole("option", { name: month })
    ).toBeDisabled();
  }
});

describe("when choosing a month", () => {
  test("should display the month", async () => {
    const monthName = "December";
    await user.selectOptions(monthDropdown(), monthName);
    expect(grid()).toHaveAccessibleName(`${monthName} 2024`);
  });
});

describe("when choosing a year", () => {
  test("should display the year", async () => {
    const year = "2025";
    await user.selectOptions(yearDropdown(), year);
    expect(grid()).toHaveAccessibleName(`July ${year}`);
  });

  test("should display the first available month when selecting a month before startMonth", async () => {
    await user.selectOptions(yearDropdown(), "2025");
    await user.selectOptions(monthDropdown(), "January");
    await user.selectOptions(yearDropdown(), "2024");
    expect(grid()).toHaveAccessibleName(`July 2024`);
  });

  test("should display the last available month when selecting a month after endMonth", async () => {
    await user.selectOptions(monthDropdown(), "December");
    await user.selectOptions(yearDropdown(), "2025");
    expect(grid()).toHaveAccessibleName(`October 2025`);
  });
});

describe("when choosing a disabled month", () => {
  test("should display the first available month", async () => {
    const monthName = "February";
    await user.selectOptions(monthDropdown(), monthName);
    expect(grid()).toHaveAccessibleName(`July 2024`);
  });
});
