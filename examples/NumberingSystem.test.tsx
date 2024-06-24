import React from "react";

import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";

import { NumberingSystem } from "./NumberingSystem";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<NumberingSystem />);
});

test("should localize the year", () => {
  expect(grid("نوفمبر ٢٬٠٢١")).toBeInTheDocument();
});
test("should localize the days", () => {
  expect(screen.getByText("أحد")).toBeInTheDocument();
});
test("should localize the week numbers", () => {
  expect(screen.getByText("٤٥")).toBeInTheDocument();
});
