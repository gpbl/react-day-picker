import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { Multiple } from "./Multiple";

const today = new Date(2021, 10, 25);

beforeAll(() => {
  jest.setSystemTime(today);
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  render(<Multiple />);
});

describe("when a day is clicked", () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(gridcell(day1));
  });
  test("should appear as selected", () => {
    expect(gridcell(day1)).toHaveAttribute("aria-selected", "true");
  });
  describe("when a second day is clicked", () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(async () => {
      await user.click(gridcell(day2));
    });
    test("the first day should appear as selected", () => {
      expect(gridcell(day1)).toHaveAttribute("aria-selected", "true");
    });
    test("the second day should appear as selected", () => {
      expect(gridcell(day2)).toHaveAttribute("aria-selected", "true");
    });
  });
});
