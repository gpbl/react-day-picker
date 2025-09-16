import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Hijri } from "./Hijri";

const today = new Date(2024, 6, 7);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render hijri caption", () => {
  render(<Hijri />);
  expect(grid()).toHaveAccessibleName(expect.stringMatching(/١٤٤٦|1446/));
});
