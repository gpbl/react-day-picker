import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { BuddhistEn } from "./BuddhistEn";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render December 2567 (BE) with latin digits", () => {
  render(<BuddhistEn />);
  expect(grid()).toHaveAccessibleName("December 2567");
});
