import { renderHook } from "@testing-library/react";
import { DayFlag } from "react-day-picker/UI";
import { dateLib } from "react-day-picker/lib";

import { useFocus } from "./useFocus";
import { UseModifiers } from "./useModifiers";

const month = new Date(2020, 0, 1);
const today = new Date(2020, 0, 14);

const useModifiers: UseModifiers = {
  dayFlags: {
    [DayFlag.disabled]: [],
    [DayFlag.hidden]: [],
    [DayFlag.outside]: [],
    [DayFlag.focused]: [],
    [DayFlag.today]: []
  },
  customModifiers: {},
  selectionStates: {
    range_end: [],
    range_middle: [],
    range_start: [],
    selected: []
  },
  getModifiers: () => ({
    disabled: false,
    hidden: false,
    today: false,
    outside: false,
    focused: false,
    range_end: false,
    range_middle: false,
    range_start: false,
    selected: false
  })
};
describe("autoFocusTarget", () => {
  describe("when not in interactive", () => {
    test("the auto focus target is undefined", () => {
      const { result } = renderHook(() =>
        useFocus(
          undefined,
          undefined,
          () => {},
          () => false,
          {},
          useModifiers,
          dateLib
        )
      );
      expect(result.current.autoFocusTarget).toBeUndefined();
    });
  });
  describe("when in selection mode", () => {
    test("the autofocus target should be today", () => {
      const { result } = renderHook(() =>
        useFocus(
          undefined,
          undefined,
          () => {},
          () => false,
          {},
          useModifiers,
          dateLib
        )
      );
      expect(result.current.autoFocusTarget?.date).toEqual(
        new Date(2020, 0, 14)
      );
    });
    describe("if today is disabled", () => {
      test("the autofocus target should be the first focusable day (the 1st of month)", () => {
        const { result } = renderHook(() =>
          useFocus(
            undefined,
            undefined,
            () => {},
            () => false,
            {},
            useModifiers,
            dateLib
          )
        );
        expect(result.current.autoFocusTarget?.date).toEqual(month);
      });
    });
  });
});
