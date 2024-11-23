import {
  getBroadcastWeeksInMonth,
  startOfBroadcastWeek,
  endOfBroadcastWeek
} from "./broadcastCalendar";

describe("Broadcast Date Functions", () => {
  test("getBroadcastWeeksInMonth should return correct number of weeks", () => {
    // Test for a month with 5 weeks
    expect(getBroadcastWeeksInMonth(new Date(2023, 0, 1))).toBe(5); // January 2023
    // Test for a month with 4 weeks
    expect(getBroadcastWeeksInMonth(new Date(2023, 1, 1))).toBe(4); // February 2023
  });

  test("getBroadcastStartDate should return correct start date", () => {
    // Test for a month starting on a Monday
    expect(startOfBroadcastWeek(new Date(2023, 0, 1))).toEqual(
      new Date(2022, 11, 26)
    ); // December 26 2022
    // Test for a month starting on a Wednesday
    expect(startOfBroadcastWeek(new Date(2020, 0, 1))).toEqual(
      new Date(2019, 11, 30)
    ); // December 30 2019
  });

  test("getBroadcastEndDate should return correct end date", () => {
    const startDate = startOfBroadcastWeek(new Date(2023, 0, 1));
    expect(endOfBroadcastWeek(new Date(2023, 0, 1))).toEqual(
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 34
      )
    ); // January 2023
  });
});
