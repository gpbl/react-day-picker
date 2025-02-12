import { toEth, toGreg } from "../utils/ethiopicDateUtils";

import { setYear } from "./setYear";

describe("setYear in Ethiopian calendar", () => {
  test("sets year correctly", () => {
    const date = toGreg({
      Year: 2015,
      Month: 4,
      Day: 15
    }); // Greg: Dec 25, 2022
    const result = setYear(date, 2016);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 4,
      Day: 15
    }); // Greg: Dec 25, 2023
  });

  test("maintains month and day when possible", () => {
    const date = toGreg({
      Year: 2015,
      Month: 7,
      Day: 21
    }); // Greg: Mar 30, 2023
    const result = setYear(date, 2016);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 7,
      Day: 21
    }); // Greg: Mar 29, 2024
  });

  test("adjusts day for leap year changes", () => {
    // From leap year to non-leap year (Pagume 6 -> Pagume 5)
    const leapDate = toGreg({
      Year: 2015,
      Month: 13,
      Day: 6
    }); // Greg: Sep 11, 2023
    const nonLeapResult = setYear(leapDate, 2016);
    const ethNonLeapResult = toEth(nonLeapResult);
    expect(ethNonLeapResult).toEqual({
      Year: 2016,
      Month: 13,
      Day: 5
    }); // Greg: Sep 10, 2024

    // From non-leap year to leap year (maintains Pagume 5)
    const nonLeapDate = toGreg({
      Year: 2016,
      Month: 13,
      Day: 5
    }); // Greg: Sep 10, 2024
    const leapResult = setYear(nonLeapDate, 2015);
    const ethLeapResult = toEth(leapResult);
    expect(ethLeapResult).toEqual({
      Year: 2015,
      Month: 13,
      Day: 5
    }); // Greg: Sep 10, 2023
  });
});
