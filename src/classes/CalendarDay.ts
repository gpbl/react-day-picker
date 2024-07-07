import { dateLib as defaultDateLib } from "../lib/index.js";
import type { DateLib } from "../types/index.js";

/**
 * Represent the day displayed in the calendar.
 *
 * In DayPicker, a `Day` is a `Date` that can be displayed in the calendar. It
 * is used as extension of the native `Date` object to provide additional
 * information about the day.
 */
export class CalendarDay {
  constructor(
    date: Date,
    displayMonth: Date,
    dateLib: DateLib = defaultDateLib
  ) {
    this.date = date;
    this.displayMonth = displayMonth;
    this.outside = Boolean(
      displayMonth && !dateLib.isSameMonth(date, displayMonth)
    );
    this.dateLib = dateLib;
    const { format } = dateLib;
    this.uid =
      format(date, "yyyyMMdd") +
      (this.outside ? `-` + format(displayMonth, "yyyyMMdd") : "");
  }

  /**
   * The utility functions to manipulate dates.
   *
   * @private
   */
  readonly dateLib: DateLib;

  /**
   * Whether the day is not belonging to the displayed month.
   *
   * When `outside` is `true`, use `displayMonth` to know to which month the day
   * belongs.
   */
  readonly outside: boolean;

  /**
   * The months where the day is displayed.
   *
   * In DayPicker, days can fall out the displayed months (e.g. when
   * `showOutsideDays` is `true`). This property is useful to know if the day is
   * in the same month of the displayed month.
   */
  readonly displayMonth: Date;

  /** The date represented by this day. */
  readonly date: Date;

  /** A unique identifier for the day */
  readonly uid: string;

  /**
   * Check if the day is the same as the given day: considering if it is in the
   * same display month.
   */
  isEqualTo(day: CalendarDay) {
    return (
      this.dateLib.isSameDay(day.date, this.date) &&
      this.dateLib.isSameMonth(day.displayMonth, this.displayMonth)
    );
  }
}
