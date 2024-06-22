import { GenericDateConstructor } from "date-fns";
import { addDays } from "date-fns/addDays";
import { addMonths } from "date-fns/addMonths";
import { addWeeks } from "date-fns/addWeeks";
import { addYears } from "date-fns/addYears";
import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfWeek } from "date-fns/endOfWeek";
import { endOfYear } from "date-fns/endOfYear";
import { format } from "date-fns/format";
import { getISOWeek } from "date-fns/getISOWeek";
import { getUnixTime } from "date-fns/getUnixTime";
import { getWeek } from "date-fns/getWeek";
import { isAfter } from "date-fns/isAfter";
import { isBefore } from "date-fns/isBefore";
import { isDate } from "date-fns/isDate";
import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";
import { isSameYear } from "date-fns/isSameYear";
import { max } from "date-fns/max";
import { min } from "date-fns/min";
import { setMonth } from "date-fns/setMonth";
import { setYear } from "date-fns/setYear";
import { startOfDay } from "date-fns/startOfDay";
import { startOfISOWeek } from "date-fns/startOfISOWeek";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfWeek } from "date-fns/startOfWeek";
import { startOfYear } from "date-fns/startOfYear";

/** @private */
export type { Locale } from "date-fns";
/** @private */
export type { format } from "date-fns";
/** @private */
export type { Month as DateFnsMonth } from "date-fns";

/** The default date library to use with the date picker. */
export const dateLib = {
  /**
   * The constructor of the date object.
   *
   * You can pass a `DateConstructor` such as `UTCDate` from `@date-fns/utc` to
   * use UTC dates.
   *
   * @see https://react-day-picker.js.org/using-daypicker/localization#utc-dates
   */
  Date: Date as GenericDateConstructor,
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getISOWeek,
  getUnixTime,
  getWeek,
  isAfter,
  isBefore,
  isDate,
  isSameDay,
  isSameMonth,
  isSameYear,
  max,
  min,
  setMonth,
  setYear,
  startOfDay,
  startOfISOWeek,
  startOfMonth,
  startOfWeek,
  startOfYear
};
