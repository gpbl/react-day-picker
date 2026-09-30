import { act, renderHook } from "@/test/render";

import { DateLib, defaultDateLib } from "../classes/DateLib";
import type { DayPickerProps } from "../types";

import { useSingle } from "./useSingle";

describe("useSingle", () => {
  test("uses the selected value from props when onSelect is provided", () => {
    const mockOnSelect = jest.fn();
    const selectedDate = new Date(2023, 9, 1);
    const props: DayPickerProps = {
      mode: "single",
      selected: selectedDate,
      onSelect: mockOnSelect,
    };

    const { result } = renderHook(() => useSingle(props, defaultDateLib));

    expect(result.current.selected).toBe(selectedDate);
  });

  test("uses the internally selected value when onSelect is not provided", () => {
    const initialSelectedDate = new Date(2023, 9, 1);
    const props: DayPickerProps = {
      mode: "single",
      selected: initialSelectedDate,
    };

    const { result } = renderHook(() => useSingle(props, defaultDateLib));

    act(() => {
      result.current.select?.(new Date(2023, 9, 2), {}, {} as React.MouseEvent);
    });

    expect(result.current.selected).toEqual(new Date(2023, 9, 2));
  });

  describe("when DateLib treats the trigger date as the selected day", () => {
    const selectedDate = new Date(2023, 9, 1);
    let selected: unknown;

    beforeEach(() => {
      const dateLib = new DateLib(undefined, {
        isSameDay: () => true,
      });
      const props: DayPickerProps = {
        mode: "single",
        selected: selectedDate,
      };

      const { result } = renderHook(() => useSingle(props, dateLib));

      act(() => {
        result.current.select?.(
          new Date(2023, 9, 2),
          {},
          {} as React.MouseEvent,
        );
      });

      selected = result.current.selected;
    });

    test("clears the selected value", () => {
      expect(selected).toBeUndefined();
    });
  });
});
