import React from "react";

import { previousButton } from "@/test/elements";
import { render, screen } from "@/test/render";
import { user } from "@/test/user";

import { MultipleMonths } from "./MultipleMonths";

const today = new Date(2023, 11, 3);

beforeAll(() => {
  jest.setSystemTime(today);
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  render(<MultipleMonths />);
});

test("should render 2 grids", () => {
  expect(screen.getAllByRole("grid")).toHaveLength(2);
});

test("the first grid should be November", () => {
  const grids = screen.getAllByRole("grid");
  expect(grids[0]).toHaveAccessibleName("December 2023");
});

test("the second grid should be December", () => {
  const grids = screen.getAllByRole("grid");
  expect(grids[1]).toHaveAccessibleName("January 2024");
});

describe("when the previous month button is clicked", () => {
  beforeEach(() => user.click(previousButton()));
  test("the first month should be October", () => {
    const grids = screen.getAllByRole("grid");
    expect(grids[0]).toHaveAccessibleName("November 2023");
  });
  test("the first month should be November", () => {
    const grids = screen.getAllByRole("grid");
    expect(grids[1]).toHaveAccessibleName("December 2023");
  });
});
