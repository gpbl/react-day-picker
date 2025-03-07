import { toGregorianDate } from "../utils";

import { startOfDay } from "./startOfDay";

describe("startOfDay", () => {
  test("should return the start of the Ethiopic day for a given date", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
    date.setHours(12, 34, 56, 789); // Add time components

    const result = startOfDay(date);

    // Should preserve the date but reset time to start of day
    expect(result).toEqual(
      toGregorianDate({
        year: 2016,
        month: 1,
        day: 1
      })
    );
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  test("should handle dates with time near midnight", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1
    });
    date.setHours(23, 59, 59, 999);

    const result = startOfDay(date);

    expect(result).toEqual(
      toGregorianDate({
        year: 2016,
        month: 1,
        day: 1
      })
    );
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  test("should preserve the original date components", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 13, // Pagume
      day: 5
    }); // Greg: Sep 10, 2024
    date.setHours(15, 30, 45, 500);

    const result = startOfDay(date);

    expect(result).toEqual(
      toGregorianDate({
        year: 2016,
        month: 13,
        day: 5
      })
    );
  });
});
