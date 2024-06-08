import * as formatters from "../formatters";

import { getDropdownMonths } from "./getDropdownMonths";

test("returns undefined if `startMonth` is not defined", () => {
  const result = getDropdownMonths({
    startMonth: undefined,
    endMonth: new Date(),
    formatters
  });
  expect(result).toBeUndefined();
});

test("returns undefined if `endMonth` is not defined", () => {
  const result = getDropdownMonths({
    startMonth: new Date(),
    endMonth: undefined,
    formatters
  });
  expect(result).toBeUndefined();
});

test("returns sorted months between `startMonth` and `endMonth`", () => {
  const startMonth = new Date(2023, 0, 1);
  const endMonth = new Date(2023, 11, 31);

  const result = getDropdownMonths(
    { startMonth, endMonth, formatters },
    startMonth.getFullYear()
  );

  expect(result).toBeDefined();
  expect(result).toHaveLength(12);
  if (!result) throw new Error("Unexpected undefined result");
  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i].value).toBeLessThan(result[i + 1].value);
  }
});

test("formats month labels correctly", () => {
  const startMonth = new Date(2023, 3, 1);
  const endMonth = new Date(2023, 11, 31);
  const result = getDropdownMonths(
    { startMonth, endMonth, formatters },
    startMonth.getFullYear()
  );
  if (!result) throw new Error("Unexpected undefined result");
  expect(result[0]).toEqual({ disabled: false, label: "April", value: 3 });
  expect(result[8]).toEqual({ disabled: false, label: "December", value: 11 });
});

describe("when using a custom formatter", () => {
  test("formats month labels correctly", () => {
    const startMonth = new Date(2023, 0, 1);
    const endMonth = new Date(2023, 11, 31);
    const result = getDropdownMonths(
      {
        startMonth,
        endMonth,
        formatters: {
          formatMonthDropdown: (month) => `Month ${month.toString()}`
        }
      },
      startMonth.getFullYear()
    );
    if (!result) throw new Error("Unexpected undefined result");
    expect(result[0]).toEqual({ disabled: false, label: "Month 0", value: 0 });
  });
});
