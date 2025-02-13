import { defaultDateLib } from "../classes";

import { endOfBroadcastWeek } from "./endOfBroadcastWeek";
import { getBroadcastWeeksInMonth } from "./getBroadcastWeeksInMonth";
import { startOfBroadcastWeek } from "./startOfBroadcastWeek";

describe("broadcastCalendar", () => {
  test("getBroadcastWeeksInMonth should return correct number of weeks", () => {
    // Test for a month with 5 weeks
    expect(getBroadcastWeeksInMonth(new Date(2023, 0, 1), defaultDateLib)).toBe(
      5
    ); // January 2023
    // Test for a month with 4 weeks
    expect(getBroadcastWeeksInMonth(new Date(2023, 1, 1), defaultDateLib)).toBe(
      4
    ); // February 2023
  });

  test("startOfBroadcastWeek should return correct start date", () => {
    // Test for a month starting on a Monday
    expect(startOfBroadcastWeek(new Date(2023, 0, 1), defaultDateLib)).toEqual(
      new Date(2022, 11, 26)
    ); // December 26 2022
    // Test for a month starting on a Wednesday
    expect(startOfBroadcastWeek(new Date(2020, 0, 1), defaultDateLib)).toEqual(
      new Date(2019, 11, 30)
    ); // December 30 2019
  });

  test("endOfBroadcastWeek should return correct end date", () => {
    const startDate = startOfBroadcastWeek(
      new Date(2023, 0, 1),
      defaultDateLib
    );
    expect(endOfBroadcastWeek(new Date(2023, 0, 1), defaultDateLib)).toEqual(
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 34
      )
    ); // January 2023
  });
});
