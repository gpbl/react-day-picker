import { renderHook } from "@testing-library/react";
import { addMonths } from "date-fns";

import { dateLib } from "../lib/dateLib";

import { useCalendar } from "./useCalendar";

const today = new Date(2020, 0, 1);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

it("should return the next month", () => {
  const { result } = renderHook(() => useCalendar({ today }, dateLib));
  expect(result.current.nextMonth).toEqual(addMonths(today, 1));
});

it("should return the previous month", () => {
  const { result } = renderHook(() =>
    useCalendar(
      {
        month: today
      },
      dateLib
    )
  );
  expect(result.current.previousMonth).toEqual(addMonths(today, -1));
});
