import React from "react";

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
    // TODO: verify this test actually works
    expect(screen.getByRole("gridcell", { name: "31" })).toBeInTheDocument();
  });
});
