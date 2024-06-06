import * as formatters from "../formatters";

import { getDropdownMonths } from "./getDropdownMonths";

test("returns undefined if `fromDate` is not defined", () => {
  const result = getDropdownMonths({
    fromDate: undefined,
    toDate: new Date(),
    formatters
  });
  expect(result).toBeUndefined();
});

test("returns undefined if `toDate` is not defined", () => {
  const result = getDropdownMonths({
    fromDate: new Date(),
    toDate: undefined,
    formatters
  });
  expect(result).toBeUndefined();
});

test("returns sorted months between `fromDate` and `toDate`", () => {
  const fromDate = new Date(2023, 0, 1);
  const toDate = new Date(2023, 11, 31);

  const result = getDropdownMonths(
    { fromDate, toDate, formatters },
    fromDate.getFullYear()
  );

  expect(result).toBeDefined();
  expect(result).toHaveLength(12);
  if (!result) throw new Error("Unexpected undefined result");
  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i].value).toBeLessThan(result[i + 1].value);
  }
});

test("formats month labels correctly", () => {
  const fromDate = new Date(2023, 3, 1);
  const toDate = new Date(2023, 11, 31);
  const result = getDropdownMonths(
    { fromDate, toDate, formatters },
    fromDate.getFullYear()
  );
  if (!result) throw new Error("Unexpected undefined result");
  expect(result[0]).toEqual({ disabled: false, label: "April", value: 3 });
  expect(result[8]).toEqual({ disabled: false, label: "December", value: 11 });
});

describe("when using a custom formatter", () => {
  test("formats month labels correctly", () => {
    const fromDate = new Date(2023, 0, 1);
    const toDate = new Date(2023, 11, 31);
    const result = getDropdownMonths(
      {
        fromDate,
        toDate,
        formatters: {
          formatMonthDropdown: (month) => `Month ${month.toString()}`
        }
      },
      fromDate.getFullYear()
    );
    if (!result) throw new Error("Unexpected undefined result");
    expect(result[0]).toEqual({ disabled: false, label: "Month 0", value: 0 });
  });
});
