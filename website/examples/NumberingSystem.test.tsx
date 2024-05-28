import { screen } from "@testing-library/react";

import { mockDate, grid, renderApp } from "../test-v8";

import { NumberingSystem } from "./NumberingSystem";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<NumberingSystem />);
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
