import React from "react";

import { labelMonthDropdown } from "react-day-picker";

import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { DropdownMultipleMonths } from "./DropdownMultipleMonths";

const today = new Date(2023, 9, 16);

setTestTime(today);
beforeEach(() => {
  render(<DropdownMultipleMonths />);
});

describe("when choosing a month from the first dropdown", () => {
  const monthName = "January";
  beforeEach(async () => {
    const firstDropDown = screen.getAllByRole("combobox", {
      name: labelMonthDropdown(),
    })[0];
    await user.selectOptions(firstDropDown, monthName);
  });
  test("should display the month in the first dropdown", () => {
    expect(grid(`${monthName} 2024`)).toBeInTheDocument();
  });
});

describe("when choosing a month from the third dropdown", () => {
  const newMonthName = "October";
  beforeEach(async () => {
    const thirdDropDown = screen.getAllByRole("combobox", {
      name: labelMonthDropdown(),
    })[2];
    await user.selectOptions(thirdDropDown, newMonthName);
  });
  test("should display the month selected the third dropdown", () => {
    expect(grid(`${newMonthName} 2024`)).toBeInTheDocument();
  });
});
