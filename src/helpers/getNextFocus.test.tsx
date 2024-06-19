import React from "react";

import { CalendarDay } from "../classes";
import type { PropsContextValue } from "../contexts/usePropsContext";
import type { MoveFocusBy, MoveFocusDir } from "../types/shared";

import { getNextFocus } from "./getNextFocus";

const props: Pick<
  PropsContextValue,
  "disabled" | "hidden" | "startMonth" | "endMonth"
> = {
  disabled: [],
  hidden: [],
  startMonth: undefined,
  endMonth: undefined
};

it("should return `undefined` if `attempt` exceeds 365", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const moveBy: MoveFocusBy = "day";
  const moveDir: MoveFocusDir = "after";
  const result = getNextFocus(moveBy, moveDir, focusedDay, props, 366);
  expect(result).toBeUndefined();
});

it("should return the focus date if it is not disabled or hidden", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const expectedDate = new Date(2020, 0, 2);
  const result = getNextFocus("day", "after", focusedDay, props);
  expect(result?.date).toEqual(expectedDate);
});

it("should return the next focus date if it is disabled", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const disabledDate = new Date(2020, 0, 2);
  const expectedDate = new Date(2020, 0, 3);
  const result = getNextFocus("day", "after", focusedDay, {
    ...props,
    disabled: [disabledDate]
  });
  expect(result?.date).toEqual(expectedDate);
});

it("should return the next focus date if it is hidden", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const hiddenDate = new Date(2020, 0, 2);
  const expectedDate = new Date(2020, 0, 3);
  const result = getNextFocus("day", "after", focusedDay, {
    ...props,
    hidden: [hiddenDate]
  });
  expect(result?.date).toEqual(expectedDate);
});
