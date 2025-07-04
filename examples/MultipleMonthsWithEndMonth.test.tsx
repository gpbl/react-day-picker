import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { MultipleMonthsWithEndMonth } from "./MultipleMonthsWithEndMonth";

const today = new Date(2025, 6, 1);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<MultipleMonthsWithEndMonth />);
});

test("should display three months", () => {
  expect(grid("May 2025")).toBeInTheDocument();
  expect(grid("June 2025")).toBeInTheDocument();
  expect(grid("July 2025")).toBeInTheDocument();
});
