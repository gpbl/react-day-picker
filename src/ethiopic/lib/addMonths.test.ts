import { toEth, toGreg } from "../utils/ethiopicDateUtils";

import { addMonths } from "./addMonths";

describe("addMonths in Ethiopian calendar", () => {
  test("should add positive months correctly in Ethiopian calendar", () => {
    // Test case 1: Adding within same year
    const date1 = toGreg({
      Year: 2016,
      Month: 4,
      Day: 22
    }); // Greg: Jan 1, 2024
    const result1 = addMonths(date1, 2);
    const ethResult1 = toEth(result1);
    expect(ethResult1).toEqual({
      Year: 2016,
      Month: 6, // Yekatit(6)
      Day: 22
    }); // Greg: Mar 1, 2024

    // Test case 2: Adding across gregorian year boundary
    const date2 = toGreg({
      Year: 2016,
      Month: 5,
      Day: 22
    }); // Greg: Feb 1, 2024
    const result2 = addMonths(date2, 3);
    const ethResult2 = toEth(result2);
    expect(ethResult2).toEqual({
      Year: 2016,
      Month: 8, // Meyazia(8)
      Day: 22
    }); // Greg: Apr 30, 2024
  });

  test("should add negative months correctly in Ethiopian calendar", () => {
    // Test case 1: Subtracting within same year
    const date1 = toGreg({
      Year: 2016,
      Month: 4,
      Day: 21
    }); // Greg: Dec 31, 2023
    const result1 = addMonths(date1, -2);
    const ethResult1 = toEth(result1);
    expect(ethResult1).toEqual({
      Year: 2016,
      Month: 2, // Tikimt(2)
      Day: 21
    }); // Greg: Oct 31, 2023

    // Test case 2: Subtracting across gregorian year boundary
    const date2 = toGreg({
      Year: 2016,
      Month: 4,
      Day: 21
    }); // Greg: Dec 31, 2023
    const result2 = addMonths(date2, -3);
    const ethResult2 = toEth(result2);
    expect(ethResult2).toEqual({
      Year: 2016,
      Month: 1, // Meskerem(1)
      Day: 21
    }); // Greg: Oct 1, 2023
  });

  test("should handle day overflow in the 13th month Ethiopian calendar", () => {
    // Test case 2: Day overflow in Pagume (13th month)
    const date2 = toGreg({
      Year: 2016,
      Month: 12,
      Day: 25
    }); // Greg: Aug 31, 2024
    const result2 = addMonths(date2, 1);
    const ethResult2 = toEth(result2);
    expect(ethResult2).toEqual({
      Year: 2015,
      Month: 13, // Pagume
      Day: 5 // Adjusted from 26 to 5 (Pagume has only 5 or 6 days)
    }); // Greg: Sep 5, 2024
  });
});
