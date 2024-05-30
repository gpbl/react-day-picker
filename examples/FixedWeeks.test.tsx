import React from "react";

import { render, screen } from "@/test/render";

import { FixedWeeks } from "./Fixedweeks";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  render(<FixedWeeks />);
});

test("should render 7 rows", () => {
  expect(screen.getAllByRole("row")).toHaveLength(7);
});
