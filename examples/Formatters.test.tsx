import React from "react";

import { render, screen } from "@/test/render";

import { Formatters } from "./Formatters";

const today = new Date(2021, 10, 25);

beforeAll(() => {
  jest.setSystemTime(today);
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  render(<Formatters />);
});

test("should display the autumn emoji", () => {
  expect(screen.getByText("🍂 November")).toBeInTheDocument();
});
