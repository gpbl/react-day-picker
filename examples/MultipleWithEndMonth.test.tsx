import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { MultipleWithEndMonth } from "./MultipleWithEndMonth";

const today = new Date(2025, 6, 1);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<MultipleWithEndMonth />);
});

test("should display two months", () => {
  expect(grid("July 2025")).toBeInTheDocument();
  expect(grid("June 2025")).toBeInTheDocument();
});
