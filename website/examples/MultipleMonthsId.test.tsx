import { grid, renderApp } from "react-day-picker/test";

import { MultipleMonthsId } from "./MultipleMonthsId";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

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
