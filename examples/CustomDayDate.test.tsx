import React from "react";

import { render, screen } from "@/test/render";

import { CustomDayDate } from "./CustomDayDate";

beforeAll(() => jest.setSystemTime(new Date(2021, 10, 25)));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<CustomDayDate />);
});

test("should render the emoji", () => {
  expect(screen.getByText("🎉")).toBeInTheDocument();
});
