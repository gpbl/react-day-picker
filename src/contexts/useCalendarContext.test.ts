import { renderHook } from "@/test/renderHook";

import { useCalendarContext } from "./useCalendarContext";

it("should return the next month", () => {
  const { result } = renderHook(useCalendarContext, {
    month: new Date(2020, 0, 1)
  });
  expect(result.current.nextMonth).toEqual(new Date(2020, 1, 1));
});

it("should return the previous month", () => {
  const { result } = renderHook(useCalendarContext, {
    month: new Date(2020, 0, 1)
  });
  expect(result.current.previousMonth).toEqual(new Date(2019, 11, 1));
});

describe("dropdown", () => {
  it("should return undefined if no fromMonth is provided", () => {
    const { result } = renderHook(useCalendarContext, {
      fromMonth: undefined
    });
    expect(result.current.dropdownOptions.months).toBeUndefined();
  });

  it("should return undefined if no toMonth is provided", () => {
    const { result } = renderHook(useCalendarContext, { toMonth: undefined });
    expect(result.current.dropdownOptions.months).toBeUndefined();
  });

  it("should return an array of months between the fromMonth and toMonth", () => {
    const dayPicker = {
      fromMonth: new Date(2020, 1, 1),
      toMonth: new Date(2023, 2, 1)
    };
    const { result } = renderHook(useCalendarContext, dayPicker);
    const months = result.current.dropdownOptions.months;
    expect(months).toHaveLength(12);
    expect(months?.[0]).toEqual({
      value: 0,
      label: "January",
      disabled: false
    });
    expect(months?.[months.length - 1]).toEqual({
      value: 11,
      label: "December",
      disabled: true
    });
  });
});
