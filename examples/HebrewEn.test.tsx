import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { HebrewEn } from "./HebrewEn";

const today = new Date(2024, 9, 3);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("renders English caption when using en-US locale", () => {
  render(<HebrewEn />);
  expect(grid("Tishri 5785")).toBeInTheDocument();
});
