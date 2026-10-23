import { act, renderHook } from "@/test/render";

import { defaultDateLib } from "./classes/DateLib";
import { useCalendar } from "./useCalendar";

describe("useCalendar", () => {
  describe("when navigating before the first navigable month", () => {
    const startMonth = new Date(2024, 1, 1);
    const endMonth = new Date(2024, 3, 1);
    let displayedMonth: Date | undefined;
    let handleMonthChange: jest.Mock;

    beforeEach(() => {
      handleMonthChange = jest.fn();
      const { result } = renderHook(() =>
        useCalendar(
          {
            defaultMonth: startMonth,
            startMonth,
            endMonth,
            onMonthChange: handleMonthChange,
          },
          defaultDateLib,
        ),
      );

      act(() => {
        result.current.goToMonth(new Date(2024, 0, 15));
      });

      displayedMonth = result.current.months[0].date;
    });

    test("calls onMonthChange with the first navigable month", () => {
      expect(handleMonthChange).toHaveBeenCalledWith(startMonth);
    });

    test("displays the first navigable month", () => {
      expect(displayedMonth).toEqual(startMonth);
    });
  });

  describe("when navigating after the last navigable month", () => {
    const startMonth = new Date(2024, 1, 1);
    const endMonth = new Date(2024, 3, 1);
    let displayedMonth: Date | undefined;
    let handleMonthChange: jest.Mock;

    beforeEach(() => {
      handleMonthChange = jest.fn();
      const { result } = renderHook(() =>
        useCalendar(
          {
            defaultMonth: startMonth,
            startMonth,
            endMonth,
            onMonthChange: handleMonthChange,
          },
          defaultDateLib,
        ),
      );

      act(() => {
        result.current.goToMonth(new Date(2024, 4, 15));
      });

      displayedMonth = result.current.months[0].date;
    });

    test("calls onMonthChange with the last navigable month", () => {
      expect(handleMonthChange).toHaveBeenCalledWith(endMonth);
    });

    test("displays the last navigable month", () => {
      expect(displayedMonth).toEqual(endMonth);
    });
  });
});
