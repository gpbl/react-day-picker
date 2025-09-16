import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { HijriEn } from "./HijriEn";

const today = new Date(2024, 6, 7);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render english hijri caption", () => {
  render(<HijriEn />);
  expect(grid()).toHaveAccessibleName(expect.stringContaining("1446"));
});
