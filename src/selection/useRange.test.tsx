import { act, renderHook } from "@/test/render";

import { defaultDateLib } from "../classes/DateLib";
import type { DayPickerProps } from "../types";

import { useRange } from "./useRange";

describe("useRange", () => {
  test("initialize with initiallySelected date range", () => {
    const initiallySelected = {
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 5),
    };
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: initiallySelected, required: false },
        defaultDateLib,
      ),
    );

    expect(result.current.selected).toEqual(initiallySelected);
  });

  test("update the selected range on select", () => {
    const initiallySelected = {
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 5),
    };
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: initiallySelected, required: false },
        defaultDateLib,
      ),
    );

    act(() => {
      result.current.select?.(
        new Date(2023, 6, 10),
        {},
        {} as React.MouseEvent,
      );
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 1),
      to: new Date(2023, 6, 10),
    });
  });

  test("reset range if new range exceeds max days", () => {
    const { result } = renderHook(() =>
      useRange(
        {
          mode: "range",
          selected: undefined,
          required: false,
          max: 5,
        },
        defaultDateLib,
      ),
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as React.MouseEvent);
      result.current.select?.(
        new Date(2023, 6, 10),
        {},
        {} as React.MouseEvent,
      );
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 10),
      to: new Date(2023, 6, 10),
    });
  });

  test("reset range if new range is less than min days", () => {
    const { result } = renderHook(() =>
      useRange(
        { mode: "range", selected: undefined, required: false, min: 5 },
        defaultDateLib,
      ),
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as React.MouseEvent);
      result.current.select?.(new Date(2023, 6, 3), {}, {} as React.MouseEvent);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 3),
      to: undefined,
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
          disabled,
        },
        defaultDateLib,
      ),
    );

    act(() => {
      result.current.select?.(new Date(2023, 6, 1), {}, {} as React.MouseEvent);
      result.current.select?.(
        new Date(2023, 6, 10),
        {},
        {} as React.MouseEvent,
      );
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 6, 10),
      to: new Date(2023, 6, 10),
    });
  });

  describe("resetOnSelect", () => {
    test("sets only from when selected is undefined", () => {
      const date = new Date(2023, 6, 15);
      const { result } = renderHook(() =>
        useRange(
          {
            mode: "range",
            selected: undefined,
            required: false,
            resetOnSelect: true,
          },
          defaultDateLib,
        ),
      );

      act(() => {
        result.current.select?.(date, {}, {} as React.MouseEvent);
      });

      expect(result.current.selected).toEqual({
        from: date,
        to: undefined,
      });
    });

    test("reset range when full range is selected", () => {
      const fullRange = {
        from: new Date(2023, 6, 1),
        to: new Date(2023, 6, 5),
      };
      const anotherDate = new Date(2023, 6, 15);
      const { result } = renderHook(() =>
        useRange(
          {
            mode: "range",
            selected: fullRange,
            required: false,
            resetOnSelect: true,
          },
          defaultDateLib,
        ),
      );

      act(() => {
        result.current.select?.(anotherDate, {}, {} as React.MouseEvent);
      });

      expect(result.current.selected).toEqual({
        from: anotherDate,
        to: undefined,
      });
    });
  });

  it("uses the selected value from props when onSelect is provided", () => {
    const mockOnSelect = jest.fn();
    const selectedRange = {
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 5),
    };
    const props: DayPickerProps = {
      mode: "range",

      selected: selectedRange,
      onSelect: mockOnSelect,
    };

    const { result } = renderHook(() => useRange(props, defaultDateLib));

    expect(result.current.selected).toBe(selectedRange);
  });

  it("uses the internally selected value when onSelect is not provided", () => {
    const initialSelectedRange = {
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 5),
    };
    const props: DayPickerProps = {
      mode: "range",
      selected: initialSelectedRange,
    };

    const { result } = renderHook(() => useRange(props, defaultDateLib));

    act(() => {
      result.current.select?.(new Date(2023, 9, 6), {}, {} as React.MouseEvent);
    });

    expect(result.current.selected).toEqual({
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 6),
    });
  });
});
