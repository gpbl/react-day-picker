import { toHebrewDate } from "../utils/dateConversion.js";
import { eachMonthOfInterval } from "./eachMonthOfInterval.js";

describe("hebrew eachMonthOfInterval", () => {
  test("lists Hebrew months in interval", () => {
    const months = eachMonthOfInterval({
      start: new Date(2024, 8, 1),
      end: new Date(2024, 11, 15),
    });
    const monthIndices = months.map((date) => toHebrewDate(date).monthIndex);
    expect(monthIndices).toEqual([11, 12, 0, 1, 2]);
    months.forEach((date) => {
      expect(toHebrewDate(date).day).toBe(1);
    });
  });
});
