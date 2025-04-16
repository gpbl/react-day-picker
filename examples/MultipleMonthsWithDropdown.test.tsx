import React from "react";

import { render, screen } from "@/test/render";
import { user } from "@/test/user";

import { MultipleMonthsWithDropdown } from "./MultipleMonthsWithDropdown";

const today = new Date(2025, 5, 16);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<MultipleMonthsWithDropdown />);
});

describe("when choosing a month from the second dropdown", () => {
  beforeEach(() => {
    const select = screen.getAllByRole("combobox")[2];
    user.selectOptions(select, "June");
  });
  test('should update the first month to "May 2025"', () => {
    expect(screen.getAllByRole("grid")[0]).toHaveAccessibleName("May 2025");
  });
  test('should update the second month to "June 2025"', () => {
    expect(screen.getAllByRole("grid")[1]).toHaveAccessibleName("June 2025");
  });
});

describe("when choosing a year from the second dropdown", () => {
  beforeEach(() => {
    const select = screen.getAllByRole("combobox")[3];
    user.selectOptions(select, "2022");
  });
  test('should update the first month to "April 2022"', () => {
    expect(screen.getAllByRole("grid")[0]).toHaveAccessibleName("April 2022");
  });
  test('should update the second month to "May 2025"', () => {
    expect(screen.getAllByRole("grid")[1]).toHaveAccessibleName("May 2022");
  });
});
