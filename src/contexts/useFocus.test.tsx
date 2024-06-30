import { renderHook } from "@testing-library/react";

import { useFocus } from "./useFocus";

const month = new Date(2020, 0, 1);
const today = new Date(2020, 0, 14);

describe("autoFocusTarget", () => {
  describe("when not in interactive", () => {
    test("the auto focus target is undefined", () => {
      const { result } = renderHook(() => useFocus({ month, today }));
      expect(result.current.autoFocusTarget).toBeUndefined();
    });
  });
  describe("when in selection mode", () => {
    test("the autofocus target should be today", () => {
      const { result } = renderHook(useFocus, {
        month,
        today,
        mode: "single"
      });
      expect(result.current.autoFocusTarget?.date).toEqual(
        new Date(2020, 0, 14)
      );
    });
    describe("if today is disabled", () => {
      test("the autofocus target should be the first focusable day (the 1st of month)", () => {
        const { result } = renderHook(useFocus, {
          month,
          today,
          mode: "single",
          disabled: [today]
        });
        expect(result.current.autoFocusTarget?.date).toEqual(month);
      });
    });
  });
});
