import { toEth, toGreg } from "../utils/ethiopicDateUtils";

import { startOfMonth } from "./startOfMonth";

describe("startOfMonth in Ethiopian calendar", () => {
  test("returns first day of Ethiopian month", () => {
    const date = toGreg({
      Year: 2016,
      Month: 4,
      Day: 15
    }); // Greg: Dec 25, 2023
    const result = startOfMonth(date);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 4,
      Day: 1
    }); // Greg: Dec 11, 2023
  });

  test("maintains year and month", () => {
    const date = toGreg({
      Year: 2016,
      Month: 7,
      Day: 30
    }); // Greg: Apr 7, 2024
    const result = startOfMonth(date);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 7,
      Day: 1
    }); // Greg: Mar 10, 2024
  });

  test("handles Pagume (13th month)", () => {
    const date = toGreg({
      Year: 2015,
      Month: 13,
      Day: 6
    }); // Greg: Sep 11, 2023
    const result = startOfMonth(date);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2015,
      Month: 13,
      Day: 1
    }); // Greg: Sep 6, 2023
  });
});
