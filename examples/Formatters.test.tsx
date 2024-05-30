import React from "react";

import { render, screen } from "@/test/render";

import { Formatters } from "./Formatters";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  render(<Formatters />);
});

test("should display the autumn emoji", () => {
  expect(screen.getByText("🍂 November")).toBeInTheDocument();
});
