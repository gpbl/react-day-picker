import {
  labelDay,
  labelMonthDropdown,
  labelNext,
  labelPrevious,
  labelWeekNumber,
  labelWeekNumberHeader,
  labelWeekday,
  labelYearDropdown
} from "../contexts/DayPicker/labels";

/** Map of functions to translate ARIA labels for the relative elements. */
export type Labels = {
  /** Return the label for the month dropdown. */
  labelMonthDropdown: typeof labelMonthDropdown;
  /** Return the label for the year dropdown. */
  labelYearDropdown: typeof labelYearDropdown;
  /** Return the label for the next month button. */
  labelNext: typeof labelNext;
  /** Return the label for the previous month button. */
  labelPrevious: typeof labelPrevious;
  /** Return the label for the day cell. */
  labelDay: typeof labelDay;
  /** Return the label for the weekday. */
  labelWeekday: typeof labelWeekday;
  /** Return the label for the week number. */
  labelWeekNumber: typeof labelWeekNumber;
  /**
   * Return the label for the column of the week number.
   *
   * @since 9.0.0
   */
  labelWeekNumberHeader: typeof labelWeekNumberHeader;
};

/** @deprecated Use `typeof labelDay` instead. */
export type DayLabel = typeof labelDay;

/** @deprecated Use `typeof labelNext` or `typeof labelPrevious` instead. */
export type NavButtonLabel = typeof labelNext;

/** @deprecated Use `typeof labelWeekday` instead. */
export type WeekdayLabel = typeof labelWeekday;

/** @deprecated Use `typeof labelWeekNumber` instead. */
export type WeekNumberLabel = typeof labelWeekNumber;
