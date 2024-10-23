import { defaultDateLib } from "../classes/DateLib";

import { getDisplayMonths } from "./getDisplayMonths";

describe("getDisplayMonths", () => {
  it("should return the months to display in the calendar", () => {
    const firstMonth = new Date(2020, 0);
    const expectedResult = [new Date(2020, 0)];
    const result = getDisplayMonths(firstMonth, undefined, {}, defaultDateLib);
    expect(result).toEqual(expectedResult);
  });

  it("should return the months to display in the calendar when the number of months is greater than 1", () => {
    const firstMonth = new Date(2020, 0);
    const expectedResult = [
      new Date(2020, 0),
      new Date(2020, 1),
      new Date(2020, 2)
    ];
    const result = getDisplayMonths(
      firstMonth,
      undefined,
      {
        numberOfMonths: 3
      },
      defaultDateLib
    );
    expect(result).toEqual(expectedResult);
  });

  it("should return the months to display in the calendar when passing a max date", () => {
    const firstMonth = new Date(2020, 0);
    const expectedResult = [new Date(2020, 0), new Date(2020, 1)];
    const result = getDisplayMonths(
      firstMonth,
      new Date(2020, 1, 10),
      {
        numberOfMonths: 3
      },
      defaultDateLib
    );
    expect(result).toEqual(expectedResult);
  });
});
