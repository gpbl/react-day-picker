import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Buddhist } from "./Buddhist";

// Use a fixed date: December 22, 2024 (Gregorian)
const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render BE year with Thai digits in caption", () => {
  render(<Buddhist />);
  const g = grid();
  expect(g).toHaveAccessibleName(expect.stringMatching(/๒๕๖๗$/));
});
