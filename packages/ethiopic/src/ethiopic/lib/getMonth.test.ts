import { toGregorianDate } from "../utils";

import { getMonth } from "./getMonth";

describe("getMonth", () => {
  test("should return 0-based month number", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1, // Meskerem
      day: 1,
    }); // Greg: Sep 12, 2023

    expect(getMonth(date)).toBe(0);
  });

  test("should handle Pagume (13th month)", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 13, // Pagume
      day: 1,
    }); // Greg: Sep 6, 2024
    expect(getMonth(date)).toBe(12);
  });
});
