import { grid, renderApp } from "@/test";

import { Spanish } from "./Spanish";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<Spanish />);
});

test("should localize the caption in Spanish", () => {
  expect(grid()).toHaveAccessibleName("noviembre 2021");
});
