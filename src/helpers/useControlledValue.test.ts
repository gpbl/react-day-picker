import { act, renderHook } from "@testing-library/react";

import { useControlledValue } from "./useControlledValue.js";

describe("when the value is controlled", () => {
  const defaultValue: string | undefined = "foo"; // not controlled
  const controlledValue: string | undefined = "bar"; // now controlled
  test("should return the controlled value", () => {
    const { result } = renderHook(() =>
      useControlledValue<string>(defaultValue, controlledValue)
    );
    expect(result.current[0]).toBe(controlledValue);
  });
  describe("when setting a new value", () => {
    const newValue = "taz";
    test("should return the controlled value instead", async () => {
      const { result } = renderHook(() =>
        useControlledValue<string>(defaultValue, controlledValue)
      );
      act(() => result.current[1](newValue));
      expect(result.current[0]).toBe(controlledValue);
    });
  });
});

describe("when the value is not controlled", () => {
  const defaultValue = "foo";
  const controlledValue = undefined;
  test("should return the value", () => {
    const { result } = renderHook(() =>
      useControlledValue<string>(defaultValue, controlledValue)
    );
    expect(result.current[0]).toBe(defaultValue);
  });
  describe("when setting a new value", () => {
    const newValue = "bar";
    test("should return the new value", async () => {
      const { result } = renderHook(() =>
        useControlledValue<string>(defaultValue, controlledValue)
      );
      act(() => result.current[1](newValue));
      expect(result.current[0]).toBe(newValue);
    });
  });
});
