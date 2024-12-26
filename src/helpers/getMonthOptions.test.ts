import { defaultDateLib } from "../classes/DateLib";
import * as formatters from "../formatters/index.js";

import { getMonthOptions } from "./getMonthOptions";

describe("return correct dropdown options", () => {
  test("when navStart and navEnd are defined", () => {
    const displayMonth = new Date(2022, 0, 1);
    const startMonth = new Date(2022, 0, 1);
    const endMonth = new Date(2022, 11, 31);
    const result = getMonthOptions(
      displayMonth,
      startMonth,
      endMonth,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: false },
      { value: 1, label: "February", disabled: false },
      { value: 2, label: "March", disabled: false },
      { value: 3, label: "April", disabled: false },
      { value: 4, label: "May", disabled: false },
      { value: 5, label: "June", disabled: false },
      { value: 6, label: "July", disabled: false },
      { value: 7, label: "August", disabled: false },
      { value: 8, label: "September", disabled: false },
      { value: 9, label: "October", disabled: false },
      { value: 10, label: "November", disabled: false },
      { value: 11, label: "December", disabled: false }
    ]);
  });

  test("when navStart and navEnd are undefined", () => {
    const displayMonth = new Date(2022, 0, 1);
    const result = getMonthOptions(
      displayMonth,
      undefined,
      undefined,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: false },
      { value: 1, label: "February", disabled: false },
      { value: 2, label: "March", disabled: false },
      { value: 3, label: "April", disabled: false },
      { value: 4, label: "May", disabled: false },
      { value: 5, label: "June", disabled: false },
      { value: 6, label: "July", disabled: false },
      { value: 7, label: "August", disabled: false },
      { value: 8, label: "September", disabled: false },
      { value: 9, label: "October", disabled: false },
      { value: 10, label: "November", disabled: false },
      { value: 11, label: "December", disabled: false }
    ]);
  });

  test("when less than 12 months", () => {
    const displayMonth = new Date(2024, 9);
    const startMonth = new Date(2024, 9);
    const endMonth = new Date(2025, 5);
    const result = getMonthOptions(
      displayMonth,
      startMonth,
      endMonth,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: true },
      { value: 1, label: "February", disabled: true },
      { value: 2, label: "March", disabled: true },
      { value: 3, label: "April", disabled: true },
      { value: 4, label: "May", disabled: true },
      { value: 5, label: "June", disabled: true },
      { value: 6, label: "July", disabled: true },
      { value: 7, label: "August", disabled: true },
      { value: 8, label: "September", disabled: true },
      { value: 9, label: "October", disabled: false },
      { value: 10, label: "November", disabled: false },
      { value: 11, label: "December", disabled: false }
    ]);
  });

  test("return undefined when navStart is undefined", () => {
    const displayMonth = new Date(2022, 0, 1);
    const endMonth = new Date(2022, 6, 31);
    const result = getMonthOptions(
      displayMonth,
      undefined,
      endMonth,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: false },
      { value: 1, label: "February", disabled: false },
      { value: 2, label: "March", disabled: false },
      { value: 3, label: "April", disabled: false },
      { value: 4, label: "May", disabled: false },
      { value: 5, label: "June", disabled: false },
      { value: 6, label: "July", disabled: false },
      { value: 7, label: "August", disabled: true },
      { value: 8, label: "September", disabled: true },
      { value: 9, label: "October", disabled: true },
      { value: 10, label: "November", disabled: true },
      { value: 11, label: "December", disabled: true }
    ]);
  });

  test("return undefined when navEnd is undefined", () => {
    const displayMonth = new Date(2022, 6, 1);
    const startMonth = new Date(2022, 3, 1);
    const result = getMonthOptions(
      displayMonth,
      startMonth,
      undefined,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: true },
      { value: 1, label: "February", disabled: true },
      { value: 2, label: "March", disabled: true },
      { value: 3, label: "April", disabled: false },
      { value: 4, label: "May", disabled: false },
      { value: 5, label: "June", disabled: false },
      { value: 6, label: "July", disabled: false },
      { value: 7, label: "August", disabled: false },
      { value: 8, label: "September", disabled: false },
      { value: 9, label: "October", disabled: false },
      { value: 10, label: "November", disabled: false },
      { value: 11, label: "December", disabled: false }
    ]);
  });

  test("when navStart is after displayMonth", () => {
    const displayMonth = new Date(2022, 0, 1);
    const startMonth = new Date(2022, 2, 1);
    const endMonth = new Date(2022, 11, 31);
    const result = getMonthOptions(
      displayMonth,
      startMonth,
      endMonth,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: true },
      { value: 1, label: "February", disabled: true },
      { value: 2, label: "March", disabled: false },
      { value: 3, label: "April", disabled: false },
      { value: 4, label: "May", disabled: false },
      { value: 5, label: "June", disabled: false },
      { value: 6, label: "July", disabled: false },
      { value: 7, label: "August", disabled: false },
      { value: 8, label: "September", disabled: false },
      { value: 9, label: "October", disabled: false },
      { value: 10, label: "November", disabled: false },
      { value: 11, label: "December", disabled: false }
    ]);
  });

  test("when navEnd is before displayMonth", () => {
    const displayMonth = new Date(2022, 6, 1);
    const startMonth = new Date(2022, 0, 1);
    const endMonth = new Date(2022, 5, 30);
    const result = getMonthOptions(
      displayMonth,
      startMonth,
      endMonth,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: false },
      { value: 1, label: "February", disabled: false },
      { value: 2, label: "March", disabled: false },
      { value: 3, label: "April", disabled: false },
      { value: 4, label: "May", disabled: false },
      { value: 5, label: "June", disabled: false },
      { value: 6, label: "July", disabled: true },
      { value: 7, label: "August", disabled: true },
      { value: 8, label: "September", disabled: true },
      { value: 9, label: "October", disabled: true },
      { value: 10, label: "November", disabled: true },
      { value: 11, label: "December", disabled: true }
    ]);
  });

  test("when navStart and navEnd are within the same year", () => {
    const displayMonth = new Date(2022, 0, 1);
    const startMonth = new Date(2022, 2, 1);
    const endMonth = new Date(2022, 8, 30);
    const result = getMonthOptions(
      displayMonth,
      startMonth,
      endMonth,
      formatters,
      defaultDateLib
    );

    expect(result).toEqual([
      { value: 0, label: "January", disabled: true },
      { value: 1, label: "February", disabled: true },
      { value: 2, label: "March", disabled: false },
      { value: 3, label: "April", disabled: false },
      { value: 4, label: "May", disabled: false },
      { value: 5, label: "June", disabled: false },
      { value: 6, label: "July", disabled: false },
      { value: 7, label: "August", disabled: false },
      { value: 8, label: "September", disabled: false },
      { value: 9, label: "October", disabled: true },
      { value: 10, label: "November", disabled: true },
      { value: 11, label: "December", disabled: true }
    ]);
  });
});
