import {
  grid,
  monthDropdown,
  yearDropdown,
  renderApp,
  user
} from "react-day-picker/test";

import { CaptionLayout } from "./Dropdown";

const today = new Date(2022, 5, 10);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<CaptionLayout />);
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
