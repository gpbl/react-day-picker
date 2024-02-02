import { renderHook } from "@/test/renderHook";

import { useCalendar } from "./CalendarContext";

it("should return the next month", () => {
  const { result } = renderHook(useCalendar, {
    month: new Date(2020, 0, 1),
  });
  expect(result.current.nextMonth).toEqual(new Date(2020, 1, 1));
});

it("should return the previous month", () => {
  const { result } = renderHook(useCalendar, {
    month: new Date(2020, 0, 1),
  });
  expect(result.current.previousMonth).toEqual(new Date(2019, 11, 1));
});

describe("dropdown", () => {
  it("should return undefined if no fromDate is provided", () => {
    const { result } = renderHook(useCalendar, {
      fromDate: undefined,
    });
    expect(result.current.dropdown.months).toBeUndefined();
  });

  it("should return undefined if no toDate is provided", () => {
    const { result } = renderHook(useCalendar, { toDate: undefined });
    expect(result.current.dropdown.months).toBeUndefined();
  });

  it("should return an array of months between the fromDate and toDate", () => {
    const dayPicker = {
      fromDate: new Date(2020, 1, 1),
      toDate: new Date(2023, 2, 1),
    };
    const { result } = renderHook(useCalendar, dayPicker);
    const months = result.current.dropdown.months;
    expect(months).toHaveLength(12);
    expect(months?.[0]).toEqual([0, "January"]);
    expect(months?.[months.length - 1]).toEqual([11, "December"]);
  });
});
