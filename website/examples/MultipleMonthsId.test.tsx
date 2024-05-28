import { mockDate, grid, renderApp } from "../test-v8";

import { MultipleMonthsId } from "./MultipleMonthsId";

const today = new Date(2021, 10, 25);
mockDate(today);

test("the table ids should include the display index", () => {
  renderApp(<MultipleMonthsId />);
  expect(grid("November 2021")).toHaveAttribute(
    "id",
    "calendar_example-grid-0"
  );
  expect(grid("December 2021")).toHaveAttribute(
    "id",
    "calendar_example-grid-1"
  );
});
