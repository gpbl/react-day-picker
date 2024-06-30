import React from "react";

import { render, screen } from "@/test/render";

import { CustomDayButton } from "./CustomDayButton";

beforeAll(() => jest.setSystemTime(new Date(2021, 10, 25)));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<CustomDayButton />);
});

test("should render the emoji", () => {
  expect(screen.getByText("🎉")).toBeInTheDocument();
});
