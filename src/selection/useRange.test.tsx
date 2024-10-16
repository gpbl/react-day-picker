/* eslint-disable @typescript-eslint/no-explicit-any */
import { DayPickerProps } from "react-day-picker/types";

import { act, renderHook } from "@/test/render";

import { DateLib } from "../lib/dateLib";

import { useRange } from "./useRange";

describe("useRange", () => {
  test("initialize with initiallySelected date range", () => {
    const initiallySelected = {
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 5)
    };
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: initiallySelected, required: false },
        new DateLib()
      )
    );

    expect(result.current.selected).toEqual(initiallySelected);
  });

  test("update the selected range on select", () => {
    const initiallySelected = {
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 5)
    };
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: initiallySelected, required: false },
        new DateLib()
      )
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 10), {}, {} as any);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 10)
    });
  });

  test("reset range if new range exceeds max days", () => {
    const { result } = renderHook(() =>
      useRange(
        {
          mode: "range",
          selected: undefined,
          required: false,
          max: 5
        },
        new DateLib()
      )
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as any);
      result.current.select?.(new Date(2023, 6, 10), {}, {} as any);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 10),
      to: new Date(2023, 6, 10)
    });
  });

  test("reset range if new range is less than min days", () => {
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: undefined, required: false, min: 5 },
        new DateLib()
      )
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as any);
      result.current.select?.(new Date(2023, 6, 3), {}, {} as any);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 3),
      to: undefined
    });
  });

  test("exclude disabled dates when selecting range", () => {
    const disabled = [{ from: new Date(2023, 6, 5), to: new Date(2023, 6, 7) }];
    const { result } = renderHook(() =>
      useRange(
        {
          mode: "range",
          selected: undefined,
          required: false,
          excludeDisabled: true,
          disabled
        },
        new DateLib()
      )
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as any);
      result.current.select?.(new Date(2023, 6, 10), {}, {} as any);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 10),
      to: new Date(2023, 6, 10)
    });
  });
  it("uses the selected value from props when onSelect is provided", () => {
    const mockOnSelect = jest.fn();
    const selectedRange = {
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 5)
    };
    const props: DayPickerProps = {
      mode: "range",

      selected: selectedRange,
      onSelect: mockOnSelect
    };

    const { result } = renderHook(() => useRange(props, new DateLib()));

    expect(result.current.selected).toBe(selectedRange);
  });

  it("uses the internally selected value when onSelect is not provided", () => {
    const initialSelectedRange = {
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 5)
    };
    const props: DayPickerProps = {
      mode: "range",
      selected: initialSelectedRange
    };

    const { result } = renderHook(() => useRange(props, new DateLib()));

    act(() => {
      result.current.select?.(new Date(2023, 9, 6), {}, {} as React.MouseEvent);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 6)
    });
  });
});
