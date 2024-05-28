import { mockDate, grid, renderApp } from "../test-v8";

import { DefaultMonth } from "./DefaultMonth";

const today = new Date(2022, 5, 10);
mockDate(today);

test("should display September 1979", () => {
  renderApp(<DefaultMonth />);
  expect(grid("September 1979")).toBeInTheDocument();
});
