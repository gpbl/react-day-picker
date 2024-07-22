/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateRange, DayPickerProps } from "react-day-picker/types";

import { act, renderHook } from "@/test/render";

import { dateLib } from "../lib";

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
        dateLib
      )
    );

    expect(result.current.selected).toEqual(initiallySelected);
  });

  test("update the selected range when the initially selected value changes", () => {
    const initiallySelected: DateRange = {
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 5)
    };
    const { result, rerender } = renderHook(
      (props) => useRange(props, dateLib),
      {
        initialProps: {
          mode: "range",
          selected: initiallySelected,
          required: false
        } as DayPickerProps
      }
    );

    rerender({
      mode: "range",
      selected: undefined,
      required: false
    });

    expect(result.current.selected).toEqual(undefined);
  });

  test("update the selected range on select", () => {
    const initiallySelected = {
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 5)
    };
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: initiallySelected, required: false },
        dateLib
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
        dateLib
      )
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as any);
      result.current.select?.(new Date(2023, 6, 10), {}, {} as any);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 10),
      to: undefined
    });
  });

  test("reset range if new range is less than min days", () => {
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: undefined, required: false, min: 5 },
        dateLib
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
        dateLib
      )
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as any);
      result.current.select?.(new Date(2023, 6, 10), {}, {} as any);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 10),
      to: undefined
    });
  });
});
