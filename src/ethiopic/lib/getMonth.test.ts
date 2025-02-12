import { getMonth } from "date-fns";

import { toGreg } from "../utils/ethiopicDateUtils";

describe("getMonth in Ethiopian calendar", () => {
  test("should return 0-based month number", () => {
    const date = toGreg({
      Year: 2016,
      Month: 1, // Meskerem
      Day: 1
    }); // Greg: Sep 12, 2023

    expect(getMonth(date)).toBe(0);
  });

  test("should handle Pagume (13th month)", () => {
    const date = toGreg({
      Year: 2016,
      Month: 13, // Pagume
      Day: 1
    }); // Greg: Sep 6, 2024
    expect(getMonth(date)).toBe(12);
  });
});
