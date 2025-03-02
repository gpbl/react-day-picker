import { toEthiopicDate } from "./toEthiopicDate";

describe("toEthiopicDate", () => {
  test("should convert a Gregorian date to an Ethiopic date correctly", () => {
    const testCases = [
      {
        gregorian: new Date(2024, 2, 9), // March 9, 2024
        ethiopic: { year: 2016, month: 6, day: 30 }
      },
      {
        gregorian: new Date(2024, 0, 1), // January 1, 2024
        ethiopic: { year: 2016, month: 4, day: 22 }
      },
      {
        gregorian: new Date(2023, 8, 11), // September 11, 2023
        ethiopic: { year: 2015, month: 13, day: 6 } // Ethiopian New Year
      },
      {
        gregorian: new Date(2024, 8, 10), // September 10, 2024
        ethiopic: { year: 2016, month: 13, day: 5 } // Ethiopian New Year
      }
    ];

    testCases.forEach(({ gregorian, ethiopic }) => {
      expect(toEthiopicDate(gregorian)).toEqual(ethiopic);
    });
  });

  test("should handle leap years correctly", () => {
    const testCases = [
      {
        gregorian: new Date(2024, 1, 29), // February 29, 2024 (Gregorian leap year)
        ethiopic: { year: 2016, month: 6, day: 21 }
      },
      {
        gregorian: new Date(2023, 8, 11), // August 29, 2024
        ethiopic: { year: 2015, month: 13, day: 6 } // Pagume (Ethiopian 13th month)
      }
    ];

    testCases.forEach(({ gregorian, ethiopic }) => {
      expect(toEthiopicDate(gregorian)).toEqual(ethiopic);
    });
  });

  test("should handle dates before the Ethiopic epoch correctly", () => {
    const testCases = [
      {
        gregorian: new Date(1900, 0, 1), // January 1, 1900
        ethiopic: { year: 1892, month: 4, day: 23 }
      },
      {
        gregorian: new Date(1800, 5, 15), // June 15, 1800
        ethiopic: { year: 1792, month: 10, day: 9 }
      }
    ];

    testCases.forEach(({ gregorian, ethiopic }) => {
      expect(toEthiopicDate(gregorian)).toEqual(ethiopic);
    });
  });
});
