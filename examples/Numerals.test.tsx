import React from "react";

import { render } from "@testing-library/react";

import { grid } from "@/test/elements";

import { Numerals } from "./Numerals";

const today = new Date(2025, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should use Devanagari numerals", () => {
  render(<Numerals />);

  expect(grid()).toHaveTextContent("२५");
});
