import { toEth, toGreg } from "../utils/ethiopicDateUtils";

import { endOfYear } from "./endOfYear";

describe("endOfYear in Ethiopian calendar", () => {
  test("Should return last day of Ethiopian year for non-leap year", () => {
    const date = toGreg({
      Year: 2016,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2023
    const result = endOfYear(date);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 13, // Pagume
      Day: 5
    }); // Greg: Sep 10, 2024
  });

  test("Should return last day of Ethiopian year for leap year", () => {
    const date = toGreg({
      Year: 2015,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2022
    const result = endOfYear(date);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2015,
      Month: 13, // Pagume
      Day: 6
    }); // Greg: Sep 11, 2023
  });
});
