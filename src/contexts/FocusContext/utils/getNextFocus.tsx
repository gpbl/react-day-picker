import { getPossibleFocusDate } from "./getPossibleFocusDate";
import { DayPickerContext } from "../../DayPickerContext";
import { Mode } from "../../../types";
import { CalendarDay } from "../../../classes/CalendarDay";
import { dateMatchModifiers } from "../../ModifiersContext/utils/dateMatchModifiers";
import type { MoveFocusBy, MoveFocusDir } from "../FocusContext";

export type Options = Pick<
  DayPickerContext<Mode>,
  "modifiers" | "locale" | "ISOWeek" | "weekStartsOn" | "fromDate" | "toDate"
>;

export function getNextFocus(
  moveBy: MoveFocusBy,
  moveDir: MoveFocusDir,
  /** The date that is currently focused. */
  focused: CalendarDay,
  options: Pick<
    DayPickerContext<Mode>,
    | "disabled"
    | "hidden"
    | "modifiers"
    | "locale"
    | "ISOWeek"
    | "weekStartsOn"
    | "fromDate"
    | "toDate"
  >,
  attempt: number = 0,
): CalendarDay | undefined {
  if (attempt > 365) {
    // Limit the recursion to 365 attempts
    return undefined;
  }

  const possibleFocusDate = getPossibleFocusDate(
    moveBy,
    moveDir,
    focused.date,
    options,
  );

  const isDisabled = Boolean(
    options.disabled && dateMatchModifiers(possibleFocusDate, options.disabled),
  );

  const isHidden = Boolean(
    options.hidden && dateMatchModifiers(possibleFocusDate, options.hidden),
  );

  const targetMonth = possibleFocusDate;
  const focusDay = new CalendarDay(possibleFocusDate, targetMonth);
  if (!isDisabled && !isHidden) {
    return focusDay;
  }

  // Recursively attempt to find the next focusable date
  return getNextFocus(moveBy, moveDir, focusDay, options, attempt + 1);
}
