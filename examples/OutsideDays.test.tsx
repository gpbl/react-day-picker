import React from "react";

import { setDate } from "date-fns";

import { gridcell } from "@/test/elements";
import { render, screen } from "@/test/render";

import { OutsideDays } from "./OutsideDays";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<OutsideDays />);
});

describe("when displaying a month with outside days", () => {
  test("should display the outside day", () => {
    expect(gridcell(setDate(today, 31))).toBeInTheDocument();
  });
});
