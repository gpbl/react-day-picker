import { defaultDateLib } from "react-day-picker/classes";

import { endOfBroadcastWeek } from "./endOfBroadcastWeek";

const testCases = [
  [new Date(2023, 0, 1), new Date(2023, 0, 29)], // January
  [new Date(2023, 1, 1), new Date(2023, 1, 26)], // February
  [new Date(2023, 2, 1), new Date(2023, 2, 26)], // March
  [new Date(2023, 3, 1), new Date(2023, 3, 30)], // April
  [new Date(2023, 4, 1), new Date(2023, 4, 28)], // May
  [new Date(2023, 5, 1), new Date(2023, 5, 25)], // June
  [new Date(2023, 6, 1), new Date(2023, 6, 30)], // July
  [new Date(2023, 7, 1), new Date(2023, 7, 27)], // August
  [new Date(2023, 8, 1), new Date(2023, 8, 24)], // September
  [new Date(2023, 9, 1), new Date(2023, 9, 29)], // October
  [new Date(2023, 10, 1), new Date(2023, 10, 26)], // November
  [new Date(2023, 11, 1), new Date(2023, 11, 31)] // December
];

describe("endOfBroadcastWeek", () => {
  test.each(testCases)("%s should return %s", (date, expected) => {
    const result = endOfBroadcastWeek(date, defaultDateLib);
    expect(result).toEqual(expected);
  });
});
