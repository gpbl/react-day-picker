import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Jalali } from "./Jalali";

const today = new Date(1403, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render نوامبر 1403", () => {
  render(<Jalali />);
  expect(grid("نوامبر 1403")).toBeInTheDocument();
});
