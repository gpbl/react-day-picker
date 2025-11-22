import type { DateLib } from "../classes/DateLib.js";
import type { DayPickerProps } from "../types/index.js";

/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */
export function getNavMonths(
  props: Pick<
    DayPickerProps,
    | "captionLayout"
    | "endMonth"
    | "startMonth"
    | "today"
    | "timeZone"
    // Deprecated:
    | "fromMonth"
    | "fromYear"
    | "toMonth"
    | "toYear"
  >,
  dateLib: DateLib,
): [start: Date | undefined, end: Date | undefined] {
  let { startMonth, endMonth } = props;

  const normalizeStartMonth = (date: Date) =>
    dateLib.startOfMonth(
      dateLib.newDate(date.getFullYear(), date.getMonth(), 1),
    );
  const normalizeEndMonth = (date: Date) =>
    dateLib.endOfMonth(
      dateLib.newDate(date.getFullYear(), date.getMonth(), 1),
    );

  const {
    startOfYear,
    startOfDay,
    addYears,
    endOfYear,
    newDate,
    today,
  } = dateLib;

  // Handle deprecated code
  const { fromYear, toYear, fromMonth, toMonth } = props;
  if (!startMonth && fromMonth) {
    startMonth = normalizeStartMonth(fromMonth);
  }
  if (!startMonth && fromYear) {
    startMonth = dateLib.newDate(fromYear, 0, 1);
  }
  if (!endMonth && toMonth) {
    endMonth = normalizeEndMonth(toMonth);
  }
  if (!endMonth && toYear) {
    endMonth = newDate(toYear, 11, 31);
  }

  const hasYearDropdown =
    props.captionLayout === "dropdown" ||
    props.captionLayout === "dropdown-years";
  if (startMonth) {
    startMonth = normalizeStartMonth(startMonth);
  } else if (fromYear) {
    startMonth = newDate(fromYear, 0, 1);
  } else if (!startMonth && hasYearDropdown) {
    startMonth = startOfYear(addYears(props.today ?? today(), -100));
  }
  if (endMonth) {
    endMonth = normalizeEndMonth(endMonth);
  } else if (toYear) {
    endMonth = newDate(toYear, 11, 31);
  } else if (!endMonth && hasYearDropdown) {
    endMonth = endOfYear(props.today ?? today());
  }
  return [
    startMonth ? startOfDay(startMonth) : startMonth,
    endMonth ? startOfDay(endMonth) : endMonth,
  ];
}
