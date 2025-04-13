import React from "react";

import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";

import { PersianEn } from "./PersianEn";

const today = new Date(2025, 2, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render Farvardin 1404", () => {
  render(<PersianEn />);
  expect(grid("Farvardin 1404")).toBeInTheDocument();
});

test("should render 6 rows", () => {
  render(<PersianEn />);
  expect(screen.getAllByRole("row")).toHaveLength(6);
});
