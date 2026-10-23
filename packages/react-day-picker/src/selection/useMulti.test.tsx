import { act, renderHook } from "@/test/render";

import { DateLib, defaultDateLib } from "../classes/DateLib";
import type { DayPickerProps } from "../types";

import { useMulti } from "./useMulti";

describe("useMulti", () => {
  test("uses the selected value from props when onSelect is provided", () => {
    const mockOnSelect = jest.fn();
    const selectedDates = [new Date(2023, 9, 1), new Date(2023, 9, 2)];
    const props: DayPickerProps = {
      mode: "multiple",
      selected: selectedDates,
      onSelect: mockOnSelect,
    };

    const { result } = renderHook(() => useMulti(props, defaultDateLib));

    expect(result.current.selected).toBe(selectedDates);
  });

  test("uses the internally selected value when onSelect is not provided", () => {
    const initialSelectedDates = [new Date(2023, 9, 1), new Date(2023, 9, 2)];
    const props: DayPickerProps = {
      mode: "multiple",
      selected: initialSelectedDates,
    };

    const { result } = renderHook(() => useMulti(props, defaultDateLib));

    act(() => {
      result.current.select?.(new Date(2023, 9, 3), {}, {} as React.MouseEvent);
    });

    expect(result.current.selected).toEqual([
      ...initialSelectedDates,
      new Date(2023, 9, 3),
    ]);
  });

  describe("when DateLib treats the trigger date as already selected", () => {
    const selectedDates = [new Date(2023, 9, 1)];
    let selected: unknown;

    beforeEach(() => {
      const dateLib = new DateLib(undefined, {
        isSameDay: () => true,
      });
      const props: DayPickerProps = {
        mode: "multiple",
        selected: selectedDates,
      };

      const { result } = renderHook(() => useMulti(props, dateLib));

      act(() => {
        result.current.select?.(
          new Date(2023, 9, 2),
          {},
          {} as React.MouseEvent,
        );
      });

      selected = result.current.selected;
    });

    test("removes the selected value", () => {
      expect(selected).toEqual([]);
    });
  });
});
