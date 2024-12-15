import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Jalali } from "./Jalali";

const today = new Date(1403, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test.skip("should render خرداد 1403", () => {
  render(<Jalali />);
  expect(grid("خرداد 1403")).toBeInTheDocument();
});
