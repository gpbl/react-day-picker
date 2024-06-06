import React from "react";

import { grid, monthDropdown, yearDropdown } from "@/test/elements";
import { render, within } from "@/test/render";
import { user } from "@/test/user";

import { Dropdown } from "./Dropdown";

beforeEach(() => {
  render(<Dropdown />);
});

test("should display the month dropdown", () => {
  expect(monthDropdown()).toBeInTheDocument();
});

test("should display the year dropdown", () => {
  expect(yearDropdown()).toBeInTheDocument();
});

describe("when choosing a month", () => {
  const monthName = "January";
  beforeEach(async () => {
    await user.selectOptions(monthDropdown(), monthName);
  });
  test("should display the month", () => {
    expect(grid()).toHaveAccessibleName(`${monthName} 2022`);
  });
});

describe("when choosing a year", () => {
  const year = "2021";
  beforeEach(async () => {
    await user.selectOptions(yearDropdown(), year);
  });
  test("should display the year", () => {
    expect(grid()).toHaveAccessibleName(`June ${year}`);
  });
});

describe("when choosing a month and year", () => {
  const monthName = "February";
  const year = "2023";
  beforeEach(async () => {
    await user.selectOptions(monthDropdown(), monthName);
    await user.selectOptions(yearDropdown(), year);
  });
  test("should display the month and year", () => {
    expect(grid()).toHaveAccessibleName(`${monthName} ${year}`);
  });
});

describe("when a month falls out the from date", () => {
  test("the year option be disabled", async () => {
    await user.selectOptions(monthDropdown(), "December");
    expect(
      within(yearDropdown()).getByRole("option", { name: "2025" })
    ).toBeDisabled();
    expect(monthDropdown()).toHaveValue(6);
  });
  test("the month option be disabled", async () => {
    await user.selectOptions(yearDropdown(), "2015");
    expect(yearDropdown()).toHaveValue("2015");
    expect(
      within(monthDropdown()).getByRole("option", { name: "January" })
    ).toBeDisabled();
  });
});
