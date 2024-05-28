import { mockDate, grid, renderApp } from "../test-v8";

import { Spanish } from "./Spanish";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<Spanish />);
});

test("should localize the caption in Spanish", () => {
  expect(grid()).toHaveAccessibleName("noviembre 2021");
});
