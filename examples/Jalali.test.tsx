import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Jalali } from "./Jalali";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render دی 1403", () => {
  render(<Jalali />);
  expect(grid("دی 1403")).toBeInTheDocument();
});
