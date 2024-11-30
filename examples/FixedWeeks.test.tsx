import React from "react";

import { render, screen } from "@/test/render";

import { FixedWeeks } from "./Fixedweeks";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<FixedWeeks />);
});

test("should render 6 rows", () => {
  expect(screen.getAllByRole("row")).toHaveLength(6);
});
