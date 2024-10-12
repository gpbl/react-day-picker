import { act, renderHook } from "@/test/render";

import { DateLib } from "../lib/dateLib";
import { DayPickerProps } from "../types";

import { useSingle } from "./useSingle";

describe("useSingle", () => {
  it("uses the selected value from props when onSelect is provided", () => {
    const mockOnSelect = jest.fn();
    const selectedDate = new Date(2023, 9, 1);
    const props: DayPickerProps = {
      mode: "single",
      selected: selectedDate,
      onSelect: mockOnSelect
    };

    const { result } = renderHook(() => useSingle(props, new DateLib()));

    expect(result.current.selected).toBe(selectedDate);
  });

  it("uses the internally selected value when onSelect is not provided", () => {
    const initialSelectedDate = new Date(2023, 9, 1);
    const props: DayPickerProps = {
      mode: "single",
      selected: initialSelectedDate
    };

    const { result } = renderHook(() => useSingle(props, new DateLib()));

    act(() => {
      result.current.select?.(new Date(2023, 9, 2), {}, {} as React.MouseEvent);
    });

    expect(result.current.selected).toEqual(new Date(2023, 9, 2));
  });
});
