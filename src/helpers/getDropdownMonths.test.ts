import * as formatters from "../formatters";

import { getDropdownMonths } from "./getDropdownMonths";

test("returns undefined if `fromMonth` is not defined", () => {
  const result = getDropdownMonths({
    fromMonth: undefined,
    toMonth: new Date(),
    formatters
  });
  expect(result).toBeUndefined();
});

test("returns undefined if `toMonth` is not defined", () => {
  const result = getDropdownMonths({
    fromMonth: new Date(),
    toMonth: undefined,
    formatters
  });
  expect(result).toBeUndefined();
});

test("returns sorted months between `fromMonth` and `toMonth`", () => {
  const fromMonth = new Date(2023, 0, 1);
  const toMonth = new Date(2023, 11, 31);

  const result = getDropdownMonths(
    { fromMonth, toMonth, formatters },
    fromMonth.getFullYear()
  );

  expect(result).toBeDefined();
  expect(result).toHaveLength(12);
  if (!result) throw new Error("Unexpected undefined result");
  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i].value).toBeLessThan(result[i + 1].value);
  }
});

test("formats month labels correctly", () => {
  const fromMonth = new Date(2023, 3, 1);
  const toMonth = new Date(2023, 11, 31);
  const result = getDropdownMonths(
    { fromMonth, toMonth, formatters },
    fromMonth.getFullYear()
  );
  if (!result) throw new Error("Unexpected undefined result");
  expect(result[0]).toEqual({ disabled: false, label: "April", value: 3 });
  expect(result[8]).toEqual({ disabled: false, label: "December", value: 11 });
});

describe("when using a custom formatter", () => {
  test("formats month labels correctly", () => {
    const fromMonth = new Date(2023, 0, 1);
    const toMonth = new Date(2023, 11, 31);
    const result = getDropdownMonths(
      {
        fromMonth,
        toMonth,
        formatters: {
          formatMonthDropdown: (month) => `Month ${month.toString()}`
        }
      },
      fromMonth.getFullYear()
    );
    if (!result) throw new Error("Unexpected undefined result");
    expect(result[0]).toEqual({ disabled: false, label: "Month 0", value: 0 });
  });
});
