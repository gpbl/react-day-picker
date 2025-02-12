import { toGreg } from "../utils/ethiopicDateUtils";

import { differenceInCalendarMonths } from "./differenceInCalendarMonths";

describe("differenceInCalendarMonths in Ethiopian calendar", () => {
  test("should calculate difference in months within the same Ethiopian year", () => {
    const date1 = toGreg({
      Year: 2016,
      Month: 4,
      Day: 1
    }); // Greg: Dec 11, 2023
    const date2 = toGreg({
      Year: 2016,
      Month: 7,
      Day: 1
    }); // Greg: Mar 10, 2024
    expect(differenceInCalendarMonths(date2, date1)).toBe(3);
  });

  test("should calculate difference in months across Ethiopian years", () => {
    const date1 = toGreg({
      Year: 2015,
      Month: 11,
      Day: 1
    }); // Greg: Jul 8, 2023
    const date2 = toGreg({
      Year: 2016,
      Month: 2,
      Day: 1
    }); // Greg: Oct 12, 2023
    expect(differenceInCalendarMonths(date2, date1)).toBe(4);
  });

  test("should return zero for same Ethiopian date", () => {
    const date = toGreg({
      Year: 2016,
      Month: 4,
      Day: 15
    }); // Greg: Dec 25, 2023
    expect(differenceInCalendarMonths(date, date)).toBe(0);
  });
});
