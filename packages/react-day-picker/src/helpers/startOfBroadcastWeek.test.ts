import { defaultDateLib } from "../classes";

import { startOfBroadcastWeek } from "./startOfBroadcastWeek";

describe("startOfBroadcastWeek", () => {
  test.each([
    [new Date(2023, 0, 1), new Date(2022, 11, 26)], // January, Sunday
    [new Date(2023, 1, 1), new Date(2023, 0, 30)], // February, Wednesday
    [new Date(2023, 2, 1), new Date(2023, 1, 27)], // March, Wednesday
    [new Date(2023, 3, 1), new Date(2023, 2, 27)], // April, Saturday
    [new Date(2023, 4, 1), new Date(2023, 4, 1)], // May, Monday
    [new Date(2023, 5, 1), new Date(2023, 4, 29)], // June, Thursday
    [new Date(2023, 6, 1), new Date(2023, 5, 26)], // July, Saturday
    [new Date(2023, 7, 1), new Date(2023, 6, 31)], // August, Tuesday
    [new Date(2023, 8, 1), new Date(2023, 7, 28)], // September, Friday
    [new Date(2023, 9, 1), new Date(2023, 8, 25)], // October, Sunday
    [new Date(2023, 10, 1), new Date(2023, 9, 30)], // November, Wednesday
    [new Date(2023, 11, 1), new Date(2023, 10, 27)], // December, Friday
  ])("startOfBroadcastWeek(%s) should return %s", (inputDate, expectedDate) => {
    expect(startOfBroadcastWeek(inputDate, defaultDateLib)).toEqual(
      expectedDate,
    );
  });
});
