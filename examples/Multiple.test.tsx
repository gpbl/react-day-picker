import React from "react";

import { dateButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { Multiple } from "./Multiple";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<Multiple />);
});

describe("when a day is clicked", () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(dateButton(day1));
  });
  test("should appear as selected", () => {
    expect(dateButton(day1)).toHaveAttribute("aria-selected", "true");
  });
  describe("when the same day is clicked again", () => {
    beforeEach(async () => {
      await user.click(dateButton(day1));
    });
    test("should appear as not selected", () => {
      expect(dateButton(day1)).not.toHaveAttribute("aria-selected");
    });
  });
  describe("when a second day is clicked", () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(async () => {
      await user.click(dateButton(day2));
    });
    test("the first day should appear as selected", () => {
      expect(dateButton(day1)).toHaveAttribute("aria-selected", "true");
    });
    test("the second day should appear as selected", () => {
      expect(dateButton(day2)).toHaveAttribute("aria-selected", "true");
    });
  });
});
