import { toGreg } from "../utils/ethiopicDateUtils";

import { getYear } from "./getYear";

describe("getYear in Ethiopian calendar", () => {
  test("Should return correct Ethiopian year", () => {
    const date = toGreg({
      Year: 2016,
      Month: 4,
      Day: 15
    }); // Greg: Dec 25, 2023
    expect(getYear(date)).toBe(2016);
  });

  test("Should handle Ethiopian year boundary correctly", () => {
    // Last day of Ethiopian year 2015
    const lastDay2015 = toGreg({
      Year: 2015,
      Month: 13,
      Day: 6
    }); // Greg: Sep 11, 2023
    expect(getYear(lastDay2015)).toBe(2015);

    // First day of Ethiopian year 2016
    const firstDay2016 = toGreg({
      Year: 2016,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2023
    expect(getYear(firstDay2016)).toBe(2016);
  });
});
