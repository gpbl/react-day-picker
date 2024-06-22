import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Spanish } from "./Spanish";

const today = new Date(2021, 10, 25);

beforeAll(() => {
  jest.setSystemTime(today);
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  render(<Spanish />);
});

test("should localize the caption in Spanish", () => {
  expect(grid()).toHaveAccessibleName("noviembre 2021");
});
