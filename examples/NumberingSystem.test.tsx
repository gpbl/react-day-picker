import React from "react";

import { render, screen } from "@/test/render";

import { NumberingSystem } from "./NumberingSystem";

const today = new Date(2024, 8, 19);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<NumberingSystem />);
});

test("should localize the days", () => {
  expect(screen.getByText("أربعاء")).toBeInTheDocument();
});
test("should localize the week numbers", () => {
  expect(screen.getByText("١٤")).toBeInTheDocument();
});
