import { act, renderHook } from "@/test/render";

import { dateLib } from "../lib/dateLib";
import { DayPickerProps } from "../types";

import { useMulti } from "./useMulti";

describe("useMulti", () => {
  it("uses the selected value from props when onSelect is provided", () => {
    const mockOnSelect = jest.fn();
    const selectedDates = [new Date(2023, 9, 1), new Date(2023, 9, 2)];
    const props: DayPickerProps = {
      mode: "multiple",
      selected: selectedDates,
      onSelect: mockOnSelect
    };

    const { result } = renderHook(() => useMulti(props, dateLib));

    expect(result.current.selected).toBe(selectedDates);
  });

  it("uses the internally selected value when onSelect is not provided", () => {
    const initialSelectedDates = [new Date(2023, 9, 1), new Date(2023, 9, 2)];
    const props: DayPickerProps = {
      mode: "multiple",
      selected: initialSelectedDates
    };

    const { result } = renderHook(() => useMulti(props, dateLib));

    act(() => {
      result.current.select?.(new Date(2023, 9, 3), {}, {} as React.MouseEvent);
    });

    expect(result.current.selected).toEqual([
      ...initialSelectedDates,
      new Date(2023, 9, 3)
    ]);
  });
});
