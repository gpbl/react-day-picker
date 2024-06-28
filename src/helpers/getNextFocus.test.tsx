import { CalendarDay } from "../classes";
import type { UseProps } from "../contexts/useProps";
import { dateLib } from "../lib";
import type { MoveFocusBy, MoveFocusDir } from "../types";

import { getNextFocus } from "./getNextFocus";

const props: Pick<
  UseProps,
  "disabled" | "hidden" | "startMonth" | "endMonth" | "dateLib"
> = {
  disabled: [],
  hidden: [],
  startMonth: undefined,
  endMonth: undefined,
  dateLib
};

it("should return `undefined` if `attempt` exceeds 365", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1),
    dateLib
  );
  const moveBy: MoveFocusBy = "day";
  const moveDir: MoveFocusDir = "after";
  const result = getNextFocus(moveBy, moveDir, focusedDay, props, 366);
  expect(result).toBeUndefined();
});

it("should return the focus date if it is not disabled or hidden", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1),
    dateLib
  );
  const expectedDate = new Date(2020, 0, 2);
  const result = getNextFocus("day", "after", focusedDay, props);
  expect(result?.date).toEqual(expectedDate);
});

it("should return the next focus date if it is disabled", () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1),
    dateLib
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
    new Date(2020, 0, 1),
    dateLib
  );
  const hiddenDate = new Date(2020, 0, 2);
  const expectedDate = new Date(2020, 0, 3);
  const result = getNextFocus("day", "after", focusedDay, {
    ...props,
    hidden: [hiddenDate]
  });
  expect(result?.date).toEqual(expectedDate);
});
